import EventEmitter from "eventemitter3";

interface Provider {
    emit: (name: string, data: any) => void;
    addListener: (name: string, listener: (data: any) => void) => void;
    removeListener: (name: string, listener: (data: any) => void) => void;
}

class Service {
    constructor(private readonly provider: Provider) {}

    emit<T>(eventName: string, data: T) {
        this.provider.emit(eventName, data)
    }

    subscribe<T>(eventName: string, listener: (data: T) => void) {
        this.provider.addListener(eventName, listener);

        return () => this.provider.removeListener(eventName, listener)
    }
}

export const EventService = new Service(new EventEmitter());
