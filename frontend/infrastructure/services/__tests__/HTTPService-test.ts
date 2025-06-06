import { Service } from '../HTTPService';

describe('HTTPService', () => {
    const provider = {
        request: jest.fn().mockResolvedValue({
            mock: true
        })
    }

    const baseUrl = 'http://mock.com';

    it('should make a request', async () => {
        const HTTPService = new Service(provider, baseUrl);

        const api = {
            method: "POST" as const,
            path: "/mock"
        }

        const request = HTTPService.createRequest<{ mock: true }, {}, {}>(api);

        const response = await request({});

        expect(response.mock).toBe(true)
        expect(provider.request).toHaveBeenCalledWith(
            `${baseUrl}${api.path}`,
            api.method,
            undefined,
            new URLSearchParams()
        )
    });

    it('should interpolate path with params', async () => {
        const HTTPService = new Service(provider, baseUrl);

        const api = {
            method: "POST" as const,
            path: "/mock/:paramId/mock"
        }

        const request = HTTPService.createRequest<{ mock: true }, {}, {}>(api);

        const response = await request({
            pathParams: {
                paramId: 'mocked_param_id'
            }
        });

        expect(response.mock).toBe(true)
        expect(provider.request).toHaveBeenCalledWith(
            `${baseUrl}/mock/mocked_param_id/mock`,
            api.method,
            undefined,
            new URLSearchParams()
        )
    })
});