import { MovieDBMoviesResponse } from "@/infrastructure/interfaces/moviedb-response";
import { movieApi } from "../api/movie-api";

export const nowPlayingActions = async() => {
    try{

        const {data} = await movieApi.get<MovieDBMoviesResponse>('/now_playing')
       // console.log(JSON.stringify(data, null, 2));

       console.log(data.results)

        return []

    }
    catch(error){
        console.error(error);
        throw 'cannot load now playing movies';
    }
}