import * as mongoose from "mongoose";
 
const RateSchema = new mongoose.Schema({
    Source: String,
    Value: String
});

const MovieSchema = new mongoose.Schema({
    Title: String,
    Year: String,
    Rated: String,
    Released: String,
    Runtime: String,
    Genre: String,
    Director: String,
    Writer: String,
    Actors: String,
    Plot: String,
    Language: String,
    Country: String,
    Awards: String,
    Poster: String,
    Ratings: [RateSchema],
    Metascore: String,
    imdbRating: String,
    imdbVotes: String,
    imdbID: String,
    Type: String,
    DVD: String,
    BoxOffice: String,
    Production: String,
    Website: String,
    Response: String
});


const MovieModel = mongoose.model('Movie', MovieSchema);
 
export { MovieModel }

