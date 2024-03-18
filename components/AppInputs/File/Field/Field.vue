<template>
    <FansyBox
        class="file__container file-container form-item__value"
        :class="setClasses"
    >
        <div class="file__list file-list">
            <FansyBoxImage
                v-for="image in localImages"
                class="file-list__item file-list__item_undraggable"
                :id="props.item.id"
                :isShowFileName="props.isShowFileName"
                :isOneFile="props.isOneFile"
                :image="image"
            />
        </div>
        <div class="file-container__circle" v-if="props.isOneFile && props.isReadOnly && localImages.length > 2">
            {{ localImages.length - 1 }}
        </div>
    </FansyBox>
</template>

<script setup>
    import './Field.scss';

    import FansyBox from '@/components/AppFansyBox/FansyBox.vue';
    import FansyBoxImage from '@/components/AppFansyBox/FansyBoxImage/FansyBoxImage.vue';
    import {computed, onMounted, ref, watch} from "vue";

    const props = defineProps({
        item: {
            default: {
                id: 1517,
                title: "Undefined title",
                type: "file",
                key: "",
                required: false,
                options: null,
                focus: true,
                value: null,
                buttonName: "",
            },
            type: Object
        },
        isReadOnly: {
            default: false,
            type: Boolean
        },
        isShowFileName: {
            default: false,
            type: Boolean
        },
        isMultiple: {
            default: false,
            type: Boolean
        },
        isOneFile: {
            default: false,
            type: Boolean
        },
        isIcon: {
            default: false,
            type: Boolean
        }
    })

    const emit = defineEmits([
        'changeValue',
        'initEdit'
    ])

    // Получение значении
    const getValues = () => {
        if ([null, undefined].includes(props.item.value) || !Array.isArray(props.item.value)) {
            return []
        } else {
            const localValues = props.item.value == null ? [] : props.item.value.filter(p => ![null, undefined].includes(p) && !Array.isArray(p) && Object.keys(p).length !== 0 && typeof p != 'string')
            return JSON.parse(JSON.stringify(localValues))
        }
    }

    const localImages = ref([])

    const setClasses = computed(() => {
        return [
            localImages.value.length === 0 && props.isReadOnly ? 'form-item__value_empty' : '',
            props.isOneFile ? 'file-container_one-file' : ''
        ]
    })

    watch(() => props.isReadOnly, () => {
        localImages.value = getValues();
    })

    watch(() => props.item.value, () => {
        localImages.value = getValues();
    }, {
        deep: true
    })

    onMounted(() => {
        localImages.value = getValues();
    })
</script>
