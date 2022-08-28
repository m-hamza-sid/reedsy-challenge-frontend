import type { AxiosInstance } from "axios";
import MockAdapter from "axios-mock-adapter";
import config from "../config";
import singleReponse from "../resolvers/get-book-by-slug/mocks/data/response.js";
import listResponse from "../resolvers/get-books-list/mocks/data/response.js";

export default function createRemoteApiMocks(_axios: AxiosInstance) {
  const mock = new MockAdapter(_axios);

  mock.onGet(`${config.BASE_API_URL}${config.BOOK.ENDPOINTS.ALL}`).reply(function (config) {
    console.log(`info: network: sending simulated response for ${config.url}`);
    return [200, listResponse()];
  });

  const _rPaths = config.BOOK.ENDPOINTS.GET_BY_SLUG.split("/");
  mock.onGet(new RegExp(`${config.BASE_API_URL}/${_rPaths[1]}/.*`)).reply(function (config) {
    console.log(`info: network: sending simulated response for ${config.url}`);
    return [200, singleReponse()];
  });
}
