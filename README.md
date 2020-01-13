# apiDashboard
This project is as simple api to serve a dashboard with dummy information about expenses of clients in different categories. 
### Installing

To use this project, first you need to install [Node](https://nodejs.org/es/).

Then, clone this repository.

    $ git clone https://github.com/Carlosc23/apiDashboard/
    $ cd <dir where you have dowloaded the project>/apiDashboard

After being located in the project in cmd, run:

```
npm i
```
This command will install all the necessary packages to use and run the project.
Then, run the application:

	$ npm run start

To see your application, access this url in your browser: 

	http://localhost:3000
## Built With

* [Node](https://nodejs.org ).- The javascript runtime used.
* [Express](https://expressjs.com/es/)- Infrastructure for web applications for Node.js

## Project structure
After you clone, install packages and run it. You may want to know the structure of the project. Basically, the structure is this:
```
  ├── apiDashboard
    │   ├── bin
    │   ├── config
         ├── database.js
    │   ├── controllers
         ├── categoriesController.js
         ├── clientsController.js
         ├── summaryController.js
    │   ├── models
         ├── Client.js
    │   ├── public
    │   ├── routes
         ├── categories.js
         ├── clients.js
         ├── index.js
         ├── summary.js
    │   ├── views
    │	├── .gitignore
    │	├── app.js
    │	├── package.json
    │	├── README.md
```
`config` refer to the folder where connections or setup will be stored, for example database connection.

`controllers` is the folder where the code rlated to controllers for routes are stored.

`routes` is the folder where the routes are invoked in a get or post to API.

`views` is the folder where views are stored in order to be a response.

`app.js` Express server

`gitignore`   File to ignore all heavy or unnecessry packages.

`package.json` File where are listed all the necessary packages that need the project to run.

`README.md`   Instructions and description of the project.




## Authors

* **Carlos Calderon** - *Initial work*

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details