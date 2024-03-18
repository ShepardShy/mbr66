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
                v-for="vacancy in vacancies"
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
</script>