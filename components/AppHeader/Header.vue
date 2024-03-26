<template>
    <div class="container">
        <div class="sub-header">
            <div class="sub-header__icons">
                <a href="" target="_blank" class="sub-header__icon">
                    <IconTelegram />
                </a>
                <a href="https://vk.com/club79584662" target="_blank" class="sub-header__icon">
                    <IconVK />
                </a>
                <a href="" target="_blank" class="sub-header__icon">
                    <IconWhatsapp />
                </a>
            </div>

            <div class="sub-header__address">
                г. Екатеринбург, пер. Черниговский 23
            </div>

            <a href="tel:+73433459120" target="_self" class="sub-header__phone">
                +7 (343) 345-91-20
            </a>
        </div>
        <header class="header">
            <NuxtLink class="header__logo" :to="'/'">
                <figure class='ibg'>
                    <img src='/logo.png' alt='Мастера быстрого реагирования. Логотип'>
                </figure>
            </NuxtLink>

            <nav class="header__links">
                <NuxtLink class="header__link" :to="'/'">
                    <span class="header__link-text">
                        Главная
                    </span>
                </NuxtLink>
                <NuxtLink class="header__link" :to="'/services'">
                    <span class="header__link-text">
                        Услуги
                    </span>
                </NuxtLink>
                <NuxtLink class="header__link" :to="'/portfolio'"> 
                    <span class="header__link-text">
                        Наши работы 
                    </span>
                </NuxtLink>
                <NuxtLink class="header__link" :to="'/feedbacks'">
                    <span class="header__link-text">
                        Отзывы
                    </span>
                </NuxtLink>
                <NuxtLink class="header__link" :to="'/vacancies'">
                    <span class="header__link-text">
                        Вакансии
                    </span>
                </NuxtLink>
                <NuxtLink class="header__link" :to="'/about'">
                    <span class="header__link-text">
                        Контакты
                    </span>
                </NuxtLink>
            </nav>
        </header>

        <HeaderMobile />
    </div>
</template>

<script setup>
    import './Header.scss';
    
    import IconVK from '@/components/AppIcons/LocalIcons/VK.vue';
    import IconTelegram from '@/components/AppIcons/LocalIcons/Telegram.vue';
    import IconWhatsapp from '@/components/AppIcons/LocalIcons/Whatsapp.vue';

    import HeaderMobile from './Mobile/Mobile.vue' 
</script>
