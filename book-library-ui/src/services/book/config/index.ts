interface Config {
  BASE_API_URL: string;
  BOOK: {
    ENDPOINTS: {
      ALL: string;
      GET_BY_SLUG: string;
    };
  };
}
const config: Config = {
  BASE_API_URL: import.meta.env.VITE_BASE_API_URL,
  BOOK: {
    ENDPOINTS: {
      ALL: "/books",
      GET_BY_SLUG: "/books/{slug}"
    }
  }
};

export default config;
