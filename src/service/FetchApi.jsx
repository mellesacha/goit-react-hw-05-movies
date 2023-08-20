const fetchApi = () => {
   const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzViMDk4MmNiYmFmM2NjZmNmYzI0OGFiM2E2NmQ5MiIsInN1YiI6IjY0ZTA3YWQ3MzcxMDk3MDEzOTQ4YmI3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qkliA1VfxAe6ijRoZGxMlTYbIEFjiMeOcgBrlhw_cpA'
  }
};

return fetch('https://api.themoviedb.org/3/trending/movie/day', options)
  .then(response => response.json());
};

export default fetchApi;