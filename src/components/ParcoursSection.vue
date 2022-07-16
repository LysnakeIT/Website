<script>
export default {
	data: () => {
		return {
			title: ' Mon parcours scolaire / professionel',
            parcoursType: "etudes",
            parcoursActiveEtude: "parcours__active",
            parcoursActiveProfessionnel: "",
		};
	},
    methods: {
		changeParcours(id) {
            if (id === 1) {
                this.parcoursType = "professionel";
                this.parcoursActiveEtude = "";
                this.parcoursActiveProfessionnel = "parcours__active";
                console.log("parcours professionel");
            } else {
                this.parcoursType = "etudes";
                this.parcoursActiveEtude = "parcours__active";
                this.parcoursActiveProfessionnel = "";
                console.log("parcours etudes");
            }
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
                <div class="dark:text-ternary-light parcours__button button--flex" :class="parcoursActiveEtude" @click="changeParcours(0)">
                    <i class="uil uil-graduation-cap qualification__icon"></i>
                    Études
                </div>

                <div class="dark:text-ternary-light parcours__button button--flex" :class="parcoursActiveProfessionnel" @click="changeParcours(1)">
                    <i class="uil uil-briefcase-alt qualification__icon"></i>
                    Professionnels
                </div>
            </div>

            <div class="parcours__sections">
                <div :class="parcoursActiveEtude" v-show="parcoursType === 'etudes'">
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

                <div :class="parcoursActiveProfessionnel" v-show="parcoursType === 'professionel'">
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

<style>
.parcours {
	margin-top: 10%;
	margin-bottom: 5%;
}

.parcours [data-content]{
    display: none;
}

.parcours__tabs{
    display: flex;
	justify-content: center;
	margin-bottom: 2rem;;
}

.parcours__button{
    font-size: 1.686rem;
    font-weight: 500;
    cursor: pointer;
	margin: 0 1rem;
}

.parcours__button:hover{
    color: hsl(336, 88%, 45%) !important;
}

.parcours__button.parcours__active{
    color: hsl(336, 88%, 45%) !important;
}

.parcours__active[data-content]{
    display: block;
	margin: 0;
}

.parcours__icon{
    font-size: 1.8rem;
    margin-right: .25rem;
}

.parcours__sections{
	display: grid;
    justify-content: center;
}

.parcours__data{
    display: grid;
    grid-template-columns: 1fr max-content 1fr;
    column-gap: 1.5rem;
	text-align: initial;
}

.parcours__title{
	font-size: 1.5rem;
    font-weight: 500;
}

.parcours__subtitle{
    display: inline-block;
    font-size: 1rem;
    margin-bottom: .55rem;
}

.parcours__calendar{
	font-family: 'Nunito', sans-serif;
    font-size: .80rem;
    color: hsl(250, 8%, 65%);
}

.parcours__rounder{
    display: inline-block;
    width: 13px;
    height: 13px;
    background-color: hsl(336, 88%, 45%);
    border-radius: 50%;
}

.parcours__line{
    display: block;
    width: 1px;
    height: 100%;
    background-color: hsl(336, 88%, 45%);
    transform: translate(6px, -7px);
}

@media (max-width: 290px) {
	.parcours__title{
		font-size: 0.80rem;
		font-weight: 500;
	}
	
	.parcours__subtitle{
		display: inline-block;
		font-size: 0.65rem;
		margin-bottom: .55rem;
	}
	
	.parcours__calendar{
		font-family: 'Nunito', sans-serif;
		font-size: .55rem;
		color: hsl(250, 8%, 65%);
	}

	.parcours__button{
		font-size: 1rem;
		font-weight: 500;
		cursor: pointer;
		margin: 0 1rem;
	}

	.link-hover {
		font-size: 0.85rem;
	}
}

@media screen and (min-width: 300px) and (max-width: 767px){
	.parcours__title{
		font-size: 1rem;
		font-weight: 500;
	}
	
	.parcours__subtitle{
		display: inline-block;
		font-size: 0.85rem;
		margin-bottom: .55rem;
	}
	
	.parcours__calendar{
		font-family: 'Nunito', sans-serif;
		font-size: .65rem;
		color: hsl(250, 8%, 65%);
	}
}
</style>
