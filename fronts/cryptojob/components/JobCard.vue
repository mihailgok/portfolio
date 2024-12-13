<template>
  <div class="job_card" :class="getClasses(props.job.promouted)">
    <NuxtLink :to="'/jobs/' + props.job.id" class="job_card__top">
      <img class="job_card__logo" :src="props.job.logo_url" alt="">
      <div class="job_card__header">
        <h3 class="job_card__title">{{ props.job.title }}</h3>
        <p class="job_card__company">
          <span>{{ props.job.company.company_name }}</span>
          <svg v-if="props.job.company.confirmed" width="13" height="13" viewBox="0 0 13 13" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5.59 7.67L4.17625 6.25625C4.05708 6.13708 3.91083 6.0775 3.7375 6.0775C3.56417 6.0775 3.4125 6.1425 3.2825 6.2725C3.16333 6.39167 3.10375 6.54333 3.10375 6.7275C3.10375 6.91167 3.16333 7.06333 3.2825 7.1825L5.135 9.035C5.25417 9.15417 5.40583 9.21375 5.59 9.21375C5.77417 9.21375 5.92583 9.15417 6.045 9.035L9.73375 5.34625C9.85292 5.22708 9.9125 5.08083 9.9125 4.9075C9.9125 4.73417 9.8475 4.5825 9.7175 4.4525C9.59833 4.33333 9.44667 4.27375 9.2625 4.27375C9.07833 4.27375 8.92667 4.33333 8.8075 4.4525L5.59 7.67ZM6.5 13C5.60083 13 4.75583 12.8293 3.965 12.4878C3.17417 12.1468 2.48625 11.6838 1.90125 11.0988C1.31625 10.5138 0.853233 9.82583 0.5122 9.035C0.170733 8.24417 0 7.39917 0 6.5C0 5.60083 0.170733 4.75583 0.5122 3.965C0.853233 3.17417 1.31625 2.48625 1.90125 1.90125C2.48625 1.31625 3.17417 0.853017 3.965 0.51155C4.75583 0.170517 5.60083 0 6.5 0C7.39917 0 8.24417 0.170517 9.035 0.51155C9.82583 0.853017 10.5138 1.31625 11.0988 1.90125C11.6838 2.48625 12.1468 3.17417 12.4878 3.965C12.8293 4.75583 13 5.60083 13 6.5C13 7.39917 12.8293 8.24417 12.4878 9.035C12.1468 9.82583 11.6838 10.5138 11.0988 11.0988C10.5138 11.6838 9.82583 12.1468 9.035 12.4878C8.24417 12.8293 7.39917 13 6.5 13Z"
              fill="#4348DB" />
          </svg>
        </p>
      </div>
      <div class="job_card__tags">
        <MainTag type="location">{{ props.job.location }}</MainTag>
        <MainTag type="money">{{ props.job.salary.from / 1000 }}к₽ - {{ props.job.salary.to / 1000 }}к₽</MainTag>
        <MainTag type="base">{{ props.job.position }}</MainTag>
      </div>

      <div class="job_card__info">
        <div class="job_card__applicants"> {{ props.job.applicants }} заявок </div>
        <div class="job_card__time">{{ formatDate(props.job.publicDate) }} назад</div>
      </div>

      <MainBtn class="job_card__more" :text="jobCardOpen ? 'Скрыть' : 'Подробнее'" type="base"
        @click.prevent="jobCardOpen = !jobCardOpen" />
    </NuxtLink>
    <div class="job_card__main" v-show="jobCardOpen">
      <div class="job_card__line"></div>
      <BaseHeader>О роли:</BaseHeader>
      <Paragraph>
        {{ props.job.about }}
      </Paragraph>

      <BaseHeader>Обязанности:</BaseHeader>

      <ul class="job_card__list base_par">
        <li class="job_card__list__item" v-for="res of props.job.responsibilities" :key="res">{{ res }}</li>
      </ul>

      <BaseHeader>Наш идеальный кандадат:</BaseHeader>

      <Paragraph>
        {{ props.job.candidate }}
      </Paragraph>

      <div class="job_card__line"></div>

      <div class="job_card__footer">
        <div class="job_card__footer__tags">
          <MainTag type="base" v-for="tag of props.job.tags" :key="tag">{{ tag }}</MainTag>
        </div>
        <div class="job_card__rating">
          <span>{{ props.job.rating }} of {{ props.job.reviews_count }} reviews</span>
          <span class="job_card__rating__stars">
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"
              v-for="star in Math.round(props.job.rating)" :key="star">
              <path
                d="M8.5 13.7445L4.50997 16.772C4.31226 16.9328 4.09659 17.0085 3.86294 16.9992C3.62929 16.9907 3.42259 16.9239 3.24286 16.7988C3.06313 16.6738 2.92402 16.5041 2.82553 16.2898C2.72632 16.0754 2.72164 15.8432 2.81151 15.5932L4.34821 10.6366L0.439057 7.87696C0.22338 7.73407 0.0885817 7.54653 0.0346624 7.31432C-0.0192569 7.08212 -0.0102703 6.86778 0.0616222 6.67131C0.133515 6.47483 0.259326 6.3005 0.439057 6.14832C0.618789 5.99685 0.834466 5.92112 1.08609 5.92112H5.91187L7.47553 0.776979C7.5654 0.526917 7.70487 0.334727 7.89395 0.200407C8.0823 0.0668027 8.28432 0 8.5 0C8.71568 0 8.9177 0.0668027 9.10605 0.200407C9.29513 0.334727 9.4346 0.526917 9.52447 0.776979L11.0881 5.92112H15.9139C16.1655 5.92112 16.3812 5.99685 16.5609 6.14832C16.7407 6.3005 16.8665 6.47483 16.9384 6.67131C17.0103 6.86778 17.0193 7.08212 16.9653 7.31432C16.9114 7.54653 16.7766 7.73407 16.5609 7.87696L12.6518 10.6366L14.1885 15.5932C14.2784 15.8432 14.274 16.0754 14.1756 16.2898C14.0763 16.5041 13.9369 16.6738 13.7571 16.7988C13.5774 16.9239 13.3707 16.9907 13.1371 16.9992C12.9034 17.0085 12.6877 16.9328 12.49 16.772L8.5 13.7445Z"
                fill="#FFCD52" />
            </svg>
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"
              v-for="star in 5 - Math.round(props.job.rating)" :key="star">
              <path
                d="M8.5 13.7445L4.50997 16.772C4.31226 16.9328 4.09659 17.0085 3.86294 16.9992C3.62929 16.9907 3.42259 16.9239 3.24286 16.7988C3.06313 16.6738 2.92402 16.5041 2.82553 16.2898C2.72632 16.0754 2.72164 15.8432 2.81151 15.5932L4.34821 10.6366L0.439057 7.87696C0.22338 7.73407 0.0885817 7.54653 0.0346624 7.31432C-0.0192569 7.08212 -0.0102703 6.86778 0.0616222 6.67131C0.133515 6.47483 0.259326 6.3005 0.439057 6.14832C0.618789 5.99685 0.834466 5.92112 1.08609 5.92112H5.91187L7.47553 0.776979C7.5654 0.526917 7.70487 0.334727 7.89395 0.200407C8.0823 0.0668027 8.28432 0 8.5 0C8.71568 0 8.9177 0.0668027 9.10605 0.200407C9.29513 0.334727 9.4346 0.526917 9.52447 0.776979L11.0881 5.92112H15.9139C16.1655 5.92112 16.3812 5.99685 16.5609 6.14832C16.7407 6.3005 16.8665 6.47483 16.9384 6.67131C17.0103 6.86778 17.0193 7.08212 16.9653 7.31432C16.9114 7.54653 16.7766 7.73407 16.5609 7.87696L12.6518 10.6366L14.1885 15.5932C14.2784 15.8432 14.274 16.0754 14.1756 16.2898C14.0763 16.5041 13.9369 16.6738 13.7571 16.7988C13.5774 16.9239 13.3707 16.9907 13.1371 16.9992C12.9034 17.0085 12.6877 16.9328 12.49 16.772L8.5 13.7445Z"
                fill="#FFC944" fill-opacity="0.31" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import MainTag from './MainTag.vue';
import Paragraph from './TextComponents/Paragraph.vue';
import BaseHeader from './TextComponents/BaseHeader.vue';

interface JobCardProps {
  job: {
    id: number,
    promouted: boolean,
    logo_url: string,
    title: string,
    company: {
      company_name: string,
      confirmed: boolean
    },
    location: string,
    salary: {
      from: number,
      to: number
    }
    applicants: number,
    position: string,
    publicDate: string,
    about: string,
    candidate: string,
    responsibilities: string[],
    rating: number,
    reviews_count: number,
    tags: string[]
  }
};

const jobCardOpen = ref(false);

const props = defineProps<JobCardProps>();

function getClasses(promouted: boolean): string {
  let classes = "";

  if (promouted) {
    classes += "promouted ";
  }

  if (jobCardOpen.value) {
    classes += "open ";
  }

  return classes
}

function dayTitle(number: number) {
  if (number > 10 && [11, 12, 13, 14].includes(number % 100)) return 'дней';
  let last_num: number = number % 10;
  if (last_num == 1) return 'день';
  if ([2, 3, 4].includes(last_num)) return 'дня';
  if ([5, 6, 7, 8, 9, 0].includes(last_num)) return 'дней';
}

function formatDate(dateString: string): string {
  const currentDate = new Date();
  const givenDate = new Date(dateString);

  // Разница в миллисекундах
  const differenceInMilliseconds = currentDate.getTime() - givenDate.getTime();

  // Преобразуем в дни
  const differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));

  return String(differenceInDays) + " " + dayTitle(differenceInDays);
}
</script>

<style lang="sass">
.job_card 
  box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.04)
  border-radius: 13px
  background: var(--white-color)
  transition: box-shadow 0.3s, transform 0.3s
  &:hover
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.08)
    transform: scale(1.005)
  &.open
    .job_card__more
      background: none
      border: 1px solid var(--accent-color)
      color: var(--accent-color)
  &.promouted
    background: var(--accent-second)
    position: relative
    border: 1px solid var(--accent-color)
    .job_card__tag
      background: var(--white-color)
    &::after
      content: "Promoted"
      padding: 6px 9px
      background: var(--accent-color)
      border-radius: 5px
      font-size: 16px
      color: var(--white-color)
      position: absolute
      top: -9px
      left: 32px
  &__top
    display: flex
    align-items: center
    padding: 32px 30px
    &:hover 
      background: var(--gray-color)
  &__tags
    display: flex
    gap: 11px
    margin-right: auto
  &__tag
    display: flex
    align-items: center
    gap: 5px
    padding: 9px 20px 9px 18px
    border-radius: 8px
    background: var(--gray-tag)
  &__logo
    border-radius: 10px
    margin-right: 22px
    width: 93px
    height: 93px
    object-fit: cover
  &__header
    width: 380px
    margin-right: 30px
    flex-shrink: 2
  &__title
    font-size: 24px
    font-weight: 400
    color: var(--accent-color)
    margin-bottom: 1px
  &__company
    display: flex
    align-items: center
    gap: 5px
  &__applicants
    color: var(--gray-second)
  &__more 
    margin-left: 24px
    width: 160px
    text-align: center
    justify-content: center
  &__main
    padding: 0 40px 45px 40px
  &__list
    &__item
      display: flex
      align-items: center
      gap: 10px
      padding-left: 10px
      line-height: 1.3
      &::before
        content: ""
        width: 5px
        height: 5px
        background: var(--gray-second)
        border-radius: 50%
  &__line
    width: 100%
    background: var(--gray-third)
    height: 1px
    margin-bottom: 30px
  &__footer
    display: flex
    align-items: center
    justify-content: space-between
    &__tags
      display: flex
      gap: 11px
  &__rating
    display: flex
    align-items: center
    color: var(--gray-second)
    gap: 14px
    &__stars
      display: flex
      gap: 3px
      svg 
        width: 17px
        height: 17px

</style>