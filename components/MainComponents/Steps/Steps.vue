<template>
    <section class="steps-section">
        <AppH2>
            Этапы работы
        </AppH2>

        <div class="steps-section__list">
            <StepsItem 
                v-for="item in steps"
                :item="item"
            />
        </div>
    </section>
</template>
<script setup>
    import './Steps.scss';

    import steps from './steps.json'
    
    import AppH2 from '@/components/AppHeaders/H2/H2.vue';
    import StepsItem from './Item/Item.vue'
</script>

