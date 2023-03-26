# ewd-api-labs-2023
Web API for Enterprise web development

## Git Hub Repo:
[EWD API Labs](https://github.com/setu-aaron/ewd-api-labs-2023)

## Starting the server
This project is configured to run with githup code spaces. To do that these are the steps to get that working:
If this is is a clean install of VSCode you will want to install the "GitHub Codespaces" plugin.
You can either open the command pallette (Shift - Command - P) search for Create codespace

Once you have created it and you stopped the container you can click on the bottm left button that looks a little like this: >< and select connect to codespace

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