<template>
    <aside class="menu menu_mobile" :class="settingsMenu.isShow ? 'menu_mobile-active' : ''">
        <IconGamburger 
            class="menu__gamburger"
            @click="() => callAction({action: 'showMenu', value: true})"
        />

        <div class="menu__content" v-show="settingsMenu.isShow">
            <NuxtLink class="header__logo" :to="'/'" @click="() => callAction({action: 'showMenu', value: false})">
                <figure class='ibg'>
                    <img src='/logo.png' alt='Мастера быстрого реагирования. Логотип'>

                    <figcaption>
                        Мастера быстрого реагирования
                    </figcaption>
                </figure>
            </NuxtLink>

            <nav class="menu__list">
                <NuxtLink class="menu__item" :to="'/'" @click="() => callAction({action: 'showMenu', value: false})">
                    <span class="menu__item-text">
                        Главная
                    </span>
                </NuxtLink>
                <NuxtLink class="menu__item" :to="'/services'" @click="() => callAction({action: 'showMenu', value: false})">
                    <span class="menu__item-text">
                        Услуги
                    </span>
                </NuxtLink>
                <NuxtLink class="menu__item" :to="'/portfolio'" @click="() => callAction({action: 'showMenu', value: false})"> 
                    <span class="menu__item-text">
                        Наши работы 
                    </span>
                </NuxtLink>
                <NuxtLink class="menu__item" :to="'/feedbacks'" @click="() => callAction({action: 'showMenu', value: false})">
                    <span class="menu__item-text">
                        Отзывы
                    </span>
                </NuxtLink>
                <NuxtLink class="menu__item" :to="'/vacancies'" @click="() => callAction({action: 'showMenu', value: false})">
                    <span class="menu__item-text">
                        Вакансии
                    </span>
                </NuxtLink>
                <NuxtLink class="menu__item" :to="'/about'" @click="() => callAction({action: 'showMenu', value: false})">
                    <span class="menu__item-text">
                        Контакты
                    </span>
                </NuxtLink>

                <div class="menu__item" @click="() => callAction({action: 'showMenu', value: false})">
                    <span class="menu__item-text">
                        Закрыть
                    </span>
                </div>
            </nav>
        </div>
    </aside>
</template>

<script setup>
    import './Mobile.scss';

    import IconArrow from '@/components/AppIcons/Arrow/Arrow.vue'
    import IconGamburger from '@/components/AppIcons/Gamburger/Gamburger.vue'

    import AppH2 from '@/components/AppHeaders/H2/H2.vue'

    import { ref, inject } from 'vue'

    let settingsMenu = ref({
        tabs: [
            {
                tab: 'hidden',
                title: 'Еще',
            },
            {
                tab: 'user',
                title: 'Денис Потемкин',
            }
        ],
        isShow: false,
        activeTab: null
    })    

    const menuVisible = inject('menuVisible')
    const menuHidden = inject('menuHidden')
    const activeLink = inject('activeLink')

    // Вызов действий
    const callAction = (data) => {
        // Показ/скрытие меню
        const showMenu = (state) => {
            settingsMenu.value.isShow = state
        }


        switch (data.action) {
            // Показ/скрытие меню
            case 'showMenu':
                showMenu(data.value)
                break;
            default:
                break;
        }
    }
</script>
