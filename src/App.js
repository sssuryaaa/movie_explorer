import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import PopularMovies from "./components/PoularMovies";
import NowPlayingMovies from "./components/NowPlayingMovies";
import { createBrowserRouter, RouterProvider, outlet, Outlet } from "react-router-dom";
import UpcomingMovies from "./components/UpcomingMovies";
import TopRatedMovies from "./components/TopRatedMovies";

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
                }
            ]
        }
    ]
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>)