# Prerequisites

- node = 14 to Backend
- node = 16 to Frontend

## Setup Docker

If you want to run all with docker:

- need Docker-compose
- run `npm run docker-start`

This will rase:

- Backend in port 3001
- Frontend in port 3000

## Setud and run only Backend

- navigate to ./repos/Backend
- run `npm install`
- run `npm run start`

this will rase:
Backend in port 3001

also you can run

- run `npm run standard` to run automatic standardJs and
  if you have problems in the code in the result of `npm run standard` so you can run `npm run fix` to fix all isuess with standard fix

and you can run:

- run `npm run test` to run the API test

## Setud and run only Frontend

- navigate to ./repos/frontend
- run `npm install`
- run `npm run dev`

this will rase:
Frontend in port 3000
