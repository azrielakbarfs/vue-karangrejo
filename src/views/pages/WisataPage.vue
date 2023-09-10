<template>
    <div>
        <HeaderComponent />
        <WisataComponent />
        <FooterComponent />
    </div>
</template>

<script>
import HeaderComponent from '../components/layout/HeaderComponent.vue';
import FooterComponent from '../components/layout/FooterComponent.vue';
import WisataComponent from '../components/contents/WisataComponent.vue';

export default {
    components: {
        HeaderComponent,
        FooterComponent,
        WisataComponent,
    }
}
</script>
