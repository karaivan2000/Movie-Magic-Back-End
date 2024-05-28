const movies = [{
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
    console.log(movieData);
    movies.push(movieData);
};

