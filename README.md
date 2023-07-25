# Frontend Challenge - Popular Movies List

## Introduction

The objective of this project is to create an application that lists the most popular movies of the day, using the free themoviedb API version 3. Additionally, the user should have the ability to view the details of a movie by clicking on an item in the list, as well as filter the movies by genre.

To view the project in production, simply click [here](https://tmdb-frontend-sand.vercel.app/).

## Technologies Used

For this challenge, I chose to use the following technologies:

- **NextJS**: The NextJS framework was chosen for its ease of implementing Server-Side Rendering (SSR) and ensuring better optimization for search engines (SEO). Additionally, page navigation is faster and smoother due to optimized page loading.

- **Tailwind CSS**: I used Tailwind CSS as the styling tool for the project. Tailwind is a utility-first library that allowed me to create styles quickly and efficiently, while also ensuring the responsiveness of the application.

- **TypeScript**: I opted to use TypeScript to add static typing to the project, which provides greater security and facilitates code maintenance, while making it more readable and clear.

## Getting Started

First, create a `.env` file in the root of the project, following the `.env.example` file provided, and add your themoviedb API key (you can create a free account at https://www.themoviedb.org/ to obtain the key)

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
