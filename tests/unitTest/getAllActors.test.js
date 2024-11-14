import GetAllActorsUseCase from '../../src/application/getAllActors.usecase.mjs';
import { getAllActorsMock } from '../mocks/getAllActors.mock';
import jest from 'jest-mock';

describe('Get all actors use case', ()=> {


    let mockUserRepository;
    let getAllActors;

    beforeEach(() => {
        mockUserRepository = {
            getAll: jest.fn()
        };
        getAllActors = new GetAllActorsUseCase(mockUserRepository);
    });

    it('Should return list of actors', async ()=> {

        mockUserRepository.getAll.mockResolvedValue(getAllActorsMock);

        const result = await getAllActors.execute();

        expect(result).toEqual(getAllActorsMock);
        expect(mockUserRepository.getAll).toHaveBeenCalled();
    });
});