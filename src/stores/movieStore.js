import { defineStore } from 'pinia';
export const useMovieStore = defineStore('movie-store', {
  state: () => ({
    popularMovies: [],
    //newMovies: [],
    //totalPages: null,
    newMovies: {
      response: [],
      error: null,
      fetching: false,
      totalPages: null,
      totalResult: 0,
    },
  }),
  actions: {
    async fetchPopularMovies() {
      const response = await fetch(
        'https://api.themoviedb.org/3/movie/popular?api_key=9a22b0050e2d46e11611865134b2efac&language=en-US&page=1'
      );
      try {
        const result = await response.json();
        this.popularMovies = result.results;
      } catch (error) {
        console.error('Error loading popular movies', error);
        return error;
      }
    },
    async fetchNewMovies(currentDate, page = 1) {
      const endDate = this.formatDate(currentDate);
      const startDate = this.getDateOfMonthsSubtracted(currentDate);
      // const response = await fetch(
      //   `https://api.themoviedb.org/3/discover/movie?api_key=9a22b0050e2d46e11611865134b2efac&include_video=false&primary_release_date.gte=${startDate}&primary_release_date.lte=${endDate}&page=${page}`
      // );
      // const response = await fetch(
      //   `https://api.themoviedb.org/3/movie/now_playing?api_key=9a22b0050e2d46e11611865134b2efac&language=en-US&page=${page}`
      // );
      try {
        // const response = await fetch(
        //   `https://api.themoviedb.org/3/discover/movie?api_key=9a22b0050e2d46e11611865134b2efac&include_video=false&primary_release_date.gte=${startDate}&primary_release_date.lte=${endDate}&page=${page}`
        // );
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=9a22b0050e2d46e11611865134b2efac&language=en-US&page=${page}`
        );
        const result = await response.json();
        //console.log(result, 'wadafa');
        // if (!this.totalPages) {
        //   console.log(typeof result.total_pages, 'begin');
        //   this.totalPages = result.total_pages;
        //   console.log(typeof this.totalPages, 'mierda');
        // }
        //this.totalPages = result.total_pages;
        //this.newMovies = result.results;
        console.log(result, 'ver');
        this.newMovies.response = result.results;
        this.newMovies.totalResult = result.total_results;
        if (!this.newMovies.totalPages) {
          this.newMovies.totalPages = result.total_pages;
        }
      } catch (error) {
        console.error(error);
        this.newMovies.error = error;
        return error;
      } finally {
        this.newMovies.fetching = true;
      }
    },
  },
  getters: {
    formatDate() {
      return (date) => {
        const newDate = new Date(date);
        return [
          newDate.getFullYear(),
          ('0' + (newDate.getMonth() + 1)).slice(-2),
          ('0' + newDate.getDate()).slice(-2),
        ].join('-');
      };
    },
    getDateOfMonthsSubtracted() {
      return (date, num = 1) =>
        this.formatDate(date.setMonth(date.getMonth() - num));
    },
  },
});
