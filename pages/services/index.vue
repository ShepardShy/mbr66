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
</script>
