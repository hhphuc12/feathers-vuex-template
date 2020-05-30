<template>
    <div class="main-layout">
        <div class="menu">
            <div
                v-for="(menu, index) in getMenuData"
                @click="redirect(menu.endpoint)"
                :class="getActiveClass(menu.endpoint)"
                :key="index"
            >
                {{ $t(menu.name) }}
            </div>
        </div>
        <div class="content">
            <router-view/>
        </div>
    </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';
import './MainLayout.scss';
import VueI18n from 'vue-i18n';

export interface Menu {
    endpoint: string;
    name: VueI18n.TranslateResult;
}

@Component
export default class MainLayout extends Vue {
    @Prop() private menuData?: Array<Menu>;

    endpoint!: string;

    get getMenuData() {
        if (this.menuData) {
            this.endpoint = this.menuData[0].endpoint;
            this.redirect(this.endpoint);
        }
        return this.menuData;
    }

    redirect(endpoint: string) {
        this.endpoint = endpoint;
        this.$router.push(`/administrator/${endpoint}`);
    }

    getActiveClass(endpoint: string) {
        return endpoint === this.endpoint && 'active';
    }
}
</script>
