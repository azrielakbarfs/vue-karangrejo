<template>
    <div>
        <HeaderComponent />
        <HomeComponent />
        <FooterComponent />
    </div>
</template>

<script>
import HeaderComponent from '../components/layout/HeaderComponent.vue';
import FooterComponent from '../components/layout/FooterComponent.vue';
import HomeComponent from '../components/contents/HomeComponent.vue';

export default {
    components: {
        HeaderComponent,
        FooterComponent,
        HomeComponent,
    }
}
</script>
