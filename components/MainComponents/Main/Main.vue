<template>
    <section class="main-section" itemprop="offers" itemscope itemtype="https://schema.org/Offer">
        <AppH1 itemprop="name">
            Ремонт бытовой техники в Екатеринбурге
        </AppH1>

        <ul class="main-section__list" itemprop="description">
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

        <figure class='ibg main-section__image' itemprop="image">
            <img src='/main/worker.png' alt='Ремонт бытовой техники в Екатеринбурге. Сотрудник'>
        </figure>

        <a href="#contacts" class="main-section__link" itemprop="url">
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

<style scoped>
    .main-section__image {
        top: 0px;
        right: 0px;
        position: absolute;
        width: 720px;
        height: 620px;
    }

    @media (max-width: 1330px) {
        .main-section {
            .main-section__image {
                right: -160px;
            }
        }
    }

    @media (max-width: 1100px) {
        .main-section {
            .main-section__image {
                right: -260px;
            }
        }
    }

    @media (max-width: 970px) {
        .main-section {
            .main-section__image {
                top: 40px;
                width: 670px;
                right: -220px;
                height: 520px;
            }
        }
    }

    @media (max-width: 920px) {
        .main-section {
            .main-section__image {
                display: none;
            }
        }
    }
</style>