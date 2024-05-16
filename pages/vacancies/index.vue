<template>
    <AppMain class="vacancies">
        <AppH1>
            Вакансии
        </AppH1>

        <p class="vacancies__description">
            Сервисный центр «Мастера Быстрого Реагирования» — это сплочённый коллектив, который состоит из опытных
            профессионалов. Специально для своих клиентов мы предлагаем гибкую систему тарификации и широкий спектр
            качественных услуг.
        </p>

        <div class="vacancies__list">
            <VacancyItem 
                v-for="vacancy in []"
                :vacancy="vacancy"
            />
        </div>
    </AppMain>
</template>

<script setup>
    import './vacancies.scss'
    import vacancies from './vacancies.json'
    import AppMain from '@/components/AppMain/AppMain.vue';

    import AppH1 from '@/components/AppHeaders/H1/H1.vue';
    import VacancyItem from '@/components/Vacancies/Vacancy/Vacancy.vue';

    // Мета теги
    useHead({
        title: 'Вакансии. Мастера быстрого реагирования',
        meta: [
            { 
                name: 'description', 
                content: 'Профессиональный ремонт и обслуживание всей видов бытовой техники в Екатеринбурге. Наши мастера имеют большой опыт работы и готовы выехать к вам на дом в любое удобное для вас время. Мы предлагаем срочные услуги, гарантию на все виды работ, а также доступные цены. Отзывы клиентов и подробную информацию о стоимости вы можете найти на нашем сайте.' 
            },
            {property: 'og:title', content: 'Ремонт бытовой техники в Екатеринбурге. Мастера быстрого реагирования'},
            {property: 'og:image', content: '/main/worker.png'},
            {property: 'og:url', content: 'https://mbr66.ru'},
            {property: 'og:description', content: 'Профессиональный ремонт и обслуживание всей видов бытовой техники в Екатеринбурге. Наши мастера имеют большой опыт работы и готовы выехать к вам на дом в любое удобное для вас время. Мы предлагаем срочные услуги, гарантию на все виды работ, а также доступные цены. Отзывы клиентов и подробную информацию о стоимости вы можете найти на нашем сайте.'}
        ],
    })
</script>