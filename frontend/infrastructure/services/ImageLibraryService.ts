import * as ImagePicker from 'expo-image-picker';

interface Provider {
    launchLibrary: () => Promise<Array<{ uri: string }>>;
}

class Service {
    constructor(private readonly provider: Provider) { }

    public async launchLibrary(): Promise<string | undefined> {
        const result = await this.provider.launchLibrary();

        return result[0]?.uri;
    }
}

export const ImageLibraryService = new Service({
    launchLibrary: async () => {
        const result = await ImagePicker.launchImageLibraryAsync()

        if (result.canceled) {
            return []
        }

        return result.assets.map(({ uri }) => ({ uri }))
    }
});
