# FORIS US College Search (FORIS アメリカ大学検索)

[FORIS](https://foris.app) is a website for Japanese speakers to easily search colleges and universities in the U.S. and get useful information.

## Table of Contents

- [Motivation](#motivation)
- [Technologies](#technologies)
- [Releases](#releases)
- [Contributing](#contributing)
- [日本語の紹介](#日本語の紹介)

## Motivation

I wanted to create a nice-looking and useful website for Japanese students to search for and attain useful information on colleges and universities in the U.S., especially with the lack of such websites in Japanese. I am heavily using data provided by [IPEDS](https://nces.ed.gov/ipeds/) and [College Scorecard](https://collegescorecard.ed.gov/), both reliable sources from the federal government. However, I also use information scraped from other college lookup sites and wikipedia.

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

- The website is still in development phase. The testing site is currently live at [foris.app](https://foris.app)

## Contributing

- Pull requests are welcome but an email to me is highly encouraged. My email is [peaske16180@gmail.com](peaske16180@gmail.com), so don't hesitate to ask questions. I also speak Japanese, so Japanese contributors are welcome as well.

## 日本語の紹介

[FORIS](https://foris.app)は日本人学生のために作られた、アメリカの大学の検索サイトです。まだサイト構築の真っ最中ですが、新しい機能を続々追加していく予定です！質問やリクエスト、フィードバック等を歓迎しておりますので、ぜひ[peaske16180@gmail.com](peaske16180@gmail.com)へご連絡ください！
