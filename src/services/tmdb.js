import axios from "axios";
export const IMAGE_BASE = "https://image.tmdb.org/t/p/original";
export const POSTER_BASE = "https://image.tmdb.org/t/p/w342";
// Une "instance" axios : l'adresse et la clé sont écrites une seule fois

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: import.meta.env.VITE_TMDB_API_KEY,
        language: "fr-FR",
    },
});

// Les "adresses" des listes de films/séries qu'on veut afficher
export const ENDPOINTS = {
    trending: "/trending/all/week",
    netflixOriginals: "/discover/tv?with_networks=213",
    topRated: "/movie/top_rated",
    action: "/discover/movie?with_genres=28",
    comedy: "/discover/movie?with_genres=35",
    horror: "/discover/movie?with_genres=27",
    romance: "/discover/movie?with_genres=10749",
    documentary: "/discover/movie?with_genres=99",
};

// Récupère une liste (renvoie un tableau de films ou de séries)
export async function fetchList(endpoint) {
    const { data } = await api.get(endpoint);
    return data.results;
}

// Récupère la fiche détaillée. type = "movie" ou "tv"
export async function fetchDetails(type, id) {
    const { data } = await api.get(`/${type}/${id}`);
    return data;
}

// Un film a "title", une série a "name"
export function getTitle(item) {
    return item.title || item.name || item.original_name || "Sans titre";
}