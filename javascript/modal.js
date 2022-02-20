const modalWrapper = document.querySelector(".modal-wrapper");

document.querySelector("#demo-button").addEventListener("click", () => modalWrapper.style.display = "block");

document.querySelector(".close-btn").addEventListener("click", () => modalWrapper.style.display = "none");