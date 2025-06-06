import { Service } from "../ImageLibraryService";

describe('ImageLibraryService', () => {
    const provider = {
        launchLibrary: jest.fn().mockResolvedValue([
            {
                uri: 'uri_1'
            },
            {
                uri: 'uri_2'
            }
        ])
    }

    it('should return a single uri', async () => {
        const ImageLibraryService = new Service(provider);

        const result = await ImageLibraryService.launchLibrary();

        expect(result).toBe('uri_1')
    })
});