<template>
    <AppMain class="portfolio">
        <AppH1>
            Наши работы
        </AppH1>

        <div class="portfolio__list">
            <AppFile 
                class="portfolio__field"
                v-for="group in portfolio"
                :item="{
                    id: group.id,
                    title: group.title,
                    key: null,
                    required: false,
                    buttonName: null,
                    value: group.photos
                }"
                :isReadOnly="true"
                :isShowFileName="false"
                :isMultiple="false"
                :isOneFile="false"
            />
        </div>
    </AppMain>
</template>

<script setup>
    import './portfolio.scss'

    import portfolio from './portfolio.json'

    import AppMain from '@/components/AppMain/AppMain.vue';
    import AppH1 from '@/components/AppHeaders/H1/H1.vue';
    import AppFile from '@/components/AppInputs/File/File.vue';

    // Мета теги
    useHead({
        title: 'Фото выполненных работ. Мастера быстрого реагирования',
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
