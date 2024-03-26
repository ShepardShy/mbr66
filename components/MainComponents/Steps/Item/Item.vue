<template>
    <div class="steps-section__item">
        <figure class='ibg steps-section__icon'>
            <img :src='props.item.icon' :alt='props.item.title'>
        </figure>

        <div class="steps-section__lines">
            <div class="steps-section__title">
                {{ props.item.title }}
            </div>
        </div>
    </div>
</template>

<script setup>
    import './Item.scss';
    
    const props = defineProps({
        item: {
            default: {
                id: 0,
                title: "",
                icon: ""
            },
            type: Object
        }
    })
</script>
