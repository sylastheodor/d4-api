const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  request('https://api.thecatapi.com/v1/breeds/search' + `?q=${breedName}`, (error, response, body) => {
    if (error) {
      return callback(`Yikes!  Something went wrong... Specifically: ${error}`, null);
    }
    const data = JSON.parse(body);
    if (data[0] === undefined) {
      return callback(`Are you sure ${breedName} is a cat breed?  I don't think it is.`, null);
    } else {
      return callback(null, data[0]['description']);
    }
  });
};

module.exports = { fetchBreedDescription };