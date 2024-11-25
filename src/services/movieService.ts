import { fetchMovies, fetchCredits } from './apiClient';

export const getMoviesByYear = async (year: string, page: number) => {
    const { results } = await fetchMovies(year, page);
    const movies = await Promise.all(
        results.map(async (movie: any) => {
            const credits = await fetchCredits(movie.id);
            const editors = credits?.crew
                .filter((crewMember: any) => crewMember.known_for_department === 'Editing')
                .map((editor: any) => editor.name) || [];
            
            return {
                title: movie.title,
                release_date: movie.release_date,
                vote_average: movie.vote_average,
                editors,
            };
        })
    );
    return movies;
};
