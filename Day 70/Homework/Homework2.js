class Movie {
  constructor(title, director, rating, releaseYear) {
    this.title = title;
    this.director = director;
    this.rating = rating;
    this.releaseYear = releaseYear;
  }

  isHit() {
    return this.rating > 8;
  }
}


const movie1 = new Movie("Inception", "Christopher Nolan", 8.8, 2010);
console.log(movie1.title, "is hit?", movie1.isHit());

const movie2 = new Movie("Average Movie", "Unknown Director", 6.5, 2020);
console.log(movie2.title, "is hit?", movie2.isHit());
