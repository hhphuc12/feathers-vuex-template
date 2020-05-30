import { makeAuthPlugin } from '../feathersClient';

export default makeAuthPlugin({ userService: 'users' });
