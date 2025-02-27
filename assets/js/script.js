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
            <div class="dropdown">
                <span>Home</span>
            </div>
            <div class="dropdown">
                <span>About Us</span>
            </div>
            <div class="dropdown">
                <span>Services</span>
                <div class="dropdown-content">
                  <a href="#"><p>Basement Remodeling</p></a>
                  <a href="#"><p>Bathroom Remodeling</p></a>
                  <a href="#"><p>Deck & Patio</p></a>
                  <a href="#"><p>Exterior Renovation</p></a>
                  <a href="#"><p>Home Addition</p></a>
                  <a href="#"><p>Home Remodeling</p></a>
                  <a href="#"><p>Interior Renovation</p></a>
                  <a href="#"><p>Kitchen Remodeling</p></a>
                  <a href="#"><p>Cad Service</p></a>
                  <a href="#"><p>Our Prices Roadmap</p></a>
                </div>
            </div>
            <div class="dropdown">
                <span>Areas</span>
                <div class="dropdown-content">
                  <a href="#"><p>Roxbury, NJ</p></a>
                  <a href="#"><p>Warren, NJ</p></a>
                  <a href="#"><p>Westfield, NJ</p></a>
                  <a href="#"><p>Chester, NJ</p></a>
                </div>
            </div>
            <div class="dropdown">
                <span>Projects</span>
            </div>
            <div class="dropdown">
                <span>Reviews</span>
            </div>
            <div class="dropdown">
                <span>Contact Us</span>
            </div>
             <div class="dropdown">
                <span>Free Estimates</span>
            </div>
        </nav>
    `;
}

createNav();

const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
        <div class="row">
            <div class="col-4">
                <h1>Somnium <br>Home</h1>
            </div>
            <div class="col-4">
                <h3>QUICK LINKS</h3>
                <a href="#"><p>Home</p></a>
                <a href="#"><p>About Us</p></a>
                <a href="#"><p>Reviews</p></a>
                <a href="#"><p>Contact</p></a>
            </div>
            <div class="col-4">
                <h3>OUR SERVICES</h3>
                <a href="#"><p>Basement Remodeling</p></a>
                <a href="#"><p>Bathroom Remodeling</p></a>
                <a href="#"><p>Home Remodeling</p></a>
                <a href="#"><p>Home Addition</p></a>
            </div>
            <div class="col-4">
                <h3>CONTACT</h3>
                <a href="#"><p>📞 862.223.0358</p></a>
                <a href="#"><p>✉️ somnium_home@icloud.com</p></a>
                <a href="#"><p>📍 Roxbury Township, NJ</p></a>
            </div>
        </div>
    `;
}

createFooter();