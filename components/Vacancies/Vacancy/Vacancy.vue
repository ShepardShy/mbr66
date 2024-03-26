<template>
    <div class="vacancy" itemprop="offers" itemscope itemtype="https://schema.org/Offer">
        <div class="vacancy__header">
            <div class="vacancy__title" itemprop="name">
                {{ props.vacancy.title }}
            </div>
            <div class="vacancy__price" itemprop="price" :content="props.vacancy.price">
                <meta itemprop="priceCurrency" content="RUB" />
                От {{ tranformPrice }} руб.
            </div>
        </div>
        <div class="vacancy__description" itemprop="description">
            {{ props.vacancy.description }}
        </div>
        <div class="vacancy__footer">
            <details class="vacancy__details vacancy-detail" ref="detailRef" itemprop="description">
                <summary class="vacancy-detail__summary">Подробнее</summary>
                <div class="vacancy-detail__subtitle">
                    Требования
                </div>
                <ul class="vacancy-detail__list">
                    <li class="vacancy-detail__item" v-for="requirement in props.vacancy.requirements">
                        {{ requirement }}
                    </li>
                </ul>
                <div class="vacancy-detail__close" @click="() => detailRef.removeAttribute('open')">
                    Скрыть
                </div>
            </details>

            <a href="tel:+73433459120" class="vacancy__link" itemprop="availability">
                <AppButton>
                    Откликнуться
                </AppButton>
            </a>
        </div>
    </div>
</template>

<script setup>
    import './Vacancy.scss';
    
    import AppButton from '@/components/AppButton/AppButton.vue';

    const detailRef = ref(null)

    const props = defineProps({
        vacancy: {
            default: {
                id: 0,
                title: "",
                description: "",
                price: "0",
                requirements: [""]
            },
            type: Object
        }
    })

    const tranformPrice = computed(() => {
        return props.vacancy.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    })
</script>
