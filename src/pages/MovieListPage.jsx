import { useState } from 'react';

import MovieList from '../components/MovieList.jsx';
import MovieDetails from '../components/MovieDetails.jsx';
import SearchForm from '../components/SearchForm.jsx';
import GenreSelect from '../components/GenreSelect.jsx';
import SortControl from "../components/SortControl.jsx";

const sortByOptions = {
  'Release Date': 'Release Date',
  'Title': 'Title'
};

export default function MovieListPage() {
  const [movie, setMovie] = useState(null);
  const [genre, setGenre] = useState({ id: '13a5fee2-47e2-11ee-be56-0242ac120002', name: 'comedy' });
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState(sortByOptions["Release Date"]);

  const genres = getGenres();
  const movies = getMovies();

  function onSelectMovie(movie) {
    console.log('[you select movie]: ', movie);
    setMovie(movie);
  }

  function onSearch(searchQuery) {
    console.log('[you just searched mvoie] : ', searchQuery);
    setSearchQuery(searchQuery)
  }

  function onGenreSelect(genre) {
    console.log('[you just select genre] : ', genre);
    setGenre(genre);
  }

  function onSortBySelect(sortBy) {
    console.log('[you select sortBy]: ', sortBy);
    setSortBy(sortBy);
  }

  return (
    <>
      <SearchForm defaultSearchQuery={searchQuery} onSearch={onSearch} />
      <GenreSelect genres={genres} genre={genre} onSelect={onGenreSelect} />
      <SortControl sortBy={sortBy} onSelect={onSortBySelect} />
      <MovieDetails movie={movie}/>
      <MovieList movies={movies} onSelectMovie={onSelectMovie} />
    </>

  );
}

function getMovies() {
  return [
    {
      id: '2461b6ba-5091-11ee-be56-0242ac120002',
      title: 'Pulp Fiction',
      rating: 8.9,
      description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
      duration: '2h 34m',
      genres: ['Drama', 'Biography', 'Music', 'Crime'],
      releaseDate: '1994-11-14T09:49:14.171Z',
      image: 'https://flxt.tmsimg.com/assets/p15684_p_v13_an.jpg'
    },
    {
      id: '2461b9b2-5091-11ee-be56-0242ac120002',
      title: 'Bohemian Rhapsody',
      rating: 7.9,
      description: 'The story of the legendary British rock band Queen and lead singer Freddie Mercury, leading up to their famous performance at Live Aid (1985).',
      duration: '2h 14m',
      genres: ['Action & Adventure'],
      releaseDate: '2018-04-12T10:49:14.171Z',
      image: 'https://m.media-amazon.com/images/M/MV5BMTA2NDc3Njg5NDVeQTJeQWpwZ15BbWU4MDc1NDcxNTUz._V1_.jpg'
    },
    {
      id: '2461b9b2-5091-11ee-be56-0242ac120003',
      title: 'Monarch: Legacy of Monsters',
      rating: null,
      description: 'Set after the battle between Godzilla and the Titans, revealing that monsters are real, follows one family\'s journey to uncover its buried secrets and a legacy linking them to Monarch.',
      duration: '1h 10m',
      genres: ['Action & Adventure', 'Sci-fi'],
      releaseDate: '2023-12-13T08:49:13.171Z',
      image: 'https://fictionhorizon.com/wp-content/uploads/2023/09/monarch-legacy-of-monsters-release-date-and-time.jpg'
    },
    {
      id: '2461b9b2-5091-11ee-be56-0242ac120004',
      title: 'Forrest Gump',
      rating: 8.8,
      description: 'The history of the United States from the 1950s to the \'70s unfolds from the perspective of an Alabama man with an IQ of 75, who yearns to be reunited with his childhood sweetheart.',
      duration: '2h 22m',
      genres: ['Drama', 'Romance'],
      releaseDate: '1994-01-142T09:49:14.172Z',
      image: 'https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg'
    },
  ];
}

function getGenres() {
  return [
    { id: '13a5fa3c-47e2-11ee-be56-0242ac120002', name: 'all' },
    { id: '13a5fd16-47e2-11ee-be56-0242ac120002', name: 'documentary' },
    { id: '13a5fee2-47e2-11ee-be56-0242ac120002', name: 'comedy' },
    { id: '13a60036-47e2-11ee-be56-0242ac120002', name: 'horror' },
    { id: '13a6063a-47e2-11ee-be56-0242ac120002', name: 'crime' }
  ];
}