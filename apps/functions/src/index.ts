import { https } from 'firebase-functions/v2';
import {isEven} from "is-even";

export const api = https.onRequest(
    {
        memory: '128MiB',
        minInstances: 0,
        maxInstances: 1,
    },
    async (request, res) => {
        res.status(200).send(`Hello world!. Is 2 even? ${isEven(2)}`);
    },
);