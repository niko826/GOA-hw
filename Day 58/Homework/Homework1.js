let movies = ["Inception", "Interstellar", "Matrix", "Titanic"];
let favoriteMovie = "Matrix";

let result = movies.includes(favoriteMovie)
  ? "The Film That You Chose Is In The List"
  : "The Film That You Chose Is Not In The List";

console.log(result);
