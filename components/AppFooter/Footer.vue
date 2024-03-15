<template>
    <footer class="footer">
        <div class="container">
            <div class="footer__group">
                <figure class='ibg footer__logo'>
                    <img src='/logo.png' alt='Мастера быстрого реагирования. Логотип'>
                    <figcaption>
                        Мастера быстрого реагирования
                    </figcaption>
                </figure>

                <div class="footer__mark">
                    © Eclipse Digital studio, 2017-2021
                </div>
            </div>

            <div class="footer__group">
                <div class="footer__icons">
                    <a href="" target="_blank" class="footer__icon">
                        <IconTelegram />
                    </a>
                    <a href="https://vk.com/club79584662" target="_blank" class="footer__icon">
                        <IconVK />
                    </a>
                    <a href="" target="_blank" class="footer__icon">
                        <IconWhatsapp />
                    </a>
                </div>

                <a class="footer__phone" target="_self" href="tel:+73433459120">
                    +7 (343) 345-91-20
                </a>

                <a class="footer__mail" target="_self" href="mailto:mbr66.ru@yandex.ru">
                    mbr66.ru@yandex.ru
                </a>
            </div>
        </div>
    </footer>
</template>

<script setup>
    import './Footer.scss';
    
    import IconVK from '@/components/AppIcons/LocalIcons/VK.vue';
    import IconTelegram from '@/components/AppIcons/LocalIcons/Telegram.vue';
    import IconWhatsapp from '@/components/AppIcons/LocalIcons/Whatsapp.vue';
</script>
