let subjects = {
  math: 90,
  physics: 80,
  chemistry: 85
};

let total = Object.values(subjects).reduce((sum, score) => sum + score, 0);
console.log("Total score:", total);
