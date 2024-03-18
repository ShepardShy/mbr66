<template>
    <AppMain class="services">
        <div class="services__header services__header_detail">
            <NuxtLink to="/services">
                <svg width="46" height="26" viewBox="0 0 46 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M43 13H3M3 13L13 3M3 13L13 23" stroke="#E74C3C" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </NuxtLink>

            <AppH1>
                {{ activePage == null ? null : activePage.title }}
            </AppH1>
        </div>

        <AppBreadcrumbs 
            :breadcrumbs="breadcrumbs"
        />

        <div class="services__description" v-html="activePage == null ? '' : activePage.description"></div>

        <AppTable 
            class="services__table"
            :table="{
                tableKeys: tableKeys,
                tableData: activePage == null ? [] : activePage.services,
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
                title: null,
            }"
            :isTrash="false"
            :isHaveCategories="false"
            :slug="null"
            :categories="null"
        />
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
</script>
