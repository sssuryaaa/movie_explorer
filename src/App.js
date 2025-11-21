import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import PopularMovies from "./components/movielist/PoularMovies";
import NowPlayingMovies from "./components/movielist/NowPlayingMovies";
import {
  createBrowserRouter,
  RouterProvider,
  outlet,
  Outlet,
} from "react-router-dom";
import UpcomingMovies from "./components/movielist/UpcomingMovies";
import TopRatedMovies from "./components/movielist/TopRatedMovies";
import PopularTV from "./components/TVlist/PopularTV";
import AiringTodayTV from "./components/TVlist/AiringTodayTV";
import OnTheAirTV from "./components/TVlist/OnTheAirTV";
import TopRatedTV from "./components/TVlist/TopRatedTV";
import PopularPeople from "./components/peoplelist/PopularPeople";
import Footer from "./components/footer/Footer";
import Wishlist from "./components/wishlist/Wishlist";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <div className="layout">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/movies/popular",
        element: <PopularMovies />,
      },
      {
        path: "/movies/nowplaying",
        element: <NowPlayingMovies />,
      },
      {
        path: "/movies/upcoming",
        element: <UpcomingMovies />,
      },
      {
        path: "/movies/toprated",
        element: <TopRatedMovies />,
      },
      {
        path: "/tv/popular",
        element: <PopularTV />,
      },
      {
        path: "/tv/airing_today",
        element: <AiringTodayTV />,
      },
      {
        path: "/tv/on_the_air",
        element: <OnTheAirTV />,
      },
      {
        path: "/tv/top_rated",
        element: <TopRatedTV />,
      },
      {
        path: "/people/popular",
        element: <PopularPeople />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>);
