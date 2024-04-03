"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = void 0;
const v2_1 = require("firebase-functions/v2");
const is_even_1 = require("is-even");
exports.api = v2_1.https.onRequest({
    memory: '128MiB',
    minInstances: 0,
    maxInstances: 1,
}, async (request, res) => {
    res.status(200).send(`Hello world!. Is 2 even? ${(0, is_even_1.isEven)(2)}`);
});
//# sourceMappingURL=index.js.map