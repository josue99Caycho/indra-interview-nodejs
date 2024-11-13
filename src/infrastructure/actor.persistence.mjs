import DynamoDB from './config/dynamo.mjs';

export default class actorRespository {


    async getAll() {

        try {
            
        } catch (error) {
            
        }
    }

    async getById(id) {
        
        try {
            
        } catch (error) {
            
        }
    }

    async save (actor) {

        try {

            return await new DynamoDB().Create(actor);

        } catch (error) {
            console.log('Error al guardar los datos', error);
            throw error;
        }
    }
}