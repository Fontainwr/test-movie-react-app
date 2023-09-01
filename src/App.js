import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";

const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

const App = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        searchMovies("");
    }, []);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    };

    return (
        <div className="app">
        <h1>Fontain's Movie Search!</h1>
        <h3>Using React!</h3>
        <div className="search">
    <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search a movie..."
        onKeyDown={(e) => {
            if (e.key === "Enter") {
                // Call the searchMovies function when "Enter" is pressed
                searchMovies(searchTerm);
            }
        }}
    />
    <img
        src={SearchIcon}
        alt="search"
        onClick={() => searchMovies(searchTerm)}
    />
</div>

        {movies?.length > 0 ? (
            <div className="container">
            {movies.map((movie) => (
                <MovieCard movie={movie} />
            ))}
            </div>
        ) : (
            <div className="empty">
            <h2>Yo...please type in a movie name!</h2>
            </div>
        )}
        </div>
    );
    };

export default App;