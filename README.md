# Axiosify

## Description
Axiosify is an tool crafted to seamlessly transform your mundane curls into majestic Axios objects with just a flick of the wrist. Say goodbye to the boring task of manually translating curls into Axios requests; Axiosify does it all for you, effortlessly.

## Features
- **Effortless Conversion**: With Axiosify, converting curls to Axios requests becomes a breeze. Simply install the package and let it work its magic.
- **Seamless Integration**: Integrate Axiosify into your projects without breaking a sweat. Its intuitive interface ensures a smooth transition into your existing workflows.
- **Versatility**: Whether you're a seasoned developer or a newcomer to the world of web development, Axiosify caters to all skill levels, offering a versatile solution for converting curls to Axios objects.
- **Enhanced Productivity**: Save valuable time and energy by automating the conversion process. Focus on building exceptional applications while Axiosify takes care of the nitty-gritty details.

## Installation
To install Axiosify, simply run the following command:

```bash
npm install axiosify
```

## Usage
Using Axiosify is as simple as pie. After installing the package, import it into your project and pass your curl commands as arguments to the `axiosify` function. Voilà! You now have a beautifully crafted Axios object ready to use.

```javascript
const axiosify = require('axiosify');

const curlCommand = `curl --location 'https://api.example.com/users' \ --header 'Authorization: Bearer YOUR_ACCESS_TOKEN'`;
const axiosObject = axiosify(curlCommand);

console.log(axiosObject);
/* 
axiosObject = {
  "url": "https://api.example.com/users",
  "headers": {
    "Authorization": "Bearer YOUR_ACCESS_TOKEN"
  },
  "method": "GET"
}
*/
```


## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
