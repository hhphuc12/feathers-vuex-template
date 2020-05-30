import feathersClient, { makeServicePlugin, BaseModel } from '../../feathersClient';

class UserModel extends BaseModel {
    // constructor(data: object, options: object) {
    //     super(data, options);
    // }

    // Required for $FeathersVuex plugin to work after production transpile.
    static modelName = 'User';

    // Define default properties here
    static instanceDefaults() {
        return {
            email: '',
            password: '',
        };
    }
}
const servicePath = 'users';
const servicePlugin = makeServicePlugin({
    Model: UserModel,
    service: feathersClient.service(servicePath),
    servicePath,
});

export default servicePlugin;
export { UserModel };
