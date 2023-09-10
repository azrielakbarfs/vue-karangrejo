<template>
    <div>
        <HeaderComponent />
        <RumahBelajarComponent />
        <FooterComponent />
    </div>
</template>

<script>
import HeaderComponent from '../components/layout/HeaderComponent.vue';
import FooterComponent from '../components/layout/FooterComponent.vue';
import RumahBelajarComponent from '../components/contents/RumahBelajarComponent.vue';

export default {
    components: {
        HeaderComponent,
        FooterComponent,
        RumahBelajarComponent,
    }
}
</script>
