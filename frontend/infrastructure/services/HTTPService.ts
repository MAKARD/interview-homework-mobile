import { API } from '@/domain/apis/api';
import Axios from 'axios';

interface Provider {
    request: <T>(
        path: string,
        method: "GET" | "POST" | "PATCH" | "DELETE",
        body?: Record<string, any>,
        params?: URLSearchParams
    ) => Promise<T>
}

class Service {
    constructor(
        private readonly provider: Provider,
        private readonly baseUrl: string
    ) { }

    createRequest<
        ResponseDTO,
        RequestDTO extends Record<string, any>,
        QueryParamsDTO extends Record<string, string>,
    >(api: API) {
        interface Input {
            body: RequestDTO;
            queryParams: QueryParamsDTO;
            pathParams: Record<string, string>
        }

        return ({ body, queryParams, pathParams }: Input): Promise<ResponseDTO> => {
            return this.provider.request<ResponseDTO>(
                `${this.baseUrl}/${this.interpolatePath(api.path, pathParams)}`,
                api.method,
                body,
                new URLSearchParams(queryParams)
            );
        }
    }

    private interpolatePath(path: string, pathParams?: Record<string, string>) {
        if (!path.includes(":")) {
            return path;
        }

        if (path.includes(":") && !pathParams) {
            throw new Error('Missing path params object');
        }

        if (!pathParams) {
            return path;
        }

        return path.replace(/:([a-zA-Z0-9_]+)/g, (_, key) => {
            const value = pathParams[key];

            if (!value) {
                throw new Error(`Missing path param: ${key}`);
            }

            return encodeURIComponent(value);
        });
    }
}

const axiosInstance = Axios.create();

export const HTTPService = new Service({
    request: (path, method, body, params) => {
        return axiosInstance.request({
            method,
            url: path,
            data: body,
            params
        })
    }
}, 'http://localhost:3000/v1');
