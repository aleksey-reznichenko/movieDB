import { Route, Routes } from 'react-router-dom';
import { configLink } from './config';
import {
  NotFound,
  HomePage,
  TopMovies,
  TopSeries,
  Top250Films,
  FilmDetails,
  ActorDetails,
} from '../pages';
import { Search } from '../components/Search';

export const RouterList = (): JSX.Element => {
  return (
    <Routes>
      <Route path={configLink.home} element={<HomePage />} />
      <Route path={configLink.movies} element={<TopMovies />} />
      <Route path={configLink.series} element={<TopSeries />} />
      <Route path={configLink.top250Films} element={<Top250Films />} />
      <Route path={`${configLink.film}:id`} element={<FilmDetails />} />
      <Route path={`${configLink.actor}:id`} element={<ActorDetails />} />
      <Route path={configLink.search} element={<Search />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
