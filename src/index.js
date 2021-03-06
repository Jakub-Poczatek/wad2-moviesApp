import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from "./components/siteHeader";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import addMovieReviewPage from "./pages/addMovieReviewPage";
import ShowListPage from "./pages/showListPage";
import ShowDetailsPage from "./pages/showDetailsPage";
import FavoriteShowsPage from "./pages/favoriteShowsPage";
import ShowReviewPage from "./pages/showReviewPage";
import AddShowReviewPage from "./pages/addShowReviewPage";
import WishlistPage from "./pages/wishlistPage";
import PrivateRoute from "./authentication/privateRoute";
import authHeader from "./authentication/authHeader";
import AuthContextProvider from "./authentication/authContext";
import LoginPage from "./pages/loginPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <AuthContextProvider>
    <SiteHeader />
    <authHeader/>
    <MoviesContextProvider>
      {""}
      <Switch>
        <Route exact path = "/login" component={LoginPage} />
        <Route exact path = "/movies/wishlist" component={WishlistPage} />
        <PrivateRoute exact path = "/tv/reviews/form" component={AddShowReviewPage} />
        <Route exact path = "/tv/reviews/:id" component={ShowReviewPage} />
        <Route exact path = "/tv/popular" component={ShowListPage} />
        <Route exact path = "/tv/popular/:id" component = {ShowDetailsPage} />
        <Route exact path = "/tv/favorites" component = {FavoriteShowsPage} />
        <PrivateRoute exact path = "/reviews/form" component = {addMovieReviewPage} />
        <Route exact path="/movies/upcoming" component={UpcomingMoviesPage} />
        <Route path="/movies/reviews/:id" component={MovieReviewPage}/>
        <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
        <Route path="/movies/:id" component={MoviePage} />
        <Route exact path="/" component={HomePage} />
        <Redirect from="*" to="/" />
      </Switch>
    </MoviesContextProvider>
    </AuthContextProvider>
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
