import React, { useEffect, useState } from "react";
import axios from "axios";

// Layout HOC
import DefaultLayoutHoc from "../layout/Default.layout";

// Components
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.Component";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.Component";
import PosterSlider from "../components/PosterSlider/PosterSlider.Component";

const HomePage = () => {
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [premierMovies, setPremierMovies] = useState([]);
  const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);

  //API to get Top Rated Movies
  useEffect(() => {
    const requestTopRatedMovies = async () => {
      const getTopRatedMovies = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}`
      );
      setRecommendedMovies(getTopRatedMovies.data.results);
    };
    requestTopRatedMovies();
  }, []);

  //API to get Premier Movies
  useEffect(() => {
    const requestPopularMovies = async () => {
      const getPopularMovies = await axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}`
      );
      setPremierMovies(getPopularMovies.data.results);
    };
    requestPopularMovies();
  }, []);

  //API to get Online Streaming Events
  useEffect(() => {
    const requestUpcomingMovies = async () => {
      const getUpcomingMovies = await axios.get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}`
      );
      setOnlineStreamEvents(getUpcomingMovies.data.results);
    };
    requestUpcomingMovies();
  }, []);

  return (
    <>
      <HeroCarousel />

      <div className="container mx-auto px-4 md:px-12 my-8">
        <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3">
          The best of Entertainment
        </h1>
        <EntertainmentCardSlider />
      </div>

      <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSlider
          title="Recommended Movies"
          subtitle="List of recommonded movies"
          posters={recommendedMovies}
          isDark={false}
        />
      </div>

      <div className="bg-premier-800 py-12">
        <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
          <div className="hidden md:flex">
            <img
              src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
              alt="Rupay"
              className="w-full h-full"
            />
          </div>
          <PosterSlider
            title="Premiers"
            subtitle="Brand new releases every Friday"
            posters={premierMovies}
            isDark={true}
          />
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSlider
          title="Online Streaming Events"
          subtitle="Online Stream Events"
          posters={onlineStreamEvents}
          isDark={false}
        />
      </div>
    </>
  );
};

export default DefaultLayoutHoc(HomePage);
