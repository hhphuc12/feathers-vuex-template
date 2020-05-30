<template>
    <MainLayout :menuData="getMenuData"/>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import MainLayout, { Menu } from '@/components/main-layout/MainLayout.vue';
import './Administrator.scss';

@Component({
    components: { MainLayout },
})
export default class Home extends Vue {
    get getMenuData() {
        const menuData: Array<Menu> = [
            { name: this.$t('administrator.menu.role'), endpoint: 'role' },
            { name: this.$t('administrator.menu.group_user'), endpoint: 'group-role' },
        ];
        return menuData;
    }
}
</script>
