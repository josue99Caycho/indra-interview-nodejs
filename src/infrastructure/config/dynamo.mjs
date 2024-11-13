import AWS from 'aws-sdk';
import { v4 } from 'uuid';

export class DynamoDb {

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
    }

}