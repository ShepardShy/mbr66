<template>
    <div class="why-us-section__item">
        <figure class='ibg why-us-section__image'>
            <img :src='props.item.image' :alt='props.item.title'>
        </figure>

        <div class="why-us-section__title">
            {{ props.item.title }}
        </div>
        <div class="why-us-section__description">
            {{ props.item.description }}
        </div>
    </div>
</template>

<script setup>
    import './Item.scss';
    
    const props = defineProps({
        item: {
            default: {
                img: '',
                title: '',
                description: ''          
            },
            type: Object
        }
    })
</script>
