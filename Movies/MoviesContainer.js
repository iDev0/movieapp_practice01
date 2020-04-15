import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import MoviesPresenter from './MoviesPresenter'
import {movieAPI} from '../Api'

const MoviesContainer = () => {

    const [movies, setMovies] = useState({
        loading : true,
        nowPlaying : [],
        nowPlayingError : null,
        popular : [],
        popularError : null,
        upcoming : [],
        upcomingError : null
    })

    const getData = async () => {

        const [nowPlaying, nowPlayingError] = await movieAPI.nowPlaying()
        const [popular, popularError] = await movieAPI.popular()
        const [upcoming, upcomingError] = await movieAPI.upcoming()

        setMovies({
            loading : false,
            nowPlaying,
            nowPlayingError,
            popular,
            popularError,
            upcoming,
            upcomingError
        })
    }


    useEffect(() => {
        getData()
    }, [])

    return (
        <MoviesPresenter {...movies}/>
    )
}

export default MoviesContainer
