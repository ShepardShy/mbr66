<template>
    <AppMain class="services">
        <div class="services__header">
            <AppH1>
                Услуги
            </AppH1>

            <AppSelect 
                :item="{
                    id: 0,
                    key: 'selectKey',
                    value: search,
                    focus: false,
                    required: false,
                    title: null,
                    lockedOptions: [],
                    options: computedOptions
                }"
                :isReadOnly="false"
                :isHaveNullOption="true"
                :isMultiple="false"
                :isFiltered="true"
                @changeValue="(data) => searchService(data.value)"
            />
        </div>

        <div class="services__list">
            <AppCard 
                v-for="service in localServices"
                :card="service"
                :isLink="true"
                :parentPage="'services'"
            />
        </div>
    </AppMain>
</template>

<script setup>
    import './services.scss'

    import services from './services.json'
    import AppCard from '@/components/AppCard/Card.vue';
    import AppH1 from '@/components/AppHeaders/H1/H1.vue';
    import AppMain from '@/components/AppMain/AppMain.vue';
    import AppSelect from '@/components/AppSelects/Select/Select.vue';

    let localServices = ref(services)
    let search = ref(null)

    const computedOptions = computed(() => {
        let options = []

        for (let service of services) {
            options.push({
                label: service.title,
                value: service.id
            })
        }

        return options
    })

    const searchService = (id) => {
        search.value = id

        if (id == null) {
            localServices.value = services
        } else 
            localServices.value = services.filter(p => p.id == id)
    }

    // Мета теги
    useHead({
        title: 'Услуги. Мастера быстрого реагирования',
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
