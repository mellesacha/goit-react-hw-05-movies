const BASE_URL = "https://api.themoviedb.org/3";

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzViMDk4MmNiYmFmM2NjZmNmYzI0OGFiM2E2NmQ5MiIsInN1YiI6IjY0ZTA3YWQ3MzcxMDk3MDEzOTQ4YmI3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qkliA1VfxAe6ijRoZGxMlTYbIEFjiMeOcgBrlhw_cpA'
  }
};

export const getTopOfDay = async () => {

return await fetch(`${BASE_URL}/trending/movie/day`, options)
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
};

export const getMovieByTitle = async (title) => {

  return await fetch(`${BASE_URL}/search/movie?query=${title}`, options)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
  };

  export const getMovieDetails = async (id) => {

    return await fetch(`${BASE_URL}/movie/${id}`, options)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
    };
  

export const getMovieCast = async (id) => {
return await fetch(`${BASE_URL}/movie/${id}/credits`, options)
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
};

export const getMovieReviews = async (id) => {
  return await fetch(`${BASE_URL}/movie/${id}/reviews`, options)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
  };