<template>
  <section id="parcours" class="parcours">
    <div class="parcours-section">
      <div class="section-title">
        <h2 class="font-general-semibold text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light">parcours</h2>
      </div>
      <div class="row">
        <div class="col-lg-6">
          <h3 class="parcours-title dark:text-ternary-light">Education</h3>
          <div class="parcours-item text-gray-400">
            <h4>Cybersecurity Engineering Diploma</h4>
            <h5>2022 - Present</h5>
            <p><em>ESAIP engineering school, Angers, FR</em></p>
          </div>
          <div class="parcours-item text-gray-400">
            <h4>Technical University degree, Computer science</h4>
            <h5>2020 - 2022</h5>
            <p><em>University Institute of Technology, Vannes, FR</em></p>
          </div>
          <div class="parcours-item text-gray-400">
            <h4>STI2D SIN baccalaureate diploma</h4>
            <h5>2018 - 2020</h5>
            <p><em>Lycée les Iris, Bordeaux, FR</em></p>
          </div>
        </div>
        <div class="col-lg-6">
          <h3 class="parcours-title dark:text-ternary-light">Professional Experience</h3>
          <div class="parcours-item text-gray-400">
            <h4>Digital Compliance & Cybersecurity apprentice</h4>
            <h5>2022 - Present</h5>
            <p><em>Sanofi Pasteur, Rouen, FR </em></p>
            <ul>
              <li>Applying the Group's cybersecurity and compliance strategies</li>
              <li>Contributing to security and network-related projects.</li>
            </ul>
          </div>
          <div class="parcours-item text-gray-400">
            <h4>ITS Cybersecurity Internship</h4>
            <h5>2023</h5>
            <p><em>Sanofi Genzyme, Waterford, IE</em></p>
          </div>
          <div class="parcours-item text-gray-400">
            <h4>Web developer</h4>
            <h5>2022</h5>
            <p><em>TAC Economics, Rennes, FR</em></p>
            <ul>
              <li>Implementation of an authentication and subscription system</li>
              <li>Development of the web interface for the web application</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

.section-title h2 {
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 20px;
  padding-bottom: 20px;
  position: relative;
}

.section-title h2::before {
  content: "";
  position: absolute;
  display: block;
  width: 120px;
  height: 1px;
  background: #ddd;
  bottom: 1px;
  left: calc(50% - 60px);
}

.section-title h2::after {
  content: "";
  position: absolute;
  display: block;
  width: 40px;
  height: 3px;
  background: hsl(336, 88%, 45%);
  bottom: 0;
  left: calc(50% - 20px);
}

.section-title p {
  margin-bottom: 0;
}

.parcours-section  {
    width: 80%;
    padding-right: calc(1.5rem * .5);
    padding-left: calc(1.5rem * .5);
    margin-right: auto;
    margin-left: auto;
}

.row {
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    display: flex;
    flex-wrap: wrap;
    margin-top: calc(-1 * var(--bs-gutter-y));
    margin-right: calc(-.5 * var(--bs-gutter-x));
    margin-left: calc(-.5 * var(--bs-gutter-x));
}

@media (min-width: 992px) {
.col-lg-6 {
    flex: 0 0 auto;
    width: 50%;
}}

@media (max-width: 1200px) {
.parcours-section  {
    max-width: 1140px;
}}

@media (max-width: 992px){
.parcours-section  {
    max-width: 960px;
}}

@media (max-width: 768px){
.parcours-section {
    max-width: 720px;
}}

@media (max-width: 576px) {
.parcours-section {
    max-width: 540px;
}}

.parcours .parcours-title {
  font-size: 26px;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #45505b;
}

.parcours .parcours-item {
  padding: 0 0 20px 20px;
  margin-top: -2px;
  border-left: 2px solid hsl(336, 88%, 45%);
  position: relative;
}

.parcours .parcours-item h4 {
  line-height: 18px;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  font-family: "Poppins", sans-serif;
  color: hsl(336, 88%, 45%);
  margin-bottom: 10px;
}

.parcours .parcours-item h5 {
  font-size: 16px;
  color: hsl(336, 88%, 45%);
  padding: 5px 15px;
  display: inline-block;
  font-weight: 600;
  margin-bottom: 10px;
}

.parcours .parcours-item ul {
  padding-left: 20px;
}

.parcours .parcours-item:last-child {
  padding-bottom: 0;
}

.parcours .parcours-item::before {
  content: "";
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50px;
  left: -9px;
  top: 0;
  background: #fff;
  border: 2px solid hsl(336, 88%, 45%);
}
</style>