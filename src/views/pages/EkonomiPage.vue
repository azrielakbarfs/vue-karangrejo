<template>
    <div>
        <HeaderComponent />
        <EkonomiComponent />
        <FooterComponent />
    </div>
</template>

<script>
import HeaderComponent from '../components/layout/HeaderComponent.vue';
import FooterComponent from '../components/layout/FooterComponent.vue';
import EkonomiComponent from '../components/contents/EkonomiComponent.vue';

export default {
    components: {
        HeaderComponent,
        FooterComponent,
        EkonomiComponent,
    }
}
</script>
