<template>
    <section class="why-us-section">
        <AppH2>
            Почему мы?
        </AppH2>

        <div class="why-us-section__list">
            <WhyUsItem 
                v-for="item in whyUs"
                :item="item"
            />
        </div>
    </section>
</template>
<script setup>
    import './WhyUs.scss';
    
    import whyUs from './whyUs.json'

    import AppH2 from '@/components/AppHeaders/H2/H2.vue';
    import WhyUsItem from './Item/Item.vue'
</script>
