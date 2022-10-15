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
            } else {
                this.parcoursType = "etudes";
                this.parcoursActiveEtude = "parcours__active";
                this.parcoursActiveProfessionnel = "";
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
                    <svg width="1em" xmlns="http://www.w3.org/2000/svg" class="ui-svg-inline" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M21.49,10.19l-1-.55h0l-9-5-.11,0a1.06,1.06,0,0,0-.19-.06l-.19,0-.18,0a1.17,1.17,0,0,0-.2.06l-.11,0-9,5a1,1,0,0,0,0,1.74L4,12.76V17.5a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V12.76l2-1.12V14.5a1,1,0,0,0,2,0V11.06A1,1,0,0,0,21.49,10.19ZM16,17.5a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V13.87l4.51,2.5.15.06.09,0a1,1,0,0,0,.25,0h0a1,1,0,0,0,.25,0l.09,0a.47.47,0,0,0,.15-.06L16,13.87Zm-5-3.14L4.06,10.5,11,6.64l6.94,3.86Z"/>
                    </svg>
                    Études
                </div>

                <div class="dark:text-ternary-light parcours__button button--flex" :class="parcoursActiveProfessionnel" @click="changeParcours(1)">
                    <svg width="1em" xmlns="http://www.w3.org/2000/svg" class="ui-svg-inline" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19,6.5H16v-1a3,3,0,0,0-3-3H11a3,3,0,0,0-3,3v1H5a3,3,0,0,0-3,3v9a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3v-9A3,3,0,0,0,19,6.5Zm-9-1a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1v1H10Zm10,13a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V13a21.27,21.27,0,0,0,3,.94v.59a1,1,0,0,0,2,0v-.21a23,23,0,0,0,3,.21,23,23,0,0,0,3-.21v.21a1,1,0,0,0,2,0v-.59A21.27,21.27,0,0,0,20,13Zm0-7.69a20.39,20.39,0,0,1-3,1V11.5a1,1,0,0,0-2,0v.74a20.11,20.11,0,0,1-6,0V11.5a1,1,0,0,0-2,0v.33a20.39,20.39,0,0,1-3-1V9.5a1,1,0,0,1,1-1H19a1,1,0,0,1,1,1Z"/>
                    </svg>
                    Professionnels
                </div>
            </div>

            <div class="parcours__sections">
                <div :class="parcoursActiveEtude" v-show="parcoursType === 'etudes'">
                    <div class="parcours__data">
                        <div>
                            <h3 class="dark:text-ternary-light parcours__title">Diplôme d'ingénieur en cybersécurité et IoT</h3>
                            <span class="dark:text-ternary-light parcours__subtitle">ESAIP</span>
                            <div class="parcours__calendar">
                                <svg width="1em" xmlns="http://www.w3.org/2000/svg" class="ui-svg-inline" fill="currentColor" data-name="Layer 1" viewBox="0 0 24 24">
                                    <path d="M12,19a1,1,0,1,0-1-1A1,1,0,0,0,12,19Zm5,0a1,1,0,1,0-1-1A1,1,0,0,0,17,19Zm0-4a1,1,0,1,0-1-1A1,1,0,0,0,17,15Zm-5,0a1,1,0,1,0-1-1A1,1,0,0,0,12,15ZM19,3H18V2a1,1,0,0,0-2,0V3H8V2A1,1,0,0,0,6,2V3H5A3,3,0,0,0,2,6V20a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V6A3,3,0,0,0,19,3Zm1,17a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V11H20ZM20,9H4V6A1,1,0,0,1,5,5H6V6A1,1,0,0,0,8,6V5h8V6a1,1,0,0,0,2,0V5h1a1,1,0,0,1,1,1ZM7,15a1,1,0,1,0-1-1A1,1,0,0,0,7,15Zm0,4a1,1,0,1,0-1-1A1,1,0,0,0,7,19Z"/>
                                </svg>
                                Septembre, 2022 - Septembre, 2025
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
                            <h3 class="dark:text-ternary-light parcours__title">D.U.T INFORMATIQUE</h3>
                            <span class="dark:text-ternary-light parcours__subtitle">IUT de Vannes</span>
                            <div class="parcours__calendar">
                                <svg width="1em" xmlns="http://www.w3.org/2000/svg" class="ui-svg-inline" fill="currentColor" data-name="Layer 1" viewBox="0 0 24 24">
                                    <path d="M12,19a1,1,0,1,0-1-1A1,1,0,0,0,12,19Zm5,0a1,1,0,1,0-1-1A1,1,0,0,0,17,19Zm0-4a1,1,0,1,0-1-1A1,1,0,0,0,17,15Zm-5,0a1,1,0,1,0-1-1A1,1,0,0,0,12,15ZM19,3H18V2a1,1,0,0,0-2,0V3H8V2A1,1,0,0,0,6,2V3H5A3,3,0,0,0,2,6V20a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V6A3,3,0,0,0,19,3Zm1,17a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V11H20ZM20,9H4V6A1,1,0,0,1,5,5H6V6A1,1,0,0,0,8,6V5h8V6a1,1,0,0,0,2,0V5h1a1,1,0,0,1,1,1ZM7,15a1,1,0,1,0-1-1A1,1,0,0,0,7,15Zm0,4a1,1,0,1,0-1-1A1,1,0,0,0,7,19Z"/>
                                </svg>
                                Septembre, 2020 - Juin, 2022
                            </div>
                        </div>
                    </div>

                    <div class="parcours__data">
                        <div>
                            <h3 class="dark:text-ternary-light parcours__title">Baccalauréat STI2D SIN</h3>
                            <span class="dark:text-ternary-light parcours__subtitle">Lycée les Iris</span>
                            <div class="parcours__calendar">
                                <svg width="1em" xmlns="http://www.w3.org/2000/svg" class="ui-svg-inline" fill="currentColor" data-name="Layer 1" viewBox="0 0 24 24">
                                    <path d="M12,19a1,1,0,1,0-1-1A1,1,0,0,0,12,19Zm5,0a1,1,0,1,0-1-1A1,1,0,0,0,17,19Zm0-4a1,1,0,1,0-1-1A1,1,0,0,0,17,15Zm-5,0a1,1,0,1,0-1-1A1,1,0,0,0,12,15ZM19,3H18V2a1,1,0,0,0-2,0V3H8V2A1,1,0,0,0,6,2V3H5A3,3,0,0,0,2,6V20a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V6A3,3,0,0,0,19,3Zm1,17a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V11H20ZM20,9H4V6A1,1,0,0,1,5,5H6V6A1,1,0,0,0,8,6V5h8V6a1,1,0,0,0,2,0V5h1a1,1,0,0,1,1,1ZM7,15a1,1,0,1,0-1-1A1,1,0,0,0,7,15Zm0,4a1,1,0,1,0-1-1A1,1,0,0,0,7,19Z"/>
                                </svg>
                                Septembre, 2017 - Juin, 2020
                            </div>
                        </div>
                        <div>
                            <span class="parcours__rounder"></span>
                        </div>
                    </div>
                </div>

                <div :class="parcoursActiveProfessionnel" v-show="parcoursType === 'professionel'">
                    <div class="parcours__data">
                        <div>
                            <h3 class="dark:text-ternary-light parcours__title">Apprenti Digital Compliance & Cybersécurité</h3>
                            <span class="dark:text-ternary-light parcours__subtitle">
                                <p style="margin : 0 !important;">SANOFI</p>
                            </span>
                            <div class="parcours__calendar">
                                <svg width="1em" xmlns="http://www.w3.org/2000/svg" class="ui-svg-inline" fill="currentColor" data-name="Layer 1" viewBox="0 0 24 24">
                                    <path d="M12,19a1,1,0,1,0-1-1A1,1,0,0,0,12,19Zm5,0a1,1,0,1,0-1-1A1,1,0,0,0,17,19Zm0-4a1,1,0,1,0-1-1A1,1,0,0,0,17,15Zm-5,0a1,1,0,1,0-1-1A1,1,0,0,0,12,15ZM19,3H18V2a1,1,0,0,0-2,0V3H8V2A1,1,0,0,0,6,2V3H5A3,3,0,0,0,2,6V20a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V6A3,3,0,0,0,19,3Zm1,17a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V11H20ZM20,9H4V6A1,1,0,0,1,5,5H6V6A1,1,0,0,0,8,6V5h8V6a1,1,0,0,0,2,0V5h1a1,1,0,0,1,1,1ZM7,15a1,1,0,1,0-1-1A1,1,0,0,0,7,15Zm0,4a1,1,0,1,0-1-1A1,1,0,0,0,7,19Z"/>
                                </svg>
                                Septembre, 2022 - En cours
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
                            <h3 class="dark:text-ternary-light parcours__title">Développeur Front-End</h3>
                            <span class="dark:text-ternary-light parcours__subtitle">
                                <p style="margin : 0 !important;">TAC ECONOMICS</p>
                            </span>
                            <div class="parcours__calendar">
                                <svg width="1em" xmlns="http://www.w3.org/2000/svg" class="ui-svg-inline" fill="currentColor" data-name="Layer 1" viewBox="0 0 24 24">
                                    <path d="M12,19a1,1,0,1,0-1-1A1,1,0,0,0,12,19Zm5,0a1,1,0,1,0-1-1A1,1,0,0,0,17,19Zm0-4a1,1,0,1,0-1-1A1,1,0,0,0,17,15Zm-5,0a1,1,0,1,0-1-1A1,1,0,0,0,12,15ZM19,3H18V2a1,1,0,0,0-2,0V3H8V2A1,1,0,0,0,6,2V3H5A3,3,0,0,0,2,6V20a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V6A3,3,0,0,0,19,3Zm1,17a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V11H20ZM20,9H4V6A1,1,0,0,1,5,5H6V6A1,1,0,0,0,8,6V5h8V6a1,1,0,0,0,2,0V5h1a1,1,0,0,1,1,1ZM7,15a1,1,0,1,0-1-1A1,1,0,0,0,7,15Zm0,4a1,1,0,1,0-1-1A1,1,0,0,0,7,19Z"/>
                                </svg>
                                Avril, 2022 - Juin, 2022
                            </div>
                        </div>
                    </div>

                    <div class="parcours__data">
                        <div>
                            <h3 class="dark:text-ternary-light parcours__title">Agent de fabrication</h3>
                            <span class="dark:text-ternary-light parcours__subtitle">
                                <p style="margin : 0 !important;">SIKA</p>
                            </span>
                            <div class="parcours__calendar">
                                <svg width="1em" xmlns="http://www.w3.org/2000/svg" class="ui-svg-inline" fill="currentColor" data-name="Layer 1" viewBox="0 0 24 24">
                                    <path d="M12,19a1,1,0,1,0-1-1A1,1,0,0,0,12,19Zm5,0a1,1,0,1,0-1-1A1,1,0,0,0,17,19Zm0-4a1,1,0,1,0-1-1A1,1,0,0,0,17,15Zm-5,0a1,1,0,1,0-1-1A1,1,0,0,0,12,15ZM19,3H18V2a1,1,0,0,0-2,0V3H8V2A1,1,0,0,0,6,2V3H5A3,3,0,0,0,2,6V20a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V6A3,3,0,0,0,19,3Zm1,17a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V11H20ZM20,9H4V6A1,1,0,0,1,5,5H6V6A1,1,0,0,0,8,6V5h8V6a1,1,0,0,0,2,0V5h1a1,1,0,0,1,1,1ZM7,15a1,1,0,1,0-1-1A1,1,0,0,0,7,15Zm0,4a1,1,0,1,0-1-1A1,1,0,0,0,7,19Z"/>
                                </svg>
                               Juillet, 2021 - Juillet, 2021
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
                            <h3 class="dark:text-ternary-light parcours__title">ASTEP</h3>
                            <span class="dark:text-ternary-light parcours__subtitle">
                                <p style="margin : 0 !important;">Ecole de Sené</p>
                            </span>
                            <div class="parcours__calendar">
                                <svg width="1em" xmlns="http://www.w3.org/2000/svg" class="ui-svg-inline" fill="currentColor" data-name="Layer 1" viewBox="0 0 24 24">
                                    <path d="M12,19a1,1,0,1,0-1-1A1,1,0,0,0,12,19Zm5,0a1,1,0,1,0-1-1A1,1,0,0,0,17,19Zm0-4a1,1,0,1,0-1-1A1,1,0,0,0,17,15Zm-5,0a1,1,0,1,0-1-1A1,1,0,0,0,12,15ZM19,3H18V2a1,1,0,0,0-2,0V3H8V2A1,1,0,0,0,6,2V3H5A3,3,0,0,0,2,6V20a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V6A3,3,0,0,0,19,3Zm1,17a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V11H20ZM20,9H4V6A1,1,0,0,1,5,5H6V6A1,1,0,0,0,8,6V5h8V6a1,1,0,0,0,2,0V5h1a1,1,0,0,1,1,1ZM7,15a1,1,0,1,0-1-1A1,1,0,0,0,7,15Zm0,4a1,1,0,1,0-1-1A1,1,0,0,0,7,19Z"/>
                                </svg>
                                Février, 2021 - Avril, 2021
                            </div>
                        </div>
                    </div>

                    <div class="parcours__data">
                        <div>
                            <h3 class="dark:text-ternary-light parcours__title">Stage développement web 3ème</h3>
                            <span class="dark:text-ternary-light parcours__subtitle">
                                <p style="margin : 0 !important;">Dotsafe</p>
                            </span>
                            <div class="parcours__calendar">
                                <svg width="1em" xmlns="http://www.w3.org/2000/svg" class="ui-svg-inline" fill="currentColor" data-name="Layer 1" viewBox="0 0 24 24">
                                    <path d="M12,19a1,1,0,1,0-1-1A1,1,0,0,0,12,19Zm5,0a1,1,0,1,0-1-1A1,1,0,0,0,17,19Zm0-4a1,1,0,1,0-1-1A1,1,0,0,0,17,15Zm-5,0a1,1,0,1,0-1-1A1,1,0,0,0,12,15ZM19,3H18V2a1,1,0,0,0-2,0V3H8V2A1,1,0,0,0,6,2V3H5A3,3,0,0,0,2,6V20a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V6A3,3,0,0,0,19,3Zm1,17a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V11H20ZM20,9H4V6A1,1,0,0,1,5,5H6V6A1,1,0,0,0,8,6V5h8V6a1,1,0,0,0,2,0V5h1a1,1,0,0,1,1,1ZM7,15a1,1,0,1,0-1-1A1,1,0,0,0,7,15Zm0,4a1,1,0,1,0-1-1A1,1,0,0,0,7,19Z"/>
                                </svg>
                                Janvier, 2017 - Janvier, 2017
                            </div>
                        </div>
                        <div>
                            <span class="parcours__rounder"></span>
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

.ui-svg-inline {
    display: inline-block;
    font-size: inherit;
    overflow: visible;
    vertical-align: -0.125em;
    font-style: normal;
    font-weight: 400;
    text-decoration: inherit;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
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
