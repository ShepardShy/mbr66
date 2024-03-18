<template>
    <div class="card">
        <figure class='ibg card__image'>
            <img :src="props.card.preview" :alt="props.card.title">
        </figure>

        <div class="card__title">
            {{ props.card.title }}
        </div>

        <div class="card__price">
            от {{ tranformPrice }} руб.
        </div>

        <NuxtLink :to="`/${props.parentPage}/${props.card.id}`" v-if="props.isLink">
            <AppButton class="card__button">
                Подробнее
            </AppButton>
        </NuxtLink>

        <AppButton v-else class="card__button" @click="() => $emit('showMoreCard', props.card.id)">
            Подробнее
        </AppButton>
    </div>
</template>

<script setup>
    import './Card.scss';

    import AppButton from '@/components/AppButton/AppButton.vue';
    
    const props = defineProps({
        isLink: {
            default: false,
            type: Boolean
        },
        parentPage: {
            default: '/',
            type: String
        },
        card: {
            default: {
                "id": 0,
                "title": null,
                "price": 0,
                "preview": null
            },
            type: Object
        }
    })

    const tranformPrice = computed(() => {
        return props.card.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    })
</script>
