window.addEventListener("DOMContentLoaded", () => {
// modal
    const form = document.querySelector("#submitForm");
    const popup = document.querySelector(".modal-request");
    const background = document.querySelector(".modal__bg");
    const close = document.querySelector(".modal-close");
    const body = document.querySelector("body");

    const userName = document.querySelector('#name'),
        userMobile = document.querySelector('#tel');

    form?.addEventListener("submit", (evt) => {
        evt.preventDefault();
        popup.classList.add("show");
        background.classList.add("show");
        body.classList.add("lock");
        console.log(`Имя: ${userName.value}, Телефон: ${userMobile.value}`);
    });

    close?.addEventListener("click", closeModal);

    background?.addEventListener("click", closeModal);

    function closeModal() {
        background.classList.remove("show");
        popup.classList.remove("show");
        body.classList.remove("lock");
    };

});
