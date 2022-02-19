const navbarComponent = () => document.querySelector(".create-navbar").innerHTML = `
<nav class="flex px-4">
            <div>
                <a href="/index.html">
                    <span class="brand-name h1">RE</span>
                </a>
            </div>
            <div class="links">
                <a href="https://github.com/xii-vi/RA-0ne"><i class="fab fa-github fa-2x"></i></a>
            </div>
        </nav>`;

navbarComponent();