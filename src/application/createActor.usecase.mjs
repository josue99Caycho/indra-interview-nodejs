import Actor from "../domain/actor.model.mjs";

export class createActor {

    constructor(actorRespository) {
        this.actorRespository = actorRespository;
    }

    async execute(actor) {

        const newActor = new Actor(actor);
        newActor.validateActor();

        return await this.actorRespository.save(actor);
    }
}