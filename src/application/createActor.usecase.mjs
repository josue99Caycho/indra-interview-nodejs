import Actor from "../domain/actor.model.mjs";

export default class createActor {

    constructor(actorRespository) {
        this.actorRespository = actorRespository;
    }

    async execute(actor) {
        try {

            const newActor = new Actor(actor);
            newActor.validateActor();

            return await this.actorRespository.save(actor);
        } catch (error) {
            throw error;
        }
    }
}