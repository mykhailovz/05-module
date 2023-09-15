export default function MovieDetails({movie}) {
  if (!movie) {
    return;
  }

  return (
    <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={movie.image} alt={movie.title} data-testid='movie-image' />
      <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{movie.title}</h5>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white" >{movie.rating}</h5>
          <h6>{movie.releaseDate} - {movie.duration}</h6>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400" data-testid='movie-description'>{movie.description}</p>
      </div>

    </div>
  );
}
