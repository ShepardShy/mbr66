<template>
    <AppMain class="services" itemscope itemtype="https://schema.org/Product">
        <div class="services__header services__header_detail">
            <NuxtLink to="/services" itemprop="url">
                <svg width="46" height="26" viewBox="0 0 46 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M43 13H3M3 13L13 3M3 13L13 23" stroke="#E74C3C" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </NuxtLink>

            <AppH1 itemprop="name">
                {{ activePage == null ? null : activePage.title }}
            </AppH1>
        </div>

        <AppBreadcrumbs 
            :breadcrumbs="breadcrumbs"
        />

        <div itemprop="description" class="services__description" v-html="activePage == null ? '' : activePage.description"></div>

        <div class="services__table-list">
            <AppTable 
                itemprop="description"
                class="services__table"
                v-for="table in activePage == null ? [] : activePage.services"
                :table="{
                    tableKeys: tableKeys,
                    tableData: activePage == null ? [] : table.data,
                    tableFooter: {
                        pages: 1,
                        activePage: 1,
                        count: 25
                    },
                    loaderState: false,
                    sortItem: {
                        key: 'id',
                        order: 'desc'
                    },
                    socketRows: {
                        header: [],
                        body: []
                    },
                    title: table.title,
                }"
                :isTrash="false"
                :isHaveCategories="false"
                :slug="null"
                :categories="null"
            />
        </div>
    </AppMain>
</template>

<script setup>
    import './services.scss'

    import services from './services.json'
    import tableKeys from './tableKeys.json'
    import AppH1 from '@/components/AppHeaders/H1/H1.vue';
    import AppMain from '@/components/AppMain/AppMain.vue';
    import AppTable from '@/components/AppTable/AppTable.vue';
    import AppBreadcrumbs from '@/components/AppBreadcrambs/Breadcrambs.vue';

    const activePage = ref(null)
    const route = useRoute()
    let breadcrumbs = ref([])

    onMounted(() => {
        activePage.value = services.find(p => p.id == route.params.id)
        breadcrumbs.value = [
            {
                title: 'Услуги',
                link: '/services'
            },
            {
                title: activePage.value == null ? '' : activePage.value.title,
                link: `/services/${activePage.value == null ? '' : activePage.value.id}`
            }
        ]
    })

    // Мета теги
    useHead({
        title: `${services.find(p => p.id == route.params.id).title}. Мастера быстрого реагирования`,
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
