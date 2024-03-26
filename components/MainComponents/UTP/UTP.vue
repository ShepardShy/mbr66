<template>
    <section class="utp-section" itemprop="offers" itemscope itemtype="https://schema.org/Offer">
        <AppH2 itemprop="name">
            Заказ с сайта
        </AppH2>

        <p class="utp-section__description" itemprop="description">
            Наша компания предоставляет возможность воспользоваться <br> скидкой 20% на все услуги при заказе с сайта
        </p>

        <AppButton class="button_white" @click="scrollToContacts()" itemprop="url">
            Вызвать мастера
        </AppButton>
    </section>
</template>
<script setup>
    import './UTP.scss';
    
    import AppH2 from '@/components/AppHeaders/H2/H2.vue';
    import AppButton from '@/components/AppButton/AppButton.vue';

    const scrollToContacts = () => {
        const el = document.getElementById('contacts');
        el.scrollIntoView();
    }
</script>