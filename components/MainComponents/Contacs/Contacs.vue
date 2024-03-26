<template>
    <section class="contacts-section" id="contacts" itemscope itemtype = "https://schema.org/Organization">
        <AppH2>
            Оставить заявку
        </AppH2>

        <div class="contacts-section__group" itemscope itemtype="https://schema.org/PostalAddress">
            <div class="contacts-section__item" v-for="item in contacts">
                <div class="contacts-section__title" itemprop="name">
                    {{ item.title }}
                </div>
                <a class="contacts-section__text contacts-section__text_link" v-if="item.isLink" :href="item.link" :itemprop="item.schema.itemprop">
                    {{ item.description }}
                </a>
                <div class="contacts-section__text" v-else :itemprop="item.schema.itemprop">
                    {{ item.description }}
                </div>
            </div>

            <div class="contacts-section__time">
                Ежедневно, с 8:00 до 24:00
            </div>
        </div>


        <div class="contacts-section__group">
            <form class="contacts-section__form">
                <AppInput 
                    :item="{
                        id: 0,
                        key: 'name',
                        value: formValue.name,
                        type: 'text',
                        focus: false,
                        placeholder: 'Введите имя',
                        substring: null,
                        title: 'Имя'
                    }"
                    @changeValue="(data) => changeValue(data)"
                />

                <AppInput 
                    :item="{
                        id: 1,
                        key: 'phone',
                        value: formValue.phone,
                        type: 'text',
                        focus: false,
                        placeholder: '+7 (999) 999-99-99',
                        substring: null,
                        title: 'Номер телефона'
                    }"
                    :mask="'+7 (###) ###-##-##'"
                    @changeValue="(data) => changeValue(data)"
                />

                <AppSelect 
                    :item="{
                        id: 3,
                        required: false,
                        title: 'Услуга',
                        value: formValue.service,
                        focus: false,
                        key: 'service',
                        options: services,
                        lockedOptions: []
                    }"
                    :isHaveNullOption="true"
                    :isFiltered="true"
                    @changeValue="(data) => changeValue(data)"
                />

                <AppTextarea 
                    :item="{
                        id: 4,
                        key: 'comment',
                        value: formValue.comment,
                        type: 'text',
                        focus: false,
                        placeholder: 'Введите комментарий',
                        substring: null,
                        title: 'Комментарий'
                    }"
                    @changeValue="(data) => changeValue(data)"
                />
            </form>

            <AppButton class="button_red" @click="() => sendMessage()">
                Вызвать мастера
            </AppButton>
        </div>
    </section>
</template>
<script setup>
    import './Contacs.scss';
    
    import contacts from './contacts.json'

    import AppH2 from '@/components/AppHeaders/H2/H2.vue';
    import AppButton from '@/components/AppButton/AppButton.vue';

    import AppInput from '@/components/AppInputs/Input/Input.vue';
    import AppSelect from '@/components/AppSelects/Select/Select.vue';
    import AppTextarea from '@/components/AppInputs/Textarea/Textarea.vue';

    const formValue = inject('formValue')
    const services = inject('services')

    // Изменение значения
    const changeValue = (data) => {
        formValue.value[data.key] = data.value
    }

    // Отправка сообщения
    const sendMessage = () => {
        console.log({
            name: formValue.value.name,
            phone: formValue.value.phone,
            service: services.value.find(p => formValue.value.service == p.value).label,
            comment: formValue.value.comment
        });

        formValue.value = {
            name: '',
            phone: '',
            service: null,
            comment: ''
        }
    }
</script>

