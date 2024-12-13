<template>
  <p class="base_par">
    <slot/>
  </p>
</template>

<script lang="ts" setup>

</script>

<style lang="sass">
.base_par
  color: var(--gray-second)
  margin-bottom: 26px
  line-height: 1.2
  &:last-child
    margin-bottom: 0
</style>