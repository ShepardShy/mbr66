<template>
    <section class="feedbacks-section">
        <AppH2>
            Отзывы
        </AppH2>

        <AppSlider :options="{ VisibleSlides: 3, spaceBetween: 0, pagination: {clickable: true, dynamicBullets: true}}">
            <template #slide>
                <SwiperSlide v-for="slide in feedbacks" :key="slide.id" :virtual-index="slide.id">
                    <figure class='ibg feedbacks-section__image'>
                        <img :src='slide.preview' alt=''>
                    </figure>
                </SwiperSlide>
            </template>
        </AppSlider>
    </section>
</template>
<script setup>
    import './Feedbacks.scss';

    import { SwiperSlide } from 'swiper/vue'
    import feedbacks from '@/pages/feedbacks/feedbacks.json';

    import AppH2 from '@/components/AppHeaders/H2/H2.vue';
    import AppSlider from '@/components/AppSlider/Slider.vue';
</script>
