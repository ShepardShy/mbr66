<template>
    <div class="wrapper">
        <div class="page">
            <AppHeader />
            <NuxtPage
            />
            <AppFooter />
        </div>
    </div>
</template>

<script setup>
    import '@/assets/default.scss'
    import '@/assets/fonts/fonts.css'

    import AppHeader from '@/components/AppHeader/Header.vue'
    import AppFooter from '@/components/AppFooter/Footer.vue'

</script>