import { getMovies } from '../src/controllers/movieController';
import { getMoviesByYear } from '../src/services/movieService';
import { Request, Response } from 'express';

jest.mock('../src/services/movieService'); 

describe('getMovies', () => {
    const year = '2020';
    const page = '1';
    it('should return movies for a valid year', async () => {
       
        const mockMovies = { results: [{ title: 'Joker', release_date: '2019-01-01', vote_average: 8.19 }] };
        
        (getMoviesByYear as jest.Mock).mockResolvedValue(mockMovies);

        const req = { query: { year, page } } as unknown as Request;
        const res = { json: jest.fn() } as unknown as Response;

        await getMovies(req, res);

        expect(getMoviesByYear).toHaveBeenCalledWith(year, parseInt(page));
        expect(res.json).toHaveBeenCalledWith(mockMovies);
    });

    it('should return an error if year is missing', async () => {
        const req = { query: {} } as Request;
        const res = { status: jest.fn().mockReturnThis(), json: jest.fn() } as unknown as Response;
    
        await getMovies(req, res);
    
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ error: 'Year is required' });
    });

    it('should return an error if service fails to fetch movies', async () => {
        
    
        (getMoviesByYear as jest.Mock).mockRejectedValue(new Error('Service error'));
    
        const req = { query: { year, page } } as unknown as Request;
        const res = { status: jest.fn().mockReturnThis(), json: jest.fn() } as unknown as Response;
    
        await getMovies(req, res);
    
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ error: 'Failed to fetch movies' });
    });
    
    
});
