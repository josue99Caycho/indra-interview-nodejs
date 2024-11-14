import { SWAPI_PEAPLE_URL } from '../presentation/Utils/constants/url.mjs';
import DynamoDB from './config/dynamo.mjs';
import Axios from 'axios';

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
            console.error('Error al guardar los datos', error);
            throw error;
        }
    }

    async getSwapiById(id) {

        try {

            const url = `${SWAPI_PEAPLE_URL}/${id}`;
            console.log('URL : ' + url);
            const { data } = await Axios.get(url);
            console.log('Datos del actor en swapi', data)
            return data;

        } catch (error) {
            console.error('Error al obtener el actor de la Api de SWAPI', error);
            return {
                data: 404
            }
        }
    }
}