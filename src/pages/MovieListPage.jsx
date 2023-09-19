import { useEffect, useState } from 'react';

import MovieList from '../components/MovieList.jsx';
import MovieDetails from '../components/MovieDetails.jsx';
import SearchForm from '../components/SearchForm.jsx';
import GenreSelect from '../components/GenreSelect.jsx';
import SortControl from '../components/SortControl.jsx';

const sortByOptions = {
  'Release Date': 'release_date',
  'Title': 'title'
};

export default function MovieListPage() {
  const [movie, setMovie] = useState(null);
  const [movies, setMovies] = useState([]);
  const [genre, setGenre] = useState({ id: '13a5fee2-47e2-11ee-be56-0242ac120002', name: 'comedy' });
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState(sortByOptions["Release Date"]);

  const genres = getGenres();

  useEffect(() => {
    requestMovies();
  }, [sortBy, genre]);

  async function requestMovies() {
    const response = await fetch(`http://localhost:4000/movies?searchBy=genres&filter=${genre.name}&sortBy=${sortBy}&sortOrder=desc`);
    const moviesResponse = await response.json();
    setMovies(moviesResponse.data);
  }


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
    setSortBy(sortByOptions[sortBy]);
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

function getGenres() {
  return [
    { id: '13a5fa3c-47e2-11ee-be56-0242ac120002', name: 'all' },
    { id: '13a5fd16-47e2-11ee-be56-0242ac120002', name: 'documentary' },
    { id: '13a5fee2-47e2-11ee-be56-0242ac120002', name: 'comedy' },
    { id: '13a60036-47e2-11ee-be56-0242ac120002', name: 'horror' },
    { id: '13a6063a-47e2-11ee-be56-0242ac120002', name: 'crime' }
  ];
}
