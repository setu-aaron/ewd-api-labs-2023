# ewd-api-labs-2023
Web API for Enterprise web development

## Git Hub Repo:
[EWD API Labs](https://github.com/setu-aaron/ewd-api-labs-2023)

## Starting the server
This project is configured to run with githup code spaces. To do that these are the steps to get that working:
npm run dev

You can also run this application locally:
```
npm install
npm start
```
### Gotchas
There is a .env file that is not checked in it should looks something like this:
```
NODE_ENV=development
PORT=8080
HOST=localhost
DATABASE_DIALECT=in-memory
TMDB_KEY=YOUR_TBDM_KEY
```