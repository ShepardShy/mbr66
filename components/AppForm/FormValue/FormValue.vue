<template>
    <span class="form-item__value" @click="() => openLink()" :class="setClasses" v-if="props.isHTML" v-html="props.value"></span>
    <span 
        v-else
        class="form-item__value" 
        :class="setClasses" 
        @click="() => openLink()" 
    >
        {{ setValue }}

        <div class="form-item__substring" v-if="![null, undefined].includes(props.substring) && props.substring != ''">
            {{ props.substring }}
        </div>
    </span>





</template>

<script setup>
    import './FormValue.scss';

    import { computed } from 'vue';
    
    const props = defineProps({
        value: {
            default: null
        },
        isHTML: {
            default: false,
            type: Boolean
        },
        isLink: {
            default: false,
            type: Boolean
        },
        link: {
            default: null,
            type: String
        },
        substring: {
            default: null,
            type: String
        }
    })

    const setValue = computed (() => {
        if (typeof props.value == 'string') {
            return props.value[0].toUpperCase() + props.value.slice(1).toLowerCase()
        } else {
            return props.value
        }
    })

    // Установка CSS-классов
    const setClasses = computed(() => {
        return [
            [null, undefined].includes(props.value) || props.value == '' ? 'form-item__value_empty' : '',
            props.isHTML ? 'form-item__value_html' : '',
            props.isLink ? 'form-item__value_link' : '',
            ![null, undefined].includes(props.substring) && props.substring != '' ? 'form-item__value_has-substring' : ''
        ]
    })

    // Открытие ссылки в новой вкладке
    const openLink = () => {
        if (![null, undefined].includes(props.link) && props.link != '') {
            window.open(props.link, '_blank')
        }
    }
</script>
