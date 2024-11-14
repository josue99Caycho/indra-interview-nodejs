
export default class getActorById {

    constructor(actorRespository) {
        this.actorRespository = actorRespository;
    }

    async execute(id) {

        const data = await this.actorRespository.getById(id)

        if(!data) return { data: 'Not Found' }

        return data;
    }

}