const Cast = require(`../models/Cast`);
const Movie = require(`../models/Movie`);

exports.getAll = () => Cast.find();
exports.create = (castData) => Cast.create(castData);
exports.getByMovieId =  async (movieId) => {
    const movie = await Movie.findById(movieId);
    const casts = await Cast.find({_id})
}