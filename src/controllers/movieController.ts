import { Request, Response } from 'express';
import { getMoviesByYear } from '../services/movieService';

export const getMovies = async (req: Request, res: Response): Promise<void> => {
    const { year, page = 1 } = req.query;

    if (!year) {
        res.status(400).json({ error: 'Year is required' });
        return;
    }

    try {
        const movies = await getMoviesByYear(year as string, parseInt(page as string, 10));
        res.json(movies);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch movies' });
    }
};
