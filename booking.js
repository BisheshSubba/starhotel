const calendar = document.querySelector('.calendar');
const monthYearDisplay = calendar.querySelector('.month-year');
const daysContainer = calendar.querySelector('.days');
const prevButton = calendar.querySelector('.prev');
const nextButton = calendar.querySelector('.next');

let date = new Date();

function renderCalendar() {
    date.setDate(1);

    const monthDays = document.querySelector(".days");
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    const firstDayIndex = date.getDay();
    const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
    const nextDays = 7 - lastDayIndex - 1;

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    monthYearDisplay.innerHTML = months[date.getMonth()] + " " + date.getFullYear();

    let days = "";

    for (let x = firstDayIndex; x > 0; x--) {
        days += `<span class="prev-date">${prevLastDay - x + 1}</span>`;
    }

    for (let i = 1; i <= lastDay; i++) {
        if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
            days += `<span class="today">${i}</span>`;
        } else {
            days += `<span>${i}</span>`;
        }
    }

    for (let j = 1; j <= nextDays; j++) {
        days += `<span class="next-date">${j}</span>`;
    }
    monthDays.innerHTML = days;
}

prevButton.addEventListener('click', () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
});

nextButton.addEventListener('click', () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
});

renderCalendar();
