<template>
    <AppMain class="about">
        <AppH1>
            Контакты
        </AppH1>

        <div class="about__list">
            <div class="about__item" v-for="item in about">
                <div class="about__title">
                    {{ item.title }}
                </div>
                <a class="about__text about__text_link" v-if="item.isLink" v-for="description in item.descriptions" :href="description.link">
                    {{ description.title }}
                </a>
                <div class="about__text" v-else v-for="description in item.descriptions">
                    {{ description.title }}
                </div>
            </div>

            <div class="about__item">
                <div class="about__title">
                    Социальные сети
                </div>

                <div class="about__icons">
                    <a href="" class="about__icon-link">
                        <figure class='about__icon'>
                            <img src='/icons/about/ok.svg' alt='Иконка. Одноклассники'>
                        </figure>
                    </a>
                    <a href="" class="about__icon-link">
                        <figure class='about__icon'>
                            <img src='/icons/about/whatsapp.svg' alt='Иконка. Whats app'>
                        </figure>
                    </a>
                    <a href="" class="about__icon-link">
                        <figure class='about__icon'>
                            <img src='/icons/about/telegram.svg' alt='Иконка. Телеграм'>
                        </figure>
                    </a>
                    <a href="" class="about__icon-link">
                        <figure class='about__icon'>
                            <img src='/icons/about/vk.svg' alt='Иконка. ВКонтакте'>
                        </figure>
                    </a>
                    <a href="" class="about__icon-link">
                        <figure class='about__icon'>
                            <img src='/icons/about/viber.svg' alt='Иконка. Viber'>
                        </figure>
                    </a>
                </div>
            </div>
        </div>

        <div class="about__map">
            <div style="position:relative;overflow:hidden;">
                <iframe
                    src="https://yandex.ru/map-widget/v1/?lang=ru_RU&scroll=true&source=constructor-api&um=constructor%3A2oIa-5WQMv2kwQdaoMjEtKQa7o4ZD5T-"
                    width="560" height="400" frameborder="1" allowfullscreen="true" style="position:relative;">
                </iframe>
            </div>
        </div>
    </AppMain>
</template>

<script setup>
    import './about.scss'

    import about from './about.json'
    import AppMain from '@/components/AppMain/AppMain.vue';
    import AppH1 from '@/components/AppHeaders/H1/H1.vue';
</script>