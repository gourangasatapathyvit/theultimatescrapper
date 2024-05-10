export interface mainPageObjProps {
    source: string[] | null;
    catagory: string | null;
    inputQuery: string | null;
    tmdbId:number |null;
  }

export interface TmdbMoviesResp {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface TmdbTvsResp {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_name?: string;
    overview: string;
    popularity: number;
    poster_path: string;
    first_air_date?: string;
    name?: string;
    vote_average: number;
    vote_count: number;
    origin_country?: string[];
}

export interface combinedDataObj {
    combinedData: {
        movie?: TmdbMoviesResp;
        series?: TmdbTvsResp;
    };
}

export interface TorrentData {
    name: string;
    magnetLink: string;
    seed: number;
    leech: number;
    size: string;
    uploader: string;
    date: string;
    downLoadLink: string | null;
    image: string | null;
    iframes:string[]|null;
}