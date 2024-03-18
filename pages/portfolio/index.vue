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
</script>
