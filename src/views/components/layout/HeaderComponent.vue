<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container d-flex justify-content-between">
                <div v-if="!isNavbarOpen" class="ms-4">
                    <RouterLink class="navbar-brand" :to="{ name: 'default' }">
                        <img src="../../../assets/images/layout/logo.png" alt="Logo" class="img-fluid logo-image">
                    </RouterLink>
                </div>
                <div class="me-4">
                    <button class="navbar-toggler" @click="toggleNavbar">
                        <span class="navbar-toggler-icon smaller-icon"></span>
                    </button>

                    <div :class="{ 'collapse': !isNavbarOpen, 'navbar-collapse': true }" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <RouterLink class="nav-link" :to="{ name: 'default' }">Home</RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink class="nav-link" :to="{ name: 'wisata' }">Wisata</RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink class="nav-link" :to="{ name: 'ekonomi' }">Ekonomi</RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink class="nav-link" :to="{ name: 'limbah' }">Limbah</RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink class="nav-link" :to="{ name: 'rumah-belajar' }">Rumah Belajar</RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink class="nav-link" :to="{ name: 'info-pelatihan' }">Info Pelatihan</RouterLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isNavbarOpen: false
        };
    },
    methods: {
        toggleNavbar() {
            this.isNavbarOpen = !this.isNavbarOpen;
        }
    }
};
</script>


<style scoped>
.logo-image {
    height: 40px;
    object-fit: cover;
}

.smaller-icon {
    font-size: 1rem;
}

@media (max-width: 768px) {

    .smaller-icon {
        font-size: 0.8rem;
    }

    .navbar-toggler[aria-expanded="true"]+.navbar-collapse .logo-image {
        display: none;
    }
}

.nav-link {
    border: solid 1px rgba(255, 255, 255, 0.1);
    border-radius: 20%;
    text-align: center;
    padding: 5px 10px;
}

.nav-link:focus {
    outline: 2px solid #ffffff;
    outline-offset: 2px;
}

.nav-item:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 20%;
}
</style>