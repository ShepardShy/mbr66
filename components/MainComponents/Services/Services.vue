<template>
    <section class="main-services">
        <AppH2>
            Услуги
        </AppH2>
        <div class="main-services__list">
            <AppCard 
                v-for="service in services.slice(0, 6)"
                :card="service"
                :isLink="false"
                @showMoreCard="(data) => showMoreCard(data)"
            />
        </div>
    </section>
</template>

<script setup>
    import './services.scss'
    import '@/pages/services/services.scss'
    
    import AppH2 from '@/components/AppHeaders/H2/H2.vue';
    import services from '@/pages/services/services.json'

    const showMoreCard = (data) => {
        console.log(data);
    }

</script>
