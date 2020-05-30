import Vue from 'vue';
import Vuex from 'vuex';
import { FeathersVuex } from '../feathersClient';
import auth from './store.auth';

Vue.use(Vuex);
Vue.use(FeathersVuex);

const requireModule = require.context(
    // The path where the service modules live
    './services',
    // Whether to look in subfolders
    false,
    // Only include .ts files (prevents duplicate imports`)
    /.ts$/,
);
const servicePlugins = requireModule
    .keys()
    .map((modulePath) => requireModule(modulePath).default);

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {},
    plugins: [...servicePlugins, auth],
});
