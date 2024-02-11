import { describe, it, expect } from 'vitest';
import { curlToObject } from '..';

describe('REST requests', () => {
  it('it should convert a curl simple GET request to an axios object', () => {
    const curl = `curl -X GET 'https://rickandmortyapi.com/api/character/'`;
    const result = curlToObject(curl);
    expect(result).toEqual({
      url: 'https://rickandmortyapi.com/api/character/',
      method: 'GET',
    });
  });

  it('it should convert a curl GET request with headers to an axios object', () => {
    const curl = `curl --location 'https://my-org.atlassian.net/rest/api/2/issue/DEV-31' \ --header 'Authorization: Basic ZnJlZDpmcmVk' \ --header 'Content-Type: application/json'`;
    const result = curlToObject(curl);

    expect(result).toEqual({
      url: 'https://my-org.atlassian.net/rest/api/2/issue/DEV-31',
      method: 'GET',
      headers: {
        Authorization: 'Basic ZnJlZDpmcmVk',
        'Content-Type': 'application/json',
      },
    });
  });

  it('it should convert a curl POST request with form-urlencoded to an axios object', () => {
    const curl = `curl --location 'https://postman-echo.com/post' \ --header 'Content-Type: application/x-www-form-urlencoded' \ --header 'Cookie: sails.sid=s%3AyKD-uvLiPkZ6DzLP_HMUCiJyn2xsu6Hs.QHWaAQRG%2BQc9bqBP6JCiDYF8jxi%2BvYqneQdIHnHE6AM' \ --data-urlencode 'foo1=bar1' \ --data-urlencode 'foo2=bar2'`;

    const result = curlToObject(curl);
    expect(result).toEqual({
      url: 'https://postman-echo.com/post',
      data: 'foo1=bar1&foo2=bar2',
      method: 'POST',
    });
  });
});

describe('SOAP requests', () => {
  it('it should convert a curl SOAP request to an axios object', () => {
    const curl = `curl --location 'http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso' \ --header 'Content-Type: text/xml; charset=utf-8' \ --data '<?xml version="1.0" encoding="utf-8"?> <soap12:Envelope xmlns:soap12="http://www.w3.org/2003/05/soap-envelope"> <soap12:Body> <ListOfContinentsByName xmlns="http://www.oorsprong.org/websamples.countryinfo"> </ListOfContinentsByName> </soap12:Body> </soap12:Envelope>'`;
    const result = curlToObject(curl);
    expect(result).toEqual({
      url: 'http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso',
      method: 'POST',
      headers: {
        'Content-Type': 'text/xml; charset=utf-8',
      },
      data: `<?xml version="1.0" encoding="utf-8"?> <soap12:Envelope xmlns:soap12="http://www.w3.org/2003/05/soap-envelope"> <soap12:Body> <ListOfContinentsByName xmlns="http://www.oorsprong.org/websamples.countryinfo"> </ListOfContinentsByName> </soap12:Body> </soap12:Envelope>`,
    });
  });
});

describe('GraphQL requests', () => {
  it('it should convert a curl GraphQL request to an axios object', () => {
    const curl = `curl --location 'https://graphql.anilist.co/' \
--header 'Content-Type: application/json' \
--header 'Cookie: laravel_session=7Za5syQ4fgnYWNQ19IPW0WIZjQfMJ8NdDW89fRix' \
--data '{"query":"{  Media(id: 1) {    format    genres    tags {      id    }    averageScore  }}","variables":{}}'`;
    const result = curlToObject(curl);
    expect(result).toEqual({
      url: 'https://graphql.anilist.co/',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Cookie: 'laravel_session=7Za5syQ4fgnYWNQ19IPW0WIZjQfMJ8NdDW89fRix',
      },
      data: {
        query:
          '{  Media(id: 1) {    format    genres    tags {      id    }    averageScore  }}',
        variables: {},
      },
    });
  });
});
