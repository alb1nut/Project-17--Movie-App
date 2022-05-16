const API_URL ='https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3187278343ae50563e95d1a74b7e9a1b&page=1'


const IMG_Path ='https://image.tmdb.org/t/p/w1280'

const SEARCH_URL ='https://api.themoviedb.org/3/search/movie?api_key=3187278343ae50563e95d1a74b7e9a1b&query="'


getMovies(API_URL)


async function getMovies(url){
   const res =await fetch(url)
   const data =await res.json()
   console.log(data.results);
}


 