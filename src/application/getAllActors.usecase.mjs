
export class getAllActors {

    constructor(actorRespository) {
        this.actorRespository = actorRespository;
    }

    async execute() {
        return await this.actorRespository.getAll(id)
    }

}