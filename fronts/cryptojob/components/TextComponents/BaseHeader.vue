<template>
  <h4 class="base_header">
    <slot/>
  </h4>
</template>

<script lang="ts" setup>

</script>

<style lang="sass" scoped>
.base_header
  font-weight: 400
  margin-bottom: 7px
  &:last-child
    margin-bottom: 0
</style>