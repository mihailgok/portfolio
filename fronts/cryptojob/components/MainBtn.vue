<template>
  <button class="main_btn">
    <svg v-if="props.type == 'search'" width="15" height="15" viewBox="0 0 15 15" fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.8333 15L8.58333 9.75C8.16667 10.0833 7.6875 10.3472 7.14583 10.5417C6.60417 10.7361 6.02778 10.8333 5.41667 10.8333C3.90278 10.8333 2.62167 10.3092 1.57333 9.26083C0.524444 8.21194 0 6.93056 0 5.41667C0 3.90278 0.524444 2.62139 1.57333 1.5725C2.62167 0.524167 3.90278 0 5.41667 0C6.93056 0 8.21194 0.524167 9.26083 1.5725C10.3092 2.62139 10.8333 3.90278 10.8333 5.41667C10.8333 6.02778 10.7361 6.60417 10.5417 7.14583C10.3472 7.6875 10.0833 8.16667 9.75 8.58333L15 13.8333L13.8333 15ZM5.41667 9.16667C6.45833 9.16667 7.34389 8.80222 8.07333 8.07333C8.80222 7.34389 9.16667 6.45833 9.16667 5.41667C9.16667 4.375 8.80222 3.48944 8.07333 2.76C7.34389 2.03111 6.45833 1.66667 5.41667 1.66667C4.375 1.66667 3.48944 2.03111 2.76 2.76C2.03111 3.48944 1.66667 4.375 1.66667 5.41667C1.66667 6.45833 2.03111 7.34389 2.76 8.07333C3.48944 8.80222 4.375 9.16667 5.41667 9.16667Z"
        fill="white" />
    </svg>
    <span>{{ props.text }}</span>
    <svg class="arrow" v-if="props.type == 'arrow'" width="18" height="10" viewBox="0 0 18 10" fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M13.0909 10L11.9455 8.79167L14.85 5.83333H0V4.16667H14.85L11.9455 1.20833L13.0909 0L18 5L13.0909 10Z"
        fill="white" />
    </svg>
  </button>
</template>

<script lang="ts" setup>
// import defineProps

interface MainBtnProps {
  type: "base" | "search" | "arrow",
  text: string
};

const props = defineProps<MainBtnProps>();

</script>

<style lang="sass">
.main_btn
  padding: 11px 21px
  background: var(--accent-color)
  display: flex
  align-items: center
  gap: 9px
  color: var(--white-color)
  border-radius: 7px
  line-height: 1.3
  transition: opacity 0.3s
  &:hover
    opacity: 0.7

.arrow
  width: 18px
  height: 10px

.loop
  height: 15px
  width: 15px

</style>