const request = require('request');

request('https://api.thecatapi.com/v1/breeds/search' + `?q=${process.argv[2]}`, (error, response, body) => {
  if (error) {
    console.log(`Yikes!  Something went wrong... Specifically: ${error}`);
  }
  const data = JSON.parse(body);
  if (data[0] === undefined) {
    console.log(`Are you sure ${process.argv[2]} is a cat breed?  I don't think it is.`);
  } else {
    console.log(data[0]['description']);
  }
});