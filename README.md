# UrlShortener

UrlShortener is an advanced backend application crafted to shorten URLs efficiently while carefully monitoring user interactions. The main goal of this system is to transform long URLs into shorter, more manageable links.
## Manual Installation

Clone the repo:

```bash
git clone https://github.com/yourusername/UrlShortener.git
cd UrlShortener
```
Install the dependencies:

```bash
npm install express cors mongoose ejs shortid dotenv
npm install --save-dev nodemon
```




## Table of Contents

- [Commands](#commands)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)

## Commands

Running in development:

```bash
npm start
# or
npm run dev
```


## Environment Variables

The environment variables can be found and modified in the `.env` file.

```bash

# Port
PORT = # default 666

# URL of the Mongo DB
CONNECTION_STRING = mongodb://127.0.0.1:27017/database_name

```

## Project Structure

```
UrlShortener/
|-- config/
|   |-- dbConnection.js

|-- models/
|   |-- ShortUrl.js

|-- views/
|   |-- index.ejs

|-- server.js
|-- .env
|-- README.md

```

### API Endpoints

`POST /shortUrl` - Full Url to Short Url\
`GET /` - Get All Short Urls


# Home Page
![Screenshot 2024-03-08 152638](https://github.com/kvprasad13/URL-Shortener/assets/123655329/780d137d-a88d-45ed-9ac2-da2841211ef8)


# Author
Varaprasad Kade
