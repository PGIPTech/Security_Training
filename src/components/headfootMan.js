class TopNavTemplate extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header class="navbar">
            <div class="logo">
                <img src="../../public/images/PGIPTech Header 1.png" alt="Image of PGIP-Tech logo">
            </div>
            <nav class="nav-links" id="burgerMenu">
                <a href="#">Home</a>
                <a href="/training">Training</a> 
                <a href="/about">About</a> 
                <a href="/testing">Test</a> 
            </nav>
            <button class="hamburger-menu" id="burgerBtn" onclick="toggleMenu()">
                <!--  Hamburger lines because I'm not using an icon --> 
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
            </button>
            <span class="welcome">Welcome, {UserName/Email}</span>
        </header>
        <style> 
            .navbar {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 5px 5px;
                background-color: #fff;
                color: #000;
            }
            
            .logo {
                flex: 1; /* Distribute the available space equally, causing items to grow and occupy available space proportionally */
                margin-right: 20px; /* Adjusts the spacing to the right of the logo */
                align-self: start;
            }
            
            .logo img {
                max-width: 100%;
            }
            
            .nav-links {
                flex: 2; /* Distribute the available space equally, causing items to grow and occupy available space proportionally */
                text-align: center;
                flex-direction: column;
            }
            
            .nav-links a {
                color: #000;
                text-decoration: none;
                margin: 0 10px; /* Adjust spacing between links */
            }
        
            .welcome {
                margin-right: 2rem;
            }
            
            /* Hamburger menu */
            .hamburger-menu {
                display: none;
                cursor: pointer;
                align-self: flex-end; /* Aligns hamburger menu to the right of the header */
                margin-top: -50px; /* Uses a negative value to pkace it closer to the top */
                margin-right: 20px; /* The gap between the end of the page and the hamburger menu */
                background: none;
                border: none;
            }
        
            .bar {
                width: 25px;
                height: 3px;
                background-color: #000;
                margin: 5px 0;
            }
        
            @media screen and (max-width: 1200px) {
                
                .logo img {
                max-width: 70%;
                }
        
                .nav-links {    
                display: none;
                order: 3;
                align-self: end;
                margin-block: 1rem;
                gap: 1rem;
                }
        
                .hamburger-menu {
                display: block;
                }
        
                .navbar {
                flex-direction: column; /* Changes the links to a column instead of a row on small screens */
                align-items: center;
                }
        
                .welcome {
                margin-top: 1.7rem; /* Gives the welcome message space between it and the logo */
                text-align: center; /* Centers the welcome message */
                order: 4; /* Sets the order to 3, so the welcome message lies at the bottom of the header - after the logo and hamburger */
                }
            }
        </style>
        `
    }
}    


// Need to fix nav menu being pushed off screen to right by .imgs flex-row property

class FooterTemplate extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer>
                <img src="../../public/images/PGIPTech Header 1.png" alt="Image of PGIP-Tech logo">
                <p>© PGIP Tech</p>
                <p>2024</p>
            </footer>
        `
    }
}

customElements.define('topnav-template', TopNavTemplate)
customElements.define('footer-template', FooterTemplate)

function toggleMenu() {
    var hamburgerMenu = document.getElementById('burgerMenu')
    if (hamburgerMenu.style.display === 'none') {
        hamburgerMenu.style.display = 'flex';
    } else {
        hamburgerMenu.style.display = 'none'
    }
}