import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import PopularMovies from "./components/PoularMovies";
import NowPlayingMovies from "./components/NowPlayingMovies";
import { createBrowserRouter, RouterProvider, outlet, Outlet } from "react-router-dom";
import UpcomingMovies from "./components/UpcomingMovies";
import TopRatedMovies from "./components/TopRatedMovies";
import PopularTV from "./components/PopularTV";
import AiringTodayTV from "./components/AiringTodayTV";
import OnTheAirTV from "./components/OnTheAirTV";
import TopRatedTV from "./components/TopRatedTV";
import PopularPeople from "./components/PopularPeople";

const AppLayout = () => {
    return (
        <div className="layout">
            <Header/>
            <Outlet/>
        </div>
    )
}

const appRouter = createBrowserRouter(
    [
        {
            path: "/",
            element: <AppLayout/>,
            children: [
                {
                    path:"/",
                    element: <Body/>
                },
                {
                    path: "/movies/popular",
                    element: <PopularMovies/>
                },
                {
                    path: "/movies/nowplaying",
                    element: <NowPlayingMovies/>
                },
                {
                    path: "/movies/upcoming",
                    element: <UpcomingMovies/>
                },
                {
                    path: "/movies/toprated",
                    element: <TopRatedMovies/>
                },
                {
                    path: "/tv/popular",
                    element: <PopularTV />
                },
                {
                    path: "/tv/airing_today",
                    element: <AiringTodayTV/>
                },
                {
                    path: "/tv/on_the_air",
                    element: <OnTheAirTV/>
                },
                {
                    path: "/tv/top_rated",
                    element: <TopRatedTV/>
                },
                {
                    path: "/people/popular",
                    element: <PopularPeople/>
                }
            ]
        }
    ]
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>)