class TopNavTemplate extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="topnav">
            <img src="../../public/images/PGIPTech Header 1.png" alt="Image of PGIP-Tech logo" class="head-logo">
            <button class="hamburger" onclick="toggleMenu()">☰</button>
            <p id="user-info">Welcome, [UserName/Email]</p>
            <style>
                .topnav {
                    background-color: var(--white-12);
                    display: grid;
                    grid-template-columns: 66% 34%;
                    grid-template-rows: 100%;
                    height: 106px;
                    color: var(--black-13);
                    grid-row: 1;
                }
                #user-info {
                    justify-self: end;
                    align-self: start;
                    padding-inline: 0.75%
                }
                .hamburger {
                    display: block;
                    font-size: 24px;
                    cursor: pointer;
                    grid-row: 1;
                    grid-column: 2;
                    align-self: start;
                    justify-self: end;
                }
                .head-logo {
                    width: auto;
                    grid-row: 1;
                    grid-column: 1;
                    height: 69.44px;
                    width: 250px;
                    align-self: center;
                }
                .user-menu {
                    display: none;
                }
                @media (min-width: 600px) {
                    .head-logo {
                        height: 90px;
                        width: 324px;
                    }
                    .hamburger {
                        display: none;
                    }
                    .user-menu {
                        display: block;
                    }
                }
                @media (min-width: 1024px) {
                    #user-info {
                        padding-inline: 2%;
                    }
                }
            </style>
        </div>
        `
    }
}    

class FooterTemplate extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="foot">
            <img src="../../public/images/PGIPTech Header 1.png" alt="Image of PGIP-Tech logo" class="foot-logo">
            <p class="copyright">© PGIP Tech</p>
            <p class="copyright-year">2024</p>
            <style>
                .foot {
                    background-color: var(--white-12);
                    justify-items: center;
                    height: 106px;
                    width: 100%;
                    display: grid;
                    grid-template-columns: 100%;
                    grid-template-rows: 60% 20% 20%;
                    align-items: center;
                    justify-items: center;
                    height: inherit;
                    color: var(--black-13);
                    grid-row: 3;
                }
                .copyright {
                    grid-row: 2;
                }
                .copyright-year {
                    grid-row: 3;
                }
                .foot-logo {
                    grid-row: 1;
                    width: 200px;
                    height: 55.56px;
                }
            </style>
        </div>
        `
    }
}

customElements.define('topnav-template', TopNavTemplate)
customElements.define('footer-template', FooterTemplate)