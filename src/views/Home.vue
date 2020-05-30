<template>
    <div class="home">
        <h3>{{ $t('home.welcome') }}</h3>
        <img alt="Vue logo" src="../assets/logo.png">
        <div>
            <v-btn small color="primary" @click="changeLocale('en')">
                EN
            </v-btn>
            <v-btn small color="error" @click="changeLocale('ja')">
                JA
            </v-btn>
        </div>
    </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';
import feathersClient from '@/feathersClient';
import i18n from '@/plugins/i18n';

@Component
export default class Home extends Vue {
    @Prop() private msg!: string;

    async created() {
        try {
            await feathersClient.authenticate({
                strategy: 'local',
                email: 'test@yopmail.com',
                password: '123123',
            });
            await feathersClient.service('users').FeathersVuexModel.find();
        } catch (error) {
            console.log(error);
        }
    }

    changeLocale(locale: string) {
        i18n.locale = locale;
    }
}
</script>
