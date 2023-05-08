import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IMoviesData } from '../models';
import { baseUrl, APIKEY } from './API';

export const otherAPI = createApi({
  reducerPath: 'otherAPI',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['other'],
  endpoints: (build) => ({
    getTop250Movies: build.query<IMoviesData, string>({
      query: (lang = 'en') => ({
        url: `/${lang}/API/Top250Movies/${APIKEY}`,
      }),
      providesTags: () => ['other'],
    }),
    getPopularMovies: build.query<IMoviesData, string>({
      query: (lang = 'en') => ({
        url: `/${lang}/API/MostPopularMovies/${APIKEY}`,
      }),
      providesTags: () => ['other'],
    }),
    getPopularTVs: build.query<IMoviesData, string>({
      query: (lang = 'en') => ({
        url: `/${lang}/API/MostPopularTVs/${APIKEY}`,
      }),
      providesTags: () => ['other'],
    }),
  }),
});

export const {
  useGetTop250MoviesQuery,
  useGetPopularMoviesQuery,
  useGetPopularTVsQuery,
} = otherAPI;
