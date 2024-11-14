
export default class getAllActors {

    constructor(actorRespository) {
        this.actorRespository = actorRespository;
    }

    async execute() {
        try {
            return await this.actorRespository.getAll()
        } catch (error) {
            throw error;
        }
    }

}