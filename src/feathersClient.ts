import feathers from '@feathersjs/feathers';
import auth, { Storage } from '@feathersjs/authentication-client';
import rest from '@feathersjs/rest-client';
// import socketio from '@feathersjs/socketio-client';
// import io from 'socket.io-client';
import { iff, discard } from 'feathers-hooks-common';
import feathersVuex from 'feathers-vuex';

// const socket = io(process.env.VUE_APP_API_SERVER_API as string, { transports: ['websocket'] });
const restClient = rest(process.env.VUE_APP_API_SERVER_API);

const asyncLocalStorage: Storage = {
    getItem: (key: string) => new Promise((resolve) => {
        resolve(localStorage.getItem(key));
    }),
    setItem: (key: string, value: string) => new Promise((resolve) => {
        localStorage.setItem(key, value);
        resolve();
    }),
    removeItem: (key: string) => new Promise((resolve) => {
        localStorage.removeItem(key);
        resolve();
    }),
};

const feathersClient = feathers()
    .configure(restClient.fetch(window.fetch))
    .configure(auth({ storage: asyncLocalStorage }))
    .hooks({
        before: {
            all: [
                iff(
                    (context) => ['create', 'update', 'patch'].includes(context.method),
                    discard('__id', '__isTemp'),
                ),
            ],
        },
    });

export default feathersClient;

// Setting up feathers-vuex
const {
    makeServicePlugin, makeAuthPlugin, BaseModel, models, FeathersVuex,
} = feathersVuex(
    feathersClient,
    {
        serverAlias: 'api', // optional for working with multiple APIs (this is the default value)
        idField: '_id', // Must match the id field in your database table/collection
        whitelist: ['$regex', '$options'],
    },
);

export {
    makeAuthPlugin, makeServicePlugin, BaseModel, models, FeathersVuex,
};
