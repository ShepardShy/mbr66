<template>
    <AppMain class="feedbacks">
        <AppH1>
            Отзывы
        </AppH1>

        <AppFile 
            class="feedbacks__field"
            :item="{
                id: 0,
                title: null,
                key: null,
                required: false,
                buttonName: null,
                value: feedbacks
            }"
            :isReadOnly="true"
            :isShowFileName="false"
            :isMultiple="false"
            :isOneFile="false"
        />
    </AppMain>
</template>

<script setup>
    import './feedbacks.scss';

    import feedbacks from './feedbacks.json'

    import AppH1 from '@/components/AppHeaders/H1/H1.vue';
    import AppMain from '@/components/AppMain/AppMain.vue';
    import AppFile from '@/components/AppInputs/File/File.vue';

    // Мета теги
    useHead({
        title: 'Отзывы. Мастера быстрого реагирования',
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
