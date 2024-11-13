import DynamoDB from './config/dynamo.mjs';

export class actorRespository {


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

            return await DynamoDB.Create(actor);

        } catch (error) {
            console.log('Error al guardar los datos', error);
            throw error;
        }
    }
}