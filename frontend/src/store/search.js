import { defineStore } from 'pinia'
import axios from 'axios'
const url = import.meta.env.VITE_BASE_URL;

export const useSearchStore = defineStore('search', {
  state: () => ({
    searchResult: [],
    loading: false,
    cancelTokenSource: null,
  }),

  actions: {
    async searchUsers(searching) {
      if (this.cancelTokenSource) {
        this.cancelTokenSource.cancel('Operation canceled');
      }

      this.cancelTokenSource = axios.CancelToken.source();

      this.loading = true;
      try {
        const res = await axios.post(
          url + '/search',
          searching,
          { cancelToken: this.cancelTokenSource.token }
        );

        if (!res.data && res.status !== 200) {
          return;
        }

        this.loading = false;
        this.searchResult = res.data;
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log('Request canceled:', error.message);
        } else {
          console.error('Error occurred while searching:', error);
        }
      } finally {
        this.cancelTokenSource = null;
        this.loading = false;
      }
    }
  }
});
