<template>
    <div>
        <HeaderComponent />
        <InfoPelatihanComponent />
        <FooterComponent />
    </div>
</template>

<script>
import HeaderComponent from '../components/layout/HeaderComponent.vue';
import FooterComponent from '../components/layout/FooterComponent.vue';
import InfoPelatihanComponent from '../components/contents/InfoPelatihanComponent.vue';

export default {
    components: {
        HeaderComponent,
        FooterComponent,
        InfoPelatihanComponent,
    }
}
</script>
