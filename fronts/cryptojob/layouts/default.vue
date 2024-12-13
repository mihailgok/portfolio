<template>
    <div>
        <AppHeader />
        <slot />
    </div>
</template>


<script>
import AppHeaderVue from "~/components/AppHeader.vue";

</script>

<style>
@import url("/assets/main.sass");
@import url('/assets/normalize.css');
</style>