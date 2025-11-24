import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://oubgvzejuwnsdwthdrao.supabase.co';
const SUPABASE_API_KEY = process.env.EXPO_PUBLIC_SUPABASE_API_KEY;
const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY!);

export const updateSearchMovie = async (query: string, movie: Movie) => {
    const { data: existing } = await supabase
        .from("metrics")
        .select("*")
        .eq("searchTerm", query)
        .eq("movie_id", movie.id)
        .maybeSingle();

    if (existing) {
        const { data, error } = await supabase
            .from("metrics")
            .update({ count: existing.count + 1 })
            .eq("id", existing.id)
            .select();

        return { data, error }
    }

    const { data, error } = await supabase
        .from("metrics")
        .insert({
            searchTerm: query,
            count: 1,
            movie_id: movie.id,
            poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            title: movie.title
        }).select();

    return { data, error }
}


export const getTrendingMovies = async (limit = 10): Promise<TrendingMovie[] | undefined> => {
    try {
        const { data, error } = await supabase
            .from("metrics")
            .select("*")
            .order("count", { ascending: false })
            .limit(limit)
        return data as unknown as TrendingMovie[]

    } catch (error) {
        console.log(error)
        return undefined;
    }
}

export const AllLikeMovies = async (): Promise<Likes[]> => {
    try{
        const {data, error} = await supabase 
        .from("likes")
        .select("*")
        console.log(data);
        return data as unknown as Likes[]
    }catch(error){
        console.log(error)
        throw error
    }
}

export const likeMovie = async (movie: Movie): Promise<Likes> => {
    try {
        console.log("movie Id " + movie.id)
        const { data, error } = await supabase
            .from("likes")
            .upsert({
                movie_id: movie.id,
                islike: true,
                title: movie.title,
                poster_path: movie.poster_path,
                popularity: movie.popularity
            },
            { onConflict: "movie_id" }
        ).select()
        
        console.log(data)
        console.log(error)
        return data as unknown as Likes

    } catch (error) {
        console.log(error)
        throw error
    }
}

export const dislikeMovie = async (movieId: string): Promise<Likes> => {
    try {
        console.log("movie Id " + movieId)
        const { data, error } = await supabase
            .from("likes")
            .update({
                islike: false
            })
            .eq("movie_id", movieId)

        return data as unknown as Likes

    } catch (error) {
        console.log(error)
        throw error
    }
}

export const getLikeMovie = async (movieId: string): Promise<Likes> => {
    try {
        const { data, error } = await supabase
            .from("likes")
            .select("*")
            .eq("movie_id", movieId)
            .maybeSingle()

        return data as Likes
    } catch (error) {
        console.log(error)
        throw error
    }
}