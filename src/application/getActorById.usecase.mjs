
export default class getActorById {

    constructor(actorRespository) {
        this.actorRespository = actorRespository;
    }

    async execute(id) {
        return await this.actorRespository.getById(id)
    }

}