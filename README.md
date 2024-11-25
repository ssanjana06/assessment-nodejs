# Movie API - Node.js Take-Home Assessment

This project provides an API to fetch movie data from The Movie Database (TMDb) based on the year and page number.

## Requirements

- Node.js v21 or higher (LTS)
- TypeScript
- Axios for API requests
- Jest for unit testing

## Project Setup

1. **Clone the repository**:

    ```bash
    git clone https://github.com/ssanjana06/assessment-nodejs.git
    cd assessment-nodejs
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Configure environment variables**:

    Create a `.env` file at the root of the project with the following contents:

    ```bash
    PORT = your_port,
    ACCESS_TOKEN=you_access_token
    ```

## Running the Application

To start the application in development mode, run:

```bash
npm start

```

## API Endpoints

### `GET /movies`
Fetches a list of popular movies for the given year and page.

**Query Parameters**:
- `year`: The year (YYYY format) to filter movies by. (Required)
- `page`: The page number of results to fetch. Default is `1`.

**Example**:

```bash
GET http://localhost:3000/movies?year=2019&page=1

```



## Testing
The project uses Jest for unit testing. To run tests, use the following command:

```bash
npm start

```


