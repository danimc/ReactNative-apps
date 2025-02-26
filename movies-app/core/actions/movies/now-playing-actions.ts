import { movieApi } from "../api/movie-api";

export const nowPlayingActions = async() => {
    try{

        const {data} = await movieApi.get('/now_playing')
        console.log(JSON.stringify(data, null, 2));

        return []

    }
    catch(error){
        console.error(error);
        throw 'cannot load now playing movies';
    }
}