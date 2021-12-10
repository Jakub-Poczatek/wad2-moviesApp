import React from "react";
import PageTemplate from "../components/templateTvListPage";
import {useQuery} from "react-query";
import Spinner from "../components/spinner";
import { getPopularTv } from "../api/tmdb-api";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";

const PopularTvPage = (props) => {
    const {data, error, isLoading, isError} = useQuery("popularTv", getPopularTv);

    if(isLoading){
        return <Spinner />
    }

    if (isError){
        return <h1>{error.message}</h1>
    }
    const popularTv = data.results;

    ///////////////////
    //Do favourite TV//
    ///////////////////

    console.log("Test Code");

    return(
        <PageTemplate
        title= "Popular Tv Shows"
        shows = {popularTv}
        action = {(popTv) => {
            //return <AddToFavoritesIcon movie = {popTv}/>
        }}
        />
    );
};

export default PopularTvPage;