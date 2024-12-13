<template>

    <header class="header">
        <div class="container header__container">

            <NuxtLink to="/" class="logo">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0 3.75C0 1.67893 1.67893 0 3.75 0C18.2475 0 30 11.7525 30 26.25C30 28.3211 28.3211 30 26.25 30H5C2.23858 30 0 27.7614 0 25V3.75Z"
                        fill="#4348DB" />
                </svg>
                <span>cryptojob</span>
            </NuxtLink>


            <nav class="nav">
                <ul class="nav__list">
                    <li class="nav__item">
                        <NuxtLink to="/" class="nav__link" :class="route.name == 'index' ? 'active' : ''">Вся работа</NuxtLink>
                    </li>
                    <!-- <li class="nav__item">
                        <a href="#" class="nav__link">Стажировка</a>
                    </li> -->
                    <!-- <li class="nav__item">
                        <a href="#" class="nav__link">Фул-тайм</a>
                    </li>
                    <li class="nav__item">
                        <a href="#" class="nav__link">Инжениринг</a>
                    </li>
                    <li class="nav__item">
                        <a href="#" class="nav__link">Маркетинг</a>
                    </li>
                    <li class="nav__item">
                        <a href="#" class="nav__link">Дизайнер</a>
                    </li>
                    <li class="nav__item">
                        <a href="#" class="nav__link">Другие</a>
                    </li> -->
                </ul>
            </nav>

            <MainBtn type="arrow" text="Разместить за 100₽" />
        </div>
    </header>

</template>

<script setup>
import MainBtn from "./MainBtn.vue";

const route = useRoute();

console.log(route.name == 'index');

</script>



<style lang="sass" scoped>

.header
    &__container
        display: flex
        align-items: center
        // padding: 25px
        border-bottom: 1px solid #ECECEC

.logo
    display: flex
    font-size: 24px
    font-weight: 600
    gap: 10px
    margin-right: auto
    svg
        width: 30px
        height: 30px

.nav
    height: 100%
    margin-right: 180px
    &__list
        height: 100%
        display: flex
        gap: 15px
        align-items: stretch
    // &__item
    //     height: 100%
    &__link
        height: 100%
        padding: 35px 5px
        display: inline-block
        transition: border-color 0.3s
        position: relative
        transition: color var(--accent-color)
        &::after
            content: ""
            position: absolute
            bottom: 0
            left: 0
            height: 2px
            width: 100%
            transition: background 0.3s
            background: transparent
        &:hover
            color: var(--accent-color)
            &::after
                background: var(--accent-color)
        &.active
            color: var(--accent-color)
            &::after
                background: var(--accent-color)
</style>