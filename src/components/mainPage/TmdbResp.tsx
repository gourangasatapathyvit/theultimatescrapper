import { useState, useEffect } from "react";
import axios from "axios";
import PopUp from "../utilityComponents/PopUp";
import {TmdbMoviesResp, TmdbTvsResp, combinedDataObj } from "../../utility/AllProps";
import {useContext} from 'react';
import {MyGlobalContext} from '../../App';

const TmdbResp = () => {
    const source = useContext(MyGlobalContext);
    const [movies, setMovies] = useState<TmdbMoviesResp[]>([]);
    const [series, setSeries] = useState<TmdbTvsResp[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [content, setContent] = useState<string>();
    const [combinedData, setCombinedData] = useState<combinedDataObj>();
    
    const [searchTerm] = useState<string>(() => {
        const storedSearchTerm = localStorage.getItem('mainPageObj');
        const storedObj =  storedSearchTerm? JSON.parse(storedSearchTerm):null;
        return storedObj?storedObj.inputQuery:source?.mainPageObjProps.inputQuery;
    });

    const storedData = localStorage.getItem('mainPageObj');

    const scrapeMovieContent = (movie: TmdbMoviesResp) => {
        setIsModalOpen(true);
        setContent("movie");

        setIsModalOpen(true);
        setCombinedData(() => ({
            combinedData: {
                movie: movie,
            },
        }));
    };

    const scrapeSeriesContent = (show: TmdbTvsResp) => {
        setIsModalOpen(true);
        setContent("show");
        setCombinedData(() => ({
            combinedData: {
                series: show,
            },
        }));
    };

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch movie data
                const movieResponse = await axios.get(`${import.meta.env.VITE_APP_TMDB_MOVIE}${searchTerm}`);
                setMovies(movieResponse.data.results);
                
                // Fetch series data
                const seriesResponse = await axios.get(`${import.meta.env.VITE_APP_TMDB_SERIES}${searchTerm}`);
                setSeries(seriesResponse.data.results);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, [searchTerm, source,storedData]);

    return (
        <div className="my-4">
            <div className={movies.length > 0 ? "" : "hidden"}>
                <p className="text-6xl text-center font-semibold">MOVIES</p>
                <div className="flex flex-wrap items-start justify-center flex-row">
                    {movies.map((movie) => (
                        <div
                            key={movie.id}
                            className="card w-80 bg-base-100 shadow-xl m-2.5"
                        >
                            <figure>
                                <img
                                    src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                                    alt={`${movie.title}`}
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{movie.title}</h2>
                                <p className="line-clamp-3">{movie.overview}</p>
                                <div className="border-b border-gray-300 my-2"></div>
                                <div className="card-actions justify-center">

                                    <button
                                        onClick={() =>
                                            scrapeMovieContent(movie)
                                        }
                                        className="btn btn-primary w-full"
                                    >
                                        Scrape Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={series.length > 0 ? " mt-6" : "hidden"}>
                <p className="text-6xl text-center font-semibold">SERIES</p>
                <div className="flex flex-wrap items-start justify-center flex-row">
                    {series.map((show) => (
                        <div
                            key={show.id}
                            className="card w-80 bg-base-100 shadow-xl m-2.5"
                        >
                            <figure>
                                <img
                                    src={`https://image.tmdb.org/t/p/w342${show.poster_path}`}
                                    alt={`${show.original_name}`}
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {show.original_name}
                                </h2>
                                <p className="line-clamp-3">{show.overview}</p>
                                <div className="border-b border-gray-300 my-2"></div>
                                <div className="card-actions justify-center">
                                    <button
                                        onClick={() =>
                                            scrapeSeriesContent(show)
                                        }
                                        className="btn btn-primary w-full"
                                    >
                                        Scrape Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {isModalOpen && (
                <PopUp
                    source={source?.sourceList}
                    _isModalOpen={isModalOpen}
                    toggleModal={toggleModal}
                    data={combinedData as combinedDataObj}
                    contentType={content}
                />
            )}
            ;
        </div>
    );
};

export default TmdbResp;
