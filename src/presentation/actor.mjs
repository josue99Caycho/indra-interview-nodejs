// Casos de uso
import createActorUseCase from '../application/createActor.usecase.mjs';
import getActorById from '../application/getActorById.usecase.mjs';
import getAllActors from '../application/getAllActors.usecase.mjs';

// Persistencia
import ActorRepository from '../infrastructure/actor.persistence.mjs';

/**
 * Crear nuevo actor
 */
export const createActor = async (event) => {

    try {

        const body = JSON.parse(event.body);
        const actorRepository = new ActorRepository();
        const createActor = new createActorUseCase(actorRepository);
        const response = await createActor.execute(body.actorId);

        return {
            statusCode: 201,
            body: JSON.stringify(response)
        };
        
    } catch (error) {
        console.log('Error al persistir', error)
        return {
            statusCode: 500,
            body: {
                error: true,
                message: 'Ocurrió un error al guardar el nuevo actor'
            }
        }
    }
}

/**
 * Obtener un actor por su ID
 */
export const getById = async (event) => {

    try {

        const actorRepository = new ActorRepository();
        const actor = new getActorById(actorRepository);
        const response = await actor.execute(event.pathParameters.id);

        return {
            statusCode: 200,
            body: JSON.stringify(response)
        };
        
    } catch (error) {
        return {
            statusCode: 500,
            body: {
                error: true,
                message: 'Ocurrió un error al obtener el actor'
            }
        }
    }
}

/**
 * Obtener todos los actores
 */
export const getAll = async () => {

    try {

        const actorRepository = new ActorRepository();
        const actorList = new getAllActors(actorRepository);
        const response = await actorList.execute();

        return {
            statusCode: 200,
            body: JSON.stringify(response)
        };
        
    } catch (error) {
        return {
            statusCode: 500,
            body: {
                error: true,
                message: 'Ocurrió un error al obtener todos los actores'
            }
        }
    }
}