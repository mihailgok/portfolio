const { createApp, ref, watch, computed } = Vue;

const newParams = new URLSearchParams(window.location.search)

if (window.location.search) {
    localInfo = {
        stavka: newParams.get("stavka"),
        summ: newParams.get("summ"),
        srok: newParams.get("srok"),
        vznos: newParams.get("vznos"),
    }
}
else {
    localInfo = JSON.parse(localStorage.getItem("credit_info")) || 0;
}

// const newUrl = new URL(window.location.href);

// newUrl.search = newParams.toString();

// window.history.pushState('page', 'Калькулятор кредита', newUrl);


createApp({
    setup() {
        const stavka = ref(localInfo ? Number(localInfo["stavka"]) : 19);
        const summ = ref(localInfo ? Number(localInfo["summ"]) : 1000000);
        const srok = ref(localInfo ? Number(localInfo["srok"]) : 36);
        const vznos = ref(localInfo ? Number(localInfo["vznos"]) : 100000);

        const share_link = ref(window.location.href);
        const activeModal = ref(false);

        const mounthly = computed(() => {
            const P = Number(stavka.value) / 12 / 100;

            const result = (summ.value - vznos.value) * (P / (1 - (1 + P) ** (-srok.value)));

            const chartData = [
                {
                    id: 1,
                    name: "Основной долг",
                    amount: Math.round((summ.value - vznos.value)),
                },
                {
                    id: 2,
                    name: "Проценты",
                    amount: Math.round(result * srok.value - summ.value + vznos.value),
                },
            ];

            createChart(chartData);

            document.querySelector("#credit_summ").innerHTML = Math.round((summ.value - vznos.value)).toLocaleString() + " ₽";
            document.querySelector("#credit_cent").innerHTML = Math.round(result * srok.value - summ.value + vznos.value).toLocaleString() + " ₽";

            const newParams = new URLSearchParams(window.location.search);
            const newUrl = new URL(window.location.href);

            newParams.set('stavka', stavka.value);
            newParams.set('summ', summ.value);
            newParams.set('srok', srok.value);
            newParams.set('vznos', vznos.value);

            newUrl.search = newParams.toString();

            window.history.pushState('page', 'Калькулятор кредита', newUrl);

            share_link.value = newUrl.toString();

            localStorage.setItem("credit_info", JSON.stringify({
                "stavka": stavka.value,
                "summ": summ.value,
                "srok": srok.value,
                "vznos": vznos.value,
            }));

            return result;
        });

        function openModal() {
            activeModal.value = true;
        }

        function closeModal(e) {
            if(e.target.classList.contains('share_panel')) {
                activeModal.value = false;
            }
        }

        function copyLink() {
            navigator.clipboard.writeText(share_link.value)
                .then(() => {
                    share_link.value = "Скопировано!";
                    setTimeout(function () {
                        share_link.value = window.location.href;
                    }, 800)
                })
                .catch(err => {
                    console.log('Something went wrong', err);
                });
        }

        const P = Number(stavka.value) / 12 / 100;
        const result = (summ.value - vznos.value) * (P / (1 - (1 + P) ** (-srok.value)));
        const chartData = [
            {
                id: 1,
                name: "Основной долг",
                amount: Math.round(summ.value - vznos.value),
            },
            {
                id: 2,
                name: "Проценты",
                amount: Math.round(result * srok.value - summ.value + vznos.value),
            },
        ];

        createChart(chartData);

        return {
            stavka,
            summ,
            srok,
            vznos,
            mounthly,
            share_link,
            activeModal,
            openModal,
            closeModal,
            copyLink
        }
    }
}).mount('#mainapp');


const headers = {
    "Access-Control-Allow-Origin": "*",
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};
async function getPercents() {
    let result = await fetch("/cbr.txt", {
        method: 'GET',
        headers: headers
    }).then((res) => {
        console.log(res)
    });
    console.log(result)
    console.log(await result)
}

getPercents();