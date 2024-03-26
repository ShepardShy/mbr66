<template>
    <AppMain>
        <MainSection />
        <MainServices 
            @chooseService="(id) => formValue.service = id"
        />
        <MainWhyUs />
        <MainUTP />
        <MainSteps />
       <MainFeedbacks />
         <MainContacs />
    </AppMain>
</template>

<script setup>
    import AppMain from '@/components/AppMain/AppMain.vue';

    import servicesList from '@/pages/services/services.json'

    import MainSection from '@/components/MainComponents/Main/Main.vue';
    import MainServices from '@/components/MainComponents/Services/Services.vue';
    import MainWhyUs from '@/components/MainComponents/WhyUs/WhyUs.vue';
    import MainUTP from '@/components/MainComponents/UTP/UTP.vue';
    import MainSteps from '@/components/MainComponents/Steps/Steps.vue';
    import MainFeedbacks from '@/components/MainComponents/Feedbacks/Feedbacks.vue';
    import MainContacs from '@/components/MainComponents/Contacs/Contacs.vue';

    let formValue = ref({
        name: '',
        phone: '',
        service: null,
        comment: ''
    })

    const services = computed(() => {
        let options = []

        for (let service of servicesList) {
            options.push({
                label: service.title,
                value: service.id
            })
        }

        return options
    })

    provide('formValue', formValue)
    provide('services', services)

    // Мета теги
    useHead({
        title: 'Ремонт бытовой техники в Екатеринбурге. Мастера быстрого реагирования',
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
