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
</script>
