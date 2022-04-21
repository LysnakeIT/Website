<script>
export default {
	data: () => {
		return {
			title: ' Mon parcours scolaire / professionel',
		};
	},
    methods: {
		changeParcours() {
			const tabs = document.querySelectorAll('[data-target]'),
			tabContents = document.querySelectorAll('[data-content]')

			tabs.forEach(tab =>{
				tab.addEventListener('click', ()=>{
					const target = document.querySelector(tab.dataset.target);

					tabContents.forEach(tabContent =>{
						tabContent.classList.remove('parcours__active');
					});

					target.classList.add('parcours__active');

					tabs.forEach(tab =>{
						tab.classList.remove('parcours__active');
					})
					tab.classList.add('parcours__active');
				})
			})
		}
	}
};
</script>

<template>
	<section class="parcours">
        <p class="font-general-semibold text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light ">{{ title }}</p>
        <br>
        <br>
        <br>

        <div class="qualification__container">
            <div class="parcours__tabs">
                <div class="dark:text-ternary-light parcours__button button--flex parcours__active" @click="changeParcours()" data-target="#education">
                    <i class="uil uil-graduation-cap qualification__icon"></i>
                    Études
                </div>

                <div class="dark:text-ternary-light parcours__button button--flex" @click="changeParcours()" data-target="#work">
                    <i class="uil uil-briefcase-alt qualification__icon"></i>
                    Professionnels
                </div>
            </div>

            <div class="parcours__sections">
                <div class="parcours__active" data-content id="education">
                    <div class="parcours__data">
                        <div>
                            <h3 class="dark:text-ternary-light parcours__title">D.U.T INFORMATIQUE</h3>
                            <span class="dark:text-ternary-light parcours__subtitle">IUT de Vannes</span>
                            <div class="parcours__calendar">
                                <i class="uil uil-calendar-alt"></i>
                                Septembre, 2020 - Juin, 2022
                            </div>
                        </div>

                        <div>
                            <span class="parcours__rounder"></span>
                            <span class="parcours__line"></span>
                        </div>
                    </div>

                    <div class="parcours__data">
                        <div></div>
                        <div>
                            <span class="parcours__rounder"></span>
                        </div>

                        <div>
                            <h3 class="dark:text-ternary-light parcours__title">Baccalauréat STI2D SIN</h3>
                            <span class="dark:text-ternary-light parcours__subtitle">Lycée les Iris</span>
                            <div class="parcours__calendar">
                                <i class="uil uil-calendar-alt"></i>
                                Septembre, 2017 - Juin, 2020
                            </div>
                        </div>
                    </div>
                </div>

                <div data-content id="work">
                    <div class="parcours__data">
                        <div>
                            <h3 class="dark:text-ternary-light parcours__title">Développeur front</h3>
                            <span class="dark:text-ternary-light parcours__subtitle">
                                <a target="_blank">TAC ECONOMICS</a>
                            </span>
                            <div class="parcours__calendar">
                                <i class="uil uil-calendar-alt"></i>
                                Avril, 2022 - Juin, 2022
                            </div>
                        </div>
                        <div>
                            <span class="parcours__rounder"></span>
                            <span class="parcours__line"></span>
                        </div>
                    </div>

                    <div class="parcours__data">
                        <div></div>
                        <div>
                            <span class="parcours__rounder"></span>
                            <span class="parcours__line"></span>
                        </div>
                        <div>
                            <h3 class="dark:text-ternary-light parcours__title">Agent de fabrication</h3>
                            <span class="dark:text-ternary-light parcours__subtitle">
                                <a target="_blank">SIKA</a>
                            </span>
                            <div class="parcours__calendar">
                                <i class="uil uil-calendar-alt"></i>
                                Juillet, 2021 - Juillet, 2021
                            </div>
                        </div>
                    </div>

                    <div class="parcours__data">
                        <div>
                            <h3 class="dark:text-ternary-light parcours__title">ASTEP</h3>
                            <span class="dark:text-ternary-light parcours__subtitle">
                                <a target="_blank">Ecole de Sené</a>
                            </span>
                            <div class="parcours__calendar">
                                <i class="uil uil-calendar-alt"></i>
                                Février, 2021 - Avril, 2021
                            </div>
                        </div>
                        <div>
                            <span class="parcours__rounder"></span>
                            <span class="parcours__line"></span>
                        </div>
                    </div>

                    <div class="parcours__data">
                        <div></div>
                        <div>
                            <span class="parcours__rounder"></span>
                        </div>
                        <div>
                            <h3 class="dark:text-ternary-light parcours__title">Stage développement web 3ème</h3>
                            <span class="dark:text-ternary-light parcours__subtitle">
                                <a target="_blank">Dotsafe</a>
                            </span>
                            <div class="parcours__calendar">
                                <i class="uil uil-calendar-alt"></i>
                                Janvier, 2017 - Janvier, 2017
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>
