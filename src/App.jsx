import { useState } from 'react';

import Counter from './components/Counter';
import SearchForm from './components/SearchForm';
import GenreSelect from './components/GenreSelect';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import SortControl from './components/SortControl';
import AddMovie from './components/AddMovie';
import EditMovie from './components/EditMovie';
import DeleteMovie from './components/DeleteMovie';
import MovieAdded from './components/MovieAdded';

function App() {
  const [movie, setMovie] = useState(null);

  const defaultCounterValue = 10;

  const defaultSearchQuery = 'Default movie name';
  function onSearch(searchQuery) {
    console.log('[you just searched mvoie] : ', searchQuery);
  }

  const defaultGenre = { id: '13a5fee2-47e2-11ee-be56-0242ac120002', name: 'comedy' };
  const genresList = [
    { id: '13a5fa3c-47e2-11ee-be56-0242ac120002', name: 'all' },
    { id: '13a5fd16-47e2-11ee-be56-0242ac120002', name: 'documentary' },
    { id: '13a5fee2-47e2-11ee-be56-0242ac120002', name: 'comedy' },
    { id: '13a60036-47e2-11ee-be56-0242ac120002', name: 'horror' },
    { id: '13a6063a-47e2-11ee-be56-0242ac120002', name: 'crime' }
  ];
  function onSelect(genre) {
    console.log('[you just select genre] : ', genre);
  }

  const movies = [
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
  function onSelectMovie(movie) {
    console.log('[you select movie]: ', movie);
    setMovie(movie);
  }

  function onSortBySelect(sortBy) {
    console.log('[you select sortBy]: ', sortBy);
  }


  function handleAdd() {
    document.getElementById('add-movie').showModal();
  }

  function handleEdit() {
    document.getElementById('edit-movie').showModal();
  }

  function handleDelete() {
    document.getElementById('delete-movie').showModal();
  }

  function handleMovieAdded() {
    document.getElementById('movie-added').showModal();
  }

  return (
    <>
      <Counter value={defaultCounterValue} />
      <SearchForm defaultSearchQuery={defaultSearchQuery} onSearch={onSearch} />
      <GenreSelect genres={genresList} genre={defaultGenre} onSelect={onSelect} />
      <SortControl onSelect={onSortBySelect} />
      <MovieDetails movie={movie}/>
      <MovieList movies={movies} onSelectMovie={onSelectMovie} />


      <h1>Here is a list of modals</h1>
      <ul>
        <li onClick={() => handleAdd()}><button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Add Movie Modal</button></li>
        <li onClick={() => handleEdit()}><button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Edit Movie Modal</button></li>
        <li onClick={() => handleDelete()}><button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Delete Movie Modal</button></li>
        <li onClick={() => handleMovieAdded()}><button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Movie Added Modal</button></li>
      </ul>

      <AddMovie />
      <EditMovie movie={movies[0]} />
      <DeleteMovie />
      <MovieAdded />
    </>
  );
}

export default App;
