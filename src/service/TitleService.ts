import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IActorFull, ITitleData } from '../models';
import { baseUrl, APIKEY } from './API';

export const titleAPI = createApi({
  reducerPath: 'titleAPI',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['title'],
  endpoints: (build) => ({
    getMoviesOrSeriesTVInformation: build.query<ITitleData, string>({
      query: (id) => ({
        url: `/uk/API/Title/${APIKEY}/${id}/FullActor,Posters,Images,Trailer,Ratings,Wikipedia`,
      }),
      providesTags: () => ['title'],
    }),
    getActorInformation: build.query<IActorFull, string>({
      query: (id) => ({
        url: `/uk/API/Name/${APIKEY}/${id}`,
      }),
      providesTags: () => ['title'],
    }),
  }),
});

export const {
  useGetMoviesOrSeriesTVInformationQuery,
  useGetActorInformationQuery,
} = titleAPI;
