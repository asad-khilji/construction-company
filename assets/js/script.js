const createHeader = () => {
    let header = document.querySelector('header');

    header.innerHTML = `
    <header>   
    <div class="announcement-bar"></div>
    <div class="row">
        <div class="col-4">
            <h1>Somnium Home</h1>
        </div>
        <div class"col-4">
            <h3>Address</h3>
            <p>Roxbury Township</p><br>
        </div>
        <div class"col-4">
            <h3>Phone</h3>
            <p>862.223.0358</p><br>
        </div>
        <div class"col-4">
            <h3>Email</h3>
            <p>somnium_home@icloud.com</p>
        </div>
    </div>
    </header>
    `;
}

createHeader();

const createNav = () => {
    let nav = document.querySelector('nav');

    nav.innerHTML = `
        <nav>
            <a href="index.html">
            <div class="dropdown">
                <span>Home</span>
            </div>
            </a>
            <a href="#about-us">
            <div class="dropdown">
                <span>About Us</span>
            </div>
            </a>
            <a href="#our-services">
            <div class="dropdown">
                <span>Services</span>
            </div>
            </a>
            <a href="#areas">
            <div class="dropdown">
                <span>Areas</span>
            </div>
            </a>
            <a href="#projects">
            <div class="dropdown">
                <span>Projects</span>
            </div>
            </a>
            <a href="#reviews">
            <div class="dropdown">
                <span>Reviews</span>
            </div>
            </a>
            <a href="#contact">
            <div class="dropdown">
                <span>Contact Us</span>
            </div>
            </a>
            <a href="#free-estimate">
             <div class="dropdown">
                <span>Free Estimates</span>
            </div>
            </a>
        </nav>
    `;
}

createNav();

const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
        <div class="row">
            <div class="col-4">
                <a href="index.html"><h1>Somnium <br>Home</h1></a>
            </div>
            <div class="col-4">
                <h3>QUICK LINKS</h3>
                <a href="index.html"><p>Home</p></a>
                <a href="#about-us"><p>About Us</p></a>
                <a href="#reviews"><p>Reviews</p></a>
                <a href="#contact"><p>Contact</p></a>
            </div>
            <a href="#our-services">
            <div class="col-4">
                <h3>OUR SERVICES</h3>
                <a href="#our-services"><p>Basement Remodeling</p></a>
                <a href="#our-services"><p>Bathroom Remodeling</p></a>
                <a href="#our-services"><p>Kitchen Remodeling</p></a>
            </div>
            </a>
            <div class="col-4">
                <h3>CONTACT</h3>
                <a href="tel:862-223-0358"><p>📞 862.223.0358</p></a>
                <a href="mailto:somnium_home@icloud.com"><p>✉️ somnium_home@icloud.com</p></a>
                <p>📍 Roxbury Township, NJ</p>
            </div>
        </div>
    `;
}

createFooter();