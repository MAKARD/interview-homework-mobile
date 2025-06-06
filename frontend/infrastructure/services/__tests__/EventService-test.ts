import { Service } from '../EventService';

describe('EventService', () => {
    const provider = {
        emit: jest.fn(),
        addListener: jest.fn(),
        removeListener: jest.fn()
    };

    it('should emit event', () => {
        const EventService = new Service(provider);

        const data = {};
        EventService.emit('event', data);

        expect(provider.emit).toHaveBeenCalledWith('event', data);
    });

    it('should subscribe to event', () => {
        const EventService = new Service(provider);
        
        const listener = jest.fn();
        
        EventService.subscribe('event', listener);

        expect(provider.addListener).toHaveBeenCalledWith('event', listener);
    });

    it('should should unsubscribe from event', () => {
         const EventService = new Service(provider);
        
        const listener = jest.fn();
        
        const unsubscribe = EventService.subscribe('event', listener);
        unsubscribe();

        expect(provider.removeListener).toHaveBeenCalledWith('event', listener);
    });
});
