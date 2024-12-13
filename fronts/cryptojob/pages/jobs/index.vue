<template>
    <div>
      <section class="jobs">
        <div class="container">
          <div class="jobs__list">
            <JobCard v-for="job of jobs_data.slice(0, step)" :job="job" :key="job.id" />
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script lang="ts" setup>
  import JobCard from "~/components/JobCard.vue";

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
  </script>
  
  <style lang="sass" scoped>
  .jobs
    padding-top: 100px
  </style>