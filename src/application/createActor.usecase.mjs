import Actor from "../domain/actor.model.mjs";

export default class createActor {

    constructor(actorRespository) {
        this.actorRespository = actorRespository;
    }

    async execute(id) {
        try {

            // Buscar el codigo del actor en SWAPI
            const actorSwapi = await this.actorRespository.getSwapiById(id);

            // De no existir el codigo, indicar que el actor que se quiere persistir no se encuentra en la base de la Api
            if(actorSwapi.data === 404) {
                return { message: 'Cliente no existe en la base SWAPI' }
            }

            const newActor = new Actor(actorSwapi);

            // Persistir al actor en BD
            return await this.actorRespository.save(newActor);
        } catch (error) {
            throw error;
        }
    }
}