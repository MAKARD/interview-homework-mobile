import { API } from "./api";

export namespace UploadImage {
    export const api: API = {
        method: 'POST',
        path: '/file/upload'
    }

    export type RequestDTO = FormData;
}