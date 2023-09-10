<template>
    <div>
        <HeaderComponent />
        <LimbahComponent />
        <FooterComponent />
    </div>
</template>

<script>
import HeaderComponent from '../components/layout/HeaderComponent.vue';
import FooterComponent from '../components/layout/FooterComponent.vue';
import LimbahComponent from '../components/contents/LimbahComponent.vue';

export default {
    components: {
        HeaderComponent,
        FooterComponent,
        LimbahComponent,
    }
}
</script>
