<template>
  <div>
    <section class="section hero">
      <div class="container hero__container">
        <h1 class="hero__h1">
          Найдите <strong>работу</strong> своей мечты в cryptojob
        </h1>
        <p class="hero__title">с нашей компанией это сделать проще всего</p>
      </div>
    </section>

    <section class="filters">
      <div class="container">
        <div class="filters__container">
          <div class="filters__left">
            <form class="search" @submit.prevent="searchFunction">
              <input type="text" class="search__input" name="search" placeholder="Введите что-нибудь.." v-model="searchInput">
              <MainBtn type="search" text="Найти" class="search__btn" />
            </form>
          </div>
          <div class="filters__right">
            <div class="base_filter">
              <div class="base_filter__header">
                <span>Локация</span>
                <button class="base_filter__btn">
                  <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 1.0552L6 7L-2.59855e-07 1.0552L1.065 4.30285e-07L6 4.8896L10.935 -1.14689e-09L12 1.0552Z"
                      fill="black" />
                  </svg>
                </button>
              </div>
              <div class="base_filter__list">
                <button class="base_filter__item" v-for="filter in locationsFilter" :key="filter"
                @click="filterClick('location', filter)" :class="selectedLocationFilters.has(filter) ? 'active' : ''">
                  {{ filter }}
                </button>
              </div>
            </div>
            <div class="base_filter">
              <div class="base_filter__header">
                <span>Тип работы</span>
                <button class="base_filter__btn">
                  <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 1.0552L6 7L-2.59855e-07 1.0552L1.065 4.30285e-07L6 4.8896L10.935 -1.14689e-09L12 1.0552Z"
                      fill="black" />
                  </svg>
                </button>
              </div>
              <div class="base_filter__list">
                <button class="base_filter__item" v-for="filter in typeFilter" :key="filter"
                  @click.prevent="filterClick('type', filter)" :class="selectedTypeFilters.has(filter) ? 'active' : ''">
                  {{ filter }}
                </button>
              </div>
            </div>
            <div class="base_filter">
              <div class="base_filter__header">
                <span>{{ selectedSort || "Сортировка" }}</span>
                <button class="base_filter__btn">
                  <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 1.0552L6 7L-2.59855e-07 1.0552L1.065 4.30285e-07L6 4.8896L10.935 -1.14689e-09L12 1.0552Z"
                      fill="black" />
                  </svg>
                </button>
              </div>
              <div class="base_filter__list">
                <button class="base_filter__item" v-for="item of sortsJob" :key="item" @click="selectedSort = item"
                  :class="selectedSort == item ? 'active' : ''">
                  {{ item }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="jobs">
      <div class="container">
        <div class="jobs__list">
          <JobCard v-for="job of filteredJobs.slice(0, step)" :job="job" :key="job.id" />
          <div class="empty" v-if="filteredJobs.length === 0">Ничего не найдено</div>
          <button v-if="step < filteredJobs.length" class="jobs__more" @click.prevent="loadMoreJobs">
            загрузить больше работ
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import MainBtn from "~/components/MainBtn.vue";
import JobCard from "~/components/JobCard.vue";

let searchQuery = ref("");
let searchInput = ref("");

let step = ref(3);

interface Job {
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
};

let jobs_data: Job[] = [
  {
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
  },
  {
    id: 2,
    promouted: false,
    title: "DevOps инженер",
    logo_url: "logos/logo2.jpg",
    company: {
      company_name: "Tech Innovators",
      confirmed: true,
    },
    location: "Санкт-Петербург",
    salary: {
      from: 110_000,
      to: 150_000
    },
    applicants: 95,
    position: "Инженер",
    publicDate: "2024-12-09",
    about: `Ваша задача — разработка и поддержка инфраструктуры для наших продуктов.`,
    candidate: `Опыт работы в сфере DevOps от 3 лет. Знание инструментов CI/CD.`,
    responsibilities: [
      "Автоматизация процессов развертывания",
      "Поддержка и мониторинг облачной инфраструктуры",
      "Обеспечение безопасности системы",
      "Сотрудничество с разработчиками",
      "Создание и поддержка CI/CD пайплайнов",
      "Оптимизация работы систем",
    ],
    rating: 4.5,
    reviews_count: 18,
    tags: [
      "DevOps",
      "Kubernetes",
      "AWS",
    ]
  },
  {
    id: 3,
    promouted: true,
    title: "Менеджер проекта",
    logo_url: "logos/logo3.jpg",
    company: {
      company_name: "Innovative Startups",
      confirmed: false,
    },
    location: "Казань",
    salary: {
      from: 90_000,
      to: 130_000
    },
    applicants: 85,
    position: "Менеджер",
    publicDate: "2024-12-08",
    about: `Управление проектами и координация команд.`,
    candidate: `Опыт работы менеджером проектов от 2 лет. Умение работать с Agile/Scrum.`,
    responsibilities: [
      "Планирование и контроль сроков проектов",
      "Коммуникация с заказчиками",
      "Ресурсное планирование",
      "Управление рисками",
      "Координация работы команды",
      "Мониторинг выполнения задач",
    ],
    rating: 2.9,
    reviews_count: 10,
    tags: [
      "Agile",
      "Scrum",
      "Управление проектами",
    ]
  },
  {
    id: 4,
    promouted: true,
    title: "Аналитик данных",
    logo_url: "logos/logo4.jpg",
    company: {
      company_name: "Data Experts",
      confirmed: false,
    },
    location: "Новосибирск",
    salary: {
      from: 100_000,
      to: 140_000
    },
    applicants: 70,
    position: "Аналитик",
    publicDate: "2024-12-07",
    about: `Работа с большими данными и их анализ.`,
    candidate: `Опыт работы с Python и SQL. Знание статистики.`,
    responsibilities: [
      "Сбор и обработка данных",
      "Разработка аналитических отчетов",
      "Моделирование данных",
      "Поддержка BI-инструментов",
      "Оптимизация ETL процессов",
      "Работа с командами разработки",
    ],
    rating: 4.3,
    reviews_count: 8,
    tags: [
      "Python",
      "SQL",
      "Big Data",
    ]
  },
  {
    id: 5,
    promouted: false,
    title: "Frontend-разработчик",
    logo_url: "logos/logo5.jpg",
    company: {
      company_name: "Creative Solutions",
      confirmed: true,
    },
    location: "Екатеринбург",
    salary: {
      from: 120_000,
      to: 160_000
    },
    applicants: 110,
    position: "Разработчик",
    publicDate: "2024-12-06",
    about: `Создание интерфейсов для веб-приложений.`,
    candidate: `Знание React и JavaScript. Опыт работы от 2 лет.`,
    responsibilities: [
      "Разработка UI/UX для веб-приложений",
      "Сотрудничество с дизайнерами",
      "Оптимизация кода",
      "Работа с REST API",
      "Поддержка существующего функционала",
      "Тестирование интерфейсов",
    ],
    rating: 4.6,
    reviews_count: 15,
    tags: [
      "React",
      "JavaScript",
      "Frontend",
    ]
  }
];


const locationsFilter = computed(() => {
  let locationSet = new Set();
  for (let item of jobs_data) {
    locationSet.add(item.location);
  }
  return locationSet;
});

let selectedLocationFilters = ref(new Set());

const typeFilter = computed(() => {
  let typeSet = new Set();
  for (let item of jobs_data) {
    typeSet.add(item.position);
  }
  return typeSet;
});

let selectedTypeFilters = ref(new Set());

const sortsJob = [
  "Новые",
  "Старые",
  "ЗП Больше",
  "ЗП Меньше",
];

const selectedSort = ref("");

const filteredJobs = computed(() => {
  let newJobs = jobs_data;

  //Поиск
  if (searchQuery.value) {
    newJobs = newJobs.filter((el) => {
      if (el.title.toLocaleLowerCase().includes(searchQuery.value.toLocaleLowerCase()))
        return el
      if (el.location.toLocaleLowerCase().includes(searchQuery.value.toLocaleLowerCase()))
        return el
      if (el.position.toLocaleLowerCase().includes(searchQuery.value.toLocaleLowerCase()))
        return el
      if (el.company.company_name.toLocaleLowerCase().includes(searchQuery.value.toLocaleLowerCase()))
        return el
    });
  }

  //Фильтрация
  if (selectedTypeFilters.value.size > 0) {
    newJobs = newJobs.filter(el => selectedTypeFilters.value.has(el.position))
  }

  if (selectedLocationFilters.value.size > 0) {
    newJobs = newJobs.filter(el => selectedLocationFilters.value.has(el.location))
  }

  //Сортировка
  switch (selectedSort.value) {
    case "Новые":
      newJobs = newJobs.sort((a, b) => {
        let a_date = new Date(a.publicDate);
        let b_date = new Date(b.publicDate);
        if (a_date < b_date) return 1;
        if (a_date > b_date) return -1;
        return 0;
      });
      break;
    case "Старые":
      newJobs = newJobs.sort((a, b) => {
        let a_date = new Date(a.publicDate);
        let b_date = new Date(b.publicDate);
        if (a_date > b_date) return 1;
        if (a_date < b_date) return -1;
        return 0;
      });
      break;
    case "ЗП Больше":
      newJobs = newJobs.sort((a, b) => {
        if (a.salary.from < b.salary.from) return 1;
        if (a.salary.from > b.salary.from) return -1;
        return 0;
      });
      break;
    case "ЗП Меньше":
      newJobs = newJobs.sort((a, b) => {
        if (a.salary.from > b.salary.from) return 1;
        if (a.salary.from < b.salary.from) return -1;
        return 0;
      });
      break;
  }

  return newJobs;
})

function searchFunction() {
  searchQuery.value = searchInput.value;
}

function filterClick(filterType: string, filter: string) {
  switch (filterType) {
    case "type":
      selectedTypeFilters.value.has(filter) ? selectedTypeFilters.value.delete(filter) : selectedTypeFilters.value.add(filter);
      break;    
    case "location":
      selectedLocationFilters.value.has(filter) ? selectedLocationFilters.value.delete(filter) : selectedLocationFilters.value.add(filter);
      break;
  }
}

function loadMoreJobs() {
  step.value += 3;
}

</script>

<style lang="sass">
.hero 
  padding: 0 17px
  border-radius: 26px
  margin: 0 auto
  background: var(--white-color)
  padding: 165px 0 158px
  text-align: center
  &__h1
    font-size: 40px
    font-weight: 600
    margin-bottom: 7px
    strong
      color: var(--accent-color)
      font-weight: 600
  &__title
    color: var(--gray-second)
    font-size: 24px

.filters
  // position: relative
  margin-top: -75px
  margin-bottom: 75px
  &__container
    background: var(--white-color)
    border: 1px solid var(--gray-third)
    box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.04)
    border-radius: 13px
    display: flex
  &__left
    border: 1px solid var(--accent-color)
    padding: 44px 47px
    width: 550px
    // margin-left: -30px
    border-radius: 13px
    flex-shrink: 0
  &__right
    padding: 25px 45px
    display: flex
    align-items: center
    justify-content: space-between
    gap: 15px
    width: 100%
    // gap: 5px

.base_filter
  position: relative
  cursor: pointer
  flex: 1 1 250px
  &:hover
    .base_filter__list
      opacity: 1
      pointer-events: auto
    .base_filter__btn
      svg
        transform: scale(1, -1)
  &__header
    position: relative
    border-radius: 11px
    border: 1px solid var(--gray-third)
    height: 60px
    // flex: 1 1 250px
    display: flex
    align-items: center
    padding: 20px
  &__btn
    background: var(--gray-btn)
    width: 47px
    height: 47px
    display: flex
    align-items: center
    justify-content: center
    border-radius: 7px
    position: absolute
    top: 6px
    right: 6px
    svg
      transition: transform 0.3s
      width: 12px
      height: 16px
  &__list
    width: 100%
    position: absolute
    transform: translateY(100%)
    bottom: 0
    // top: 100%
    left: 0
    display: flex
    flex-direction: column
    align-items: flex-start
    // text-align: left
    background: var(--white-color)
    border-radius: 11px
    opacity: 0
    pointer-events: none
    transition: opacity 0.3s
    z-index: 2
  &__item
    &.active
      background: var(--gray-third)
    padding: 18px
    width: 100%
    text-align: left
    transition: background 0.3s
    border-radius: 10px
    &:hover
      background: var(--gray-third)

.search
  position: relative
  &__input
    padding: 19px
    background: var(--back-color)
    border-radius: 11px
    width: 100%
    padding-right: 110px
    // box-sizing: border-box
  &__btn
    position: absolute
    right: 6px
    top: 6px
    bottom: 6px

.jobs
  padding-bottom: 50px
  &__list
    display: flex
    flex-direction: column
    gap: 25px
  &__more
    color: var(--gray-second)
    transition: color 0.3s
    &:hover
      color: var(--accent-color)

.empty
  padding: 40px 20px
  display: flex
  align-items: center
  justify-content: center
  font-size: 25px

</style>