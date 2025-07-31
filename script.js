document.addEventListener('DOMContentLoaded', () => {
    // Tab switching
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.form-fields');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.dataset.tab;

            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            tabContents.forEach(content => {
                if (content.dataset.tabContent === targetTab) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });
        });
    });

    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger-menu');
    const navUl = document.querySelector('header nav ul');

    hamburger.addEventListener('click', () => {
        navUl.classList.toggle('active');
    });

    // One-Way / Round-Trip selection
    const tripTypeRadios = document.querySelectorAll('input[name="tripType"]');
    const returnDateTimeInput = document.getElementById('returnDateTime');

    tripTypeRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            if (radio.value === 'roundTrip') {
                returnDateTimeInput.classList.remove('hidden');
                returnDateTimeInput.setAttribute('required', 'true');
            } else {
                returnDateTimeInput.classList.add('hidden');
                returnDateTimeInput.removeAttribute('required');
                returnDateTimeInput.value = '';
            }
        });
    });

    // Initialize return date hidden if One Way is default
    if (document.querySelector('input[name="tripType"][value="oneWay"]').checked) {
        returnDateTimeInput.classList.add('hidden');
        returnDateTimeInput.removeAttribute('required');
    }
});
