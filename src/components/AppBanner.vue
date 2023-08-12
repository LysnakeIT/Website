<script>
import feather from 'feather-icons';

export default {
	name: 'Home',
	data: () => {
		return {
			theme: '',
		};
	},
	created() {
		this.theme = localStorage.getItem('theme') || 'light';
	},
	mounted() {
		feather.replace();
		this.theme = localStorage.getItem('theme') || 'light';
	},
	updated() {
		feather.replace();
	},
};
</script>

<template>
    <section class="Banner flex flex-col sm:justify-between items-center sm:flex-row mt-12 sm:mt-10 mb-5 sm:mb-8" id="Banner">
        <div class="Banner-contenu">
            <h1 class="dark:text-ternary-light">Hi ! I'm <span style="color: hsl(336, 88%, 45%)">Lysnake</span><img src="@/assets/images/hi.gif" width="40px" height="40px" style="display: initial; vertical-align: initial;" alt="Gif salut"/></h1>
            <p class="text-gray-400">
                I'm a fourth-year engineering student in the 
                field of cyber security.<br>
            </p>

            <div class="flex justify-center sm:block">
				<a download="developer.pdf"
					href="/files/developer.pdf"
					class="flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-purple-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-purple-50 focus:ring-1 focus:ring-purple-900 hover:bg-purple-500 text-gray-500 hover:text-white duration-500"
					style="background-color: hsl(336, 88%, 45%); color: #FFF;"
					aria-label="Download CV">
                    <svg width="1em" xmlns="http://www.w3.org/2000/svg" class="button__icon ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100" fill="currentColor" data-name="Layer 1" viewBox="0 0 24 24">
						<path d="M8.29,13.29a1,1,0,0,0,0,1.42l3,3a1,1,0,0,0,1.42,0l3-3a1,1,0,0,0-1.42-1.42L13,14.59V3a1,1,0,0,0-2,0V14.59l-1.29-1.3A1,1,0,0,0,8.29,13.29ZM18,9H16a1,1,0,0,0,0,2h2a1,1,0,0,1,1,1v7a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H8A1,1,0,0,0,8,9H6a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V12A3,3,0,0,0,18,9Z"/>
					</svg>
					<span class="text-sm sm:text-lg font-general-medium duration-100" style="filter: contrast(1.75);">Download CV</span>
				</a>
			</div>
        </div>

        <div style="padding-bottom: 15%;">
            <div class="w-full md:w-2/3 text-right float-right">
                <div class="Banner-image box">
                    <img src="@/assets/images/developer.webp" alt="Developer" rel="preload" width="390px" height="390px" style="display:block; margin-left: auto; margin-right: auto; border-radius: .5rem; justify-self: center; align-self: center; width: 390px">
                </div>
            </div>
        </div>

        <div class="Banner-social">
            <a href="https://www.root-me.org/Lysnake" target="_blank"><i class='bx bxl-tux'></i></a>
            <a href="https://github.com/LysnakeIT" target="_blank"><i class='bx bxl-github'></i></a>
            <a href="https://discord.com/users/337210490453229579" target="_blank"><i class='bx bxl-discord'></i></a>
        </div>

    </section>
</template>

<style scoped>

.Banner {
    display: flex;
    align-items: center;
    padding: 5% 9%;
}

.Banner-contenu {
    width: 100%;
    margin-right: 5%;
    padding-bottom: 20%;
}

.Banner-contenu h1 {
    font-size: 56px;
    font-weight: 700;
}

.Banner-contenu h1 span {
    color: #ededed;
}

.Banner-contenu p {
    font-size: 23px;
    margin: 2rem 0 3rem;
}

.Banner-image img {
    width: 380px;
    height: 380px;
    border-radius: 8px;
    z-index: 1;
}

.Banner-image {
    position: relative;
    display: flex;
    width: 400px;
    height: 390px;
    background: #101010;
    border-radius: 10px;
    z-index: -1;
    overflow: hidden;
}

.Banner-social {
    position: absolute;
    bottom: 4rem;
    width: 170px;
    display: flex;
    justify-content: space-between;
}

.Banner-social a {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background: transparent;
    border: .2rem solid hsl(336, 88%, 45%);
    border-radius: 50%;
    font-size: 20px;
    color: hsl(336, 88%, 45%);
    z-index: 1;
    overflow: hidden;
    transition: .5s;
}

.Banner-social a:hover {
    color: white;
}

.Banner-social a::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: hsl(336, 88%, 45%);
    z-index: -1;
    transition: .5s;
}

.Banner-social a:hover:before {
    width: 100%;
}

.box {
    width: 400px;
    height: 390px;
    background-color: rgb(31, 31, 31);
    position: relative;
}

.box::before,
.box::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(45deg, #ff0000, #00f0f0, #00ff00, #0000ff, #ff0000, #00f0f0, #00ff00, #0000ff, #f00f0f);
    width: 100%;
    height: 100%;
    transform: scale(1.02);
    z-index: -1;
    background-size: 500%;
    animation: animate 20s infinite;
}

.box::after {
    filter: blur(20px);
}

@keyframes animate {
    0% { background-position: 0 0; }
    50% { background-position: 300% 0; }
    100% { background-position: 0 0; }
}
</style>