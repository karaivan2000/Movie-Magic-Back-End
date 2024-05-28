const movies = [{
    _id: 1,
    title: 'Jungle Cuise',
    genre: 'Аction',
    director: 'Ivan',
    year: '2002',
    imageUrl: '/img/jungle-cruise.jpeg',
    rating: '5',
    description: 'Dreaming about saving countless lives '
  }];


exports.getAll = () => {
    return movies.slice();
}

exports.create = (movieData) => {
    movieData._id = movies[movies.length - 1]._id + 1;
    movies.push(movieData);
};

