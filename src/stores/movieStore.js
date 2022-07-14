import { defineStore } from "pinia";
export const useMovieStore = defineStore("movie-store", {
  state: () => ({
    popularMovies: [],
    newMovies: [],
  }),
  actions: {
    async fetchPopularMovies() {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=9a22b0050e2d46e11611865134b2efac&language=en-US&page=1"
      );
      try {
        const result = await response.json();
        this.popularMovies = result.results;
      } catch (error) {
        console.error("Error loading popular movies", error);
        return error;
      }
    },
    async fetchNewMovies(currentDate) {
      const endDate = this.formatDate(currentDate);
      const startDate = this.getDateOfMonthsSubtracted(currentDate);
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=9a22b0050e2d46e11611865134b2efac&include_video=false&primary_release_date.gte=${startDate}&primary_release_date.lte=${endDate}&page=1`
      );
      try {
        const result = await response.json();
        this.newMovies = result.results;
      } catch (error) {
        console.error(error);
        return error;
      }
    },
  },
  getters: {
    formatDate() {
      return (date) => {
        const newDate = new Date(date);
        return [
          newDate.getFullYear(),
          ("0" + (newDate.getMonth() + 1)).slice(-2),
          ("0" + newDate.getDate()).slice(-2),
        ].join("-");
      };
    },
    getDateOfMonthsSubtracted() {
      return (date, num = 1) =>
        this.formatDate(date.setMonth(date.getMonth() - num));
    },
  },
});
