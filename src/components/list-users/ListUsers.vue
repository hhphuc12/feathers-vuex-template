<template>
    <div class="hello">
        <ul>
            <li v-for="(user, index) in listUsers" :key="index">
                {{user.email}}
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { UserModel } from '@/store/services/users';
import './ListUsers.scss';

@Component
export default class ListUsers extends Vue {
    @Prop() private listUsers?: Array<UserModel>;
}
</script>
