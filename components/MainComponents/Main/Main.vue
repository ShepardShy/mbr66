<template>
    <section class="main-section">
        <AppH1>
            Ремонт бытовой техники в Екатеринбурге
        </AppH1>

        <ul class="main-section__list">
            <li class="main-section__item">
                Обязательная гарантия на ремонт
            </li>
            <li class="main-section__item">
                Большой спектр оказания услуг
            </li>
            <li class="main-section__item">
                Более 250 мастеров
            </li>
            <li class="main-section__item">
                Выполнили свыше 12 000 заказов за 7 лет работы
            </li>
        </ul>

        <figure class='ibg main-section__image'>
            <img src='/main/worker.png' alt='Ремонт бытовой техники в Екатеринбурге. Сотрудник'>
        </figure>

        <a href="#contacts" class="main-section__link">
            <AppButton class="button_red">
                Вызвать мастера
            </AppButton>
        </a>
    </section>
</template>
<script setup>
    import './Main.scss';
    
    import AppH1 from '@/components/AppHeaders/H1/H1.vue';
    import AppButton from '@/components/AppButton/AppButton.vue';
</script>
