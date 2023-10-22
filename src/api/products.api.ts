import axios from "axios"
import { environment } from "../environments/environment.dev";

const endpoint: string = environment.production ? environment.remoteBackendUrl : environment.backendUrl;

const pagesApi = axios.create({
  baseURL: `${endpoint}/product`
});

export const getAll = () => pagesApi.get("");

// export const getOne = (code: unknown) => pagesApi.get(`/by_code/${code}`);

export const create = (product: unknown) => pagesApi.post("", product);

export const remove = (id: unknown) => pagesApi.delete(`/${id}`);

export const update = (id: unknown, page: unknown) => pagesApi.put(`/${id}/`, page);
