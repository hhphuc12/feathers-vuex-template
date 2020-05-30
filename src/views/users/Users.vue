<template>
    <div>
        <h3 class="title">{{ $t('user.title') }}</h3>
        <ListUsers :listUsers="listUsers"/>
    </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import ListUsers from '@/components/list-users/ListUsers.vue';
import feathersClient from '../../feathersClient';
import './Users.scss';

@Component({
    components: {
        ListUsers,
    },
})
export default class Home extends Vue {
    // eslint-disable-next-line class-methods-use-this
    async created() {
        try {
            await feathersClient.authenticate({
                strategy: 'local',
                email: 'test@yopmail.com',
                password: '123123',
            });
            await feathersClient.service('users').FeathersVuexModel.find();
        } catch (error) {
            console.log({ error });
        }
    }

    get listUsers() {
        return this.$store.getters['users/list'];
    }
}
</script>
