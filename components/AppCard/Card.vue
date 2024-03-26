<template>
    <div class="card" itemscope itemtype="https://schema.org/Product">
        <figure class='ibg card__image' itemprop="image">
            <img :src="props.card.preview" :alt="props.card.title">
        </figure>

        <div class="card__title" itemprop="name">
            {{ props.card.title }}
        </div>

        <div class="card__price" itemprop="offers" itemscope itemtype="https://schema.org/Offer">
            <meta itemprop="priceCurrency" content="RUB" />
            <span class="card__price-text" itemprop="price">
                от {{ tranformPrice }} руб.
            </span>
        </div>

        <NuxtLink :to="`/${props.parentPage}/${props.card.id}`" v-if="props.isLink" itemprop="url">
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
