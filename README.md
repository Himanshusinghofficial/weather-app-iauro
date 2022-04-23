# Weather Application

Weather apps enable users to get instant alerts regarding weather conditions. Weather apps are the simplest method to know about the updates of the upcoming weather.

# Hi, I'm Himanshu Singh! 👋

## Tech Stack

**Client:** HTML, CSS, React

**Server:** Node, Express

## Features

- Clean & Light weight code
- Deploye on Heroku
- Responsive website
- Backend + Frontend

## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## API Reference

#### Geocode api

```http
  GET: https://api.mapbox.com/geocoding/v5/mapbox.places/ + encodeURIComponent(address) + '.json?access_token=${api_key}
```

| Parameter | Type                                                 | Description                    |
| :-------- | :--------------------------------------------------- | :----------------------------- |
| `api_key` | `https://api.mapbox.com/geocoding/v5/mapbox.places/` | **Required**. api_key to fetch |

#### forecast api

```http
  GET:  https://api.openweathermap.org/data/2.5/forecast?lat= + latitude + &lon= + longitude + '&appid=${api_key}'
```

| Parameter | Type                                               | Description                    |
| :-------- | :------------------------------------------------- | :----------------------------- |
| `api_keu` | `https://api.openweathermap.org/data/2.5/forecast` | **Required**. api_key to fetch |

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`API_KEY`

`WEB_URL`

## Authors

[@Himanshusinghofficial](https://github.com/Himanshusinghofficial)

## Appendix

Used basic styling/css for creating frontend
