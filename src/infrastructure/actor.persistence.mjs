import DynamoDB from './config/dynamo.mjs';

export default class actorRespository {

    async getAll() {

        try {

            return await new DynamoDB().GetAll();

        } catch (error) {
            console.error('Error al obtener todos los datos: ', error);
            throw error;
        }
    }

    async getById(id) {

        try {

            return await new DynamoDB().GetById(id);

        } catch (error) {
            console.error('Error al obtener los datos del usuario con id: ', id, error);
            throw error;
        }
    }

    async save(actor) {

        try {

            return await new DynamoDB().Create(actor);

        } catch (error) {
            console.log('Error al guardar los datos', error);
            throw error;
        }
    }
}