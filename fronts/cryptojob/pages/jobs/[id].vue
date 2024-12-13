<template>
    <section class="job_page">
        <div class="container">
            <h1 class="h1">{{ data.title }}</h1>

            <Paragraph>
                {{ data.about }}
            </Paragraph>

            <BaseHeader>О роли:</BaseHeader>

            <Paragraph>
                {{ data.about }}
            </Paragraph>

            <BaseHeader>Обязанности:</BaseHeader>

            <ul class="job_card__list base_par">
                <li class="job_card__list__item" v-for="res of data.responsibilities" :key="res">{{ res }}</li>
            </ul>

            <BaseHeader>Наш идеальный кандадат:</BaseHeader>

            <Paragraph>
                {{ data.candidate }}
            </Paragraph>

            <MainBtn class="center" text="Откликнуться"></MainBtn>
        </div>
    </section>
</template>

<script setup lang="ts">
import Paragraph from '~/components/TextComponents/Paragraph.vue';
import BaseHeader from '~/components/TextComponents/BaseHeader.vue';
import MainBtn from '~/components/MainBtn.vue';

const route = useRoute()
const page_id = ref()

if (route.params.id) {
    page_id.value = route.params.id
}

const data = {
    id: 1,
    promouted: true,
    title: "Старший разработчик Solidity",
    logo_url: "logos/logo1.jpg",
    company: {
        company_name: "Stellar Foundation",
        confirmed: true,
    },
    location: "Москва",
    salary: {
        from: 140_000,
        to: 180_000
    },
    applicants: 120,
    position: "Разработчик",
    publicDate: "2024-12-09",
    about: `Как увлеченный UX/UI дизайнер, вы посвятите свое время поиску дружелюбных и удобных способов удовлетворения потребностей наших пользователей.`,
    candidate: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.`,
    responsibilities: [
        "Работать с заинтересованными сторонами для определения требований",
        "Исследовать клиентов, конкурентов и продукты",
        "Разрабатывать персоны, сценарии и пользовательские истории",
        "Создавать каркасы, прототипы и высокодетализированные макеты",
        "Работать с разработчиками для обеспечения качества продукта",
        "Тесно сотрудничать с владельцами продуктов для максимального успеха клиентов",
    ],
    rating: 4.2,
    reviews_count: 12,
    tags: [
        "Дизайн пользовательского интерфейса",
        "Дизайн опыта",
        "Контрактная работа",
    ]
};


</script>

<style lang="sass">
    .job_page 
        padding: 40px 0
        font-size: 20px
        background: var(--fon-color)
        &__text
            margin-bottom: 0.5em
    
    .h1
        font-size: 60px
        text-align: center
        margin-bottom: 0.6em
    
    .h2
        font-size: 48px
        margin-bottom: 0.6em

    .center
        margin: 20px auto
    
</style>