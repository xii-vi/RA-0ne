const navbarComponent = () => document.querySelector(".create-navbar").innerHTML = `
        <nav class="flex px-4">
            <div>
                <a href="/index.html">
                    <span class="brand-name h1">RE</span>
                </a>
            </div>
            <div class="links">
                <a href="https://github.com/xii-vi/RA-0ne"><i class="fab fa-github fa-2x"></i></a>           
                <a id="open-menu" class="open-menu"><i class="fa fa-bars fa-2x"></i></a>
                <a id="close-menu" class="close-menu"><i class="fa fa-times fa-2x" ></i></a>
                <div class="mobile-sidebar" id="sm-sidebar">
                <aside class="flex px-5">
                <div>
                     <p class="aside-heading">Getting Started</p>
                     <a class="p-4 flex anchor-tag" href="/pages/how-to-install.html">Usage</a>
                     <p class="aside-heading">Components</p>
                     <a class="p-4 flex anchor-tag" href="/pages/alert.html">Alert</a>
                     <a class="p-4 flex anchor-tag" href="/pages/avatar.html">Avatar</a>
                     <a class="p-4 flex anchor-tag" href="/pages/badge.html">Badge</a>
                     <a class="p-4 flex anchor-tag" href="/pages/button.html">Button</a>
                     <a class="p-4 flex anchor-tag" href="/pages/card.html">Card</a>
                     <a class="p-4 flex anchor-tag" href="/pages/grid.html">Grid</a>
                     <a class="p-4 flex anchor-tag" href="/pages/image.html">Image</a>
                     <a class="p-4 flex anchor-tag" href="/pages/input.html">Input</a>
                     <a class="p-4 flex anchor-tag" href="/pages/list.html">List</a>
                     <a class="p-4 flex anchor-tag" href="/pages/modal.html">Modal</a>
                     <a class="p-4 flex anchor-tag" href="/pages/navigation.html">Navigation</a>
                     <a class="p-4 flex anchor-tag" href="/pages/rating.html">Rating</a>
                     <a class="p-4 flex anchor-tag" href="/pages/slider.html">Slider</a>
                     <a class="p-4 flex anchor-tag" href="/pages/text-utilities.html">Text Utilities</a>
                     <a class="p-4 flex anchor-tag" href="/pages/toast.html">Toast</a>
                </div>
                </aside>
                </div>
            </div>
        </nav>`;

navbarComponent();

document.querySelector(".open-menu").addEventListener("click", () => {
    document.querySelector(".mobile-sidebar").classList.add("show");
    document.querySelector(".mobile-sidebar").classList.remove("hide");
    document.querySelector(".open-menu").classList.add("hide");
    document.querySelector(".open-menu").classList.remove("show");
    document.querySelector(".close-menu").classList.add("show");
    document.querySelector(".close-menu").classList.remove("hide");
})

document.querySelector(".close-menu").addEventListener("click", () => {
    document.querySelector(".mobile-sidebar").classList.add("hide");
    document.querySelector(".mobile-sidebar").classList.remove("show");
    document.querySelector(".close-menu").classList.add("hide");
    document.querySelector(".close-menu").classList.remove("show");
    document.querySelector(".open-menu").classList.add("show");
    document.querySelector(".open-menu").classList.remove("hide");
})

const btn = document.querySelector(".btn-toggle");
const lightModeBtn = document.querySelector("#light-theme");
const darkModeBtn = document.querySelector("#dark-theme");

const darkThemeBtn = () => {
    document.body.classList.add("dark-theme");
    lightModeBtn.style.display = "block";
    darkModeBtn.style.display = "none";
    localStorage.setItem("theme", "dark");
}
const lightThemeBtn = () => {
    document.body.classList.remove("dark-theme");
    darkModeBtn.style.display = "block";
    lightModeBtn.style.display = "none";
    localStorage.setItem("theme", "light");
}
const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
    darkThemeBtn();
} else {
    lightThemeBtn();
}

btn.addEventListener("click", () =>
    {
        if (localStorage.getItem("theme") === "light") {
        darkThemeBtn();
    }
    else {
        lightThemeBtn();
    }
});