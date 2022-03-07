# Daigaku Database

[daigakudatabase.com](daigakudatabaase.com) is a website for Japanese speakers to easily search colleges and universities in the U.S. and get useful information.

## Table of Contents

- [Motivation](#motivation)
- [Technologies](#technologies)
- [Releases](#releases)
- [Contributing](#contributing)

## Motivation

I wanted to create a nice-looking and useful website for Japanese students to search for useful information on colleges and universities in the U.S.

## Technologies

| Place used                                                                                                       | Technology used                                                                       | Notes                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Frontend framework                                                                                               | [React](https://reactjs.org/)                                                         | I mostly use functional components and react hooks.                                                                                      |
| Handling async data                                                                                              | [React Query](https://react-query.tanstack.com/)                                      | I initially started the project with [Redux](https://redux.js.org/) but the rapidly increasing added complexity made me switch.          |
| Type Checking                                                                                                    | [Flow](https://flow.org)                                                              | Easier setup than TypeScript in my opinion.                                                                                              |
| API (visit this [repo](https://github.com/DrPoppyseed/foris-collegesearch-api) for info)                         | [Node](https://nodejs.org/) and [Express](https://expressjs.com/)                     | The development time and complexity shrink by only using a single language, which helps when you're the only one working on the project. |
| Scraping (though not in this repo)                                                                               | [Scrapy](https://scrapy.org/) and [Splash](https://splash.readthedocs.io/en/stable/#) | Scrapy came in handy when scraping html-only websites and Splash, ones with JS.                                                          |
| Frontend Hosting                                                                                                 | [Netlify](https://www.netlify.com/)                                                   | Again, these services shrink dev time and allows me to concentrate on shipping the application.                                          |
| Backend Hosting (again, visit this [repo](https://github.com/DrPoppyseed/foris-collegesearch-api) for more info) | [Heroku](https://www.heroku.com/)                                                     | Fast and easy hosting for Node backends.                                                                                                 |
| Domain                                                                                                           | [Google Domains](https://domains.google/)                                             | I bought the domain [foris.app](https://foris.app) from Google Domains                                                                   |

## Releases

- The website is still in development phase. The testing site is currently live at [daigakudatabase.com](daigakudatabase.com).

## Contributing

- Pull requests are welcome but an email to me is highly encouraged. My email is [peaske16180@gmail.com](peaske16180@gmail.com), so don't hesitate to ask questions. I also speak Japanese, so Japanese contributors are welcome as well.
