let countryCity = {
  georgia: "tbilisi",
  france: "paris",
  germany: "berlin"
};

let cityToCheck = "paris";

let exists = Object.values(countryCity).includes(cityToCheck);
console.log(exists);
