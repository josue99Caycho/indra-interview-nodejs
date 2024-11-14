import AWS from 'aws-sdk';
import { v4 } from 'uuid';

export default class DynamoDb {

    constructor() { }

    Connect() {
        return new AWS.DynamoDB.DocumentClient();
    }

    async Create(item) {

        const dynamo = this.Connect();
        const id = v4();
        const createdAt = new Date();
        const newItem = { id, ...item, createdAt };

        await dynamo.put({ TableName: 'AutorTable', Item: newItem }).promise();

        return newItem;
    }

    async GetAll() {

        const dynamo = this.Connect();
        const data = await dynamo.scan({ TableName: 'AutorTable' }).promise();
        return data.Items;

    }

    async GetById(id) {

        const dynamo = this.Connect();
        const data = await dynamo.get({ TableName: 'AutorTable', Key: { id } }).promise();
        return data.Item;

    }

}