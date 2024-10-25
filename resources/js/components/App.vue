<template>
    <div>
        <!-- Left Sidebar Navigation -->
        <nav class="w-full bg-gray-300 h-14 fixed left-0 top-0 flex items-center justify-center px-4 z-10">

            <!-- Burger ikona koja se prikazuje na mobilnim uređajima -->
            <div class="block w-full sm:hidden sticky">
                <button @click="toggleMenu" class="focus:outline-none">
                    <!-- Ikona burger menija -->
                    <div class="space-y-2">
                        <!-- Gornja linija -->
                        <span :class="{
                            'block w-8 h-1 bg-gray-800 transform transition-transform duration-300': true,
                            'rotate-45 translate-y-2.5': menuOpen, // Rotiraj i pomeri gornju liniju kad je meni otvoren
                        }"></span>
                        <!-- Srednja linija -->
                        <span :class="{
                            'block w-8 h-1 bg-gray-800 transition-opacity duration-300': true,
                            'opacity-0': menuOpen, // Sakrij srednju liniju kad je meni otvoren
                        }"></span>
                        <!-- Donja linija -->
                        <span :class="{
                            'block w-8 h-1 bg-gray-800 transform transition-transform duration-300': true,
                            '-rotate-45 -translate-y-3.5': menuOpen, // Rotiraj i pomeri donju liniju kad je meni otvoren
                        }"></span>
                    </div>
                </button>
            </div>

            <!-- Glavni navigacioni meni (sakriven na manjim ekranima) -->
            <div class="hidden sm:flex flex-row items-center justify-center space-x-4 sm:space-x-8 lg:space-x-40 xl:space-x-24">
                <div v-for="section in sections" :key="section.id" class="relative group"
                    @click="scrollToSection(section.id)">
                    <div class="bg-nav-icon p-3 rounded-full hover:bg-hover-nav cursor-pointer">
                        <font-awesome-icon :icon="section.icon" class="text-white text-lg" />
                    </div>
                    <!-- Tooltip za ime sekcije -->
                    <span
                        class="absolute left-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block">
                        {{ section.name }}
                    </span>
                </div>
                <!-- Zastave (prikazuju se na srednjim ekranima) -->
                <country-flag country="rs" size="big" class="hidden sm:block cursor-pointer"
                    @click="changeLanguage('sr')" />
                <country-flag country="gb" size="big" class="hidden sm:block cursor-pointer"
                    @click="changeLanguage('en')" />
            </div>

            <!-- Dropdown meni za mobilne uređaje -->
            <div v-if="menuOpen"class="absolute top-14 pl-5 left-0 w-full bg-gray-300 flex flex-col pb-5 items-start space-y-7 sm:hidden">
                <div v-for="section in sections" :key="section.id" class="flex items-center space-x-2" @click="scrollToSection(section.id); toggleMenu()">
                    <div class="bg-nav-icon p-3 rounded-full">
                        <font-awesome-icon :icon="section.icon" class="text-white text-lg" />
                    </div>
                    <span class="text-gray-800">{{ section.name }}</span>
                </div>
                <country-flag country="rs" size="normal" @click="changeLanguage('sr')" />
                <country-flag country="gb" size="normal" @click="changeLanguage('en')" />
            </div>
        </nav>

        <!-- Main Content Area -->
        <div class="w-full space-y-0.5">
            <!-- About Section -->
            <section id="section1" class="h-screen flex flex-col lg:flex-row items-center justify-center">
                <!-- Pozadinski kontejner -->
                <div class="home-container w-full lg:w-full h-screen -z-10 absolute opacity-40"></div>

                <!-- Slika (prilagodljiva na manjim ekranima) -->
                <div class="w-2/3 lg:w-1/3 2xl:w-1/3 mb-8 p-5 lg:mb-0 lg:pl-20">
                    <img src="/public/images/stat.jpg" alt="Profile"
                        class="w-full rounded-3xl shadow-2xl drop-shadow-2xl">
                </div>

                <!-- Tekst (prilagodljiv na manjim ekranima) -->
                <div
                    class="w-full lg:w-1/2 px-4 lg:px-10 lg:text-center text-center [text-shadow:_0_4px_4px_rgb(0_0_0_/_0.3)]">
                    <h1 class="text-4xl lg:text-6xl lg:text-black text-gray-600 font-bold typewriter">Dr Gordan
                        Gavrilović</h1>
                    <h2
                        class="text-lg tracking-tight lg:text-3xl lg:text-black text-gray-700 font-medium mt-4 pb-1 typewriter2">
                        {{ $t('specialty') }}
                    </h2>
                </div>
            </section>

            <section id="section2" class="h-screen flex flex-col justify-center items-center text-white">
                <!-- Pozadinski kontejner -->
                <div class="about-container w-full h-screen -z-10 absolute opacity-80"></div>

                <!-- Naslov sekcije -->
                <div class="text-2xl lg:text-3xl inline-flex items-center lg:mt-0 justify-center mb-5 lg:mb-20 h-9">
                    <font-awesome-icon icon="fa fa-info-circle" class="shadow-xl drop-shadow-lg" style="color: #fff;" />
                    <h3 class="ml-5 uppercase [text-shadow:_0_4px_4px_rgb(0_0_0_/_0.8)]">{{ $t('about_header') }}</h3>
                </div>

                <!-- Sadržaj sekcije (tekst i slika) -->
                <div class="w-full flex flex-col lg:flex-row items-center ">
                    <!-- Tekst (prilagodljiv na manjim ekranima) -->
                    <div class="w-full lg:w-1/2 px-3 lg:px-10 mb-4 lg:mb-0">
                        <p
                            class="font-semibold text-base lg:text-lg tracking-normal leading-5 lg:leading-2 lg:[text-shadow:_0_4px_4px_rgb(0_0_0_/_0.8)] [text-shadow:_0_4px_4px_rgb(0_0_0_/_0.5)]">
                            {{ $t('about_text') }}
                        </p>
                    </div>

                    <!-- Slika (prilagodljiva na manjim ekranima) -->
                    <div class="w-full lg:w-1/2 px-4 lg:px-0">
                        <img src="/public/images/maxresdefault.jpeg" alt="Operation"
                            class="w-fit lg:w-full xl:w-4/5 m-auto 2xl:w-4/5 lg:pr-0 rounded-lg pt-5 lg:pt-0 shadow-xl drop-shadow-xl">
                    </div>
                </div>
            </section>

            <section id="section3" class="h-screen flex flex-col lg:flex-row items-center justify-center text-white">
                <!-- Pozadinski kontejner -->
                <div class="education-container w-full h-screen -z-10 absolute opacity-80"></div>

                <!-- Slika -->
                <div class="w-fit lg:w-1/2 lg:mt-20 mt-0 px-4">
                    <img src="/public/images/gavrlivoci.png" alt="Profile"
                        class="w-fit lg:w-full lg:pt-0 m-auto rounded-lg shadow-lg">
                </div>

                <!-- Tekst -->
                <div class="w-full lg:w-2/5 px-3 text-center mt-5">
                    <!-- Naslov obrazovanja -->
                    <div
                        class="ml-5 text-lg lg:text-3xl w-full inline-flex items-center justify-start mb-2 lg:mb-5 h-9">
                        <font-awesome-icon icon="fa fa-book-open" class="shadow-xl drop-shadow-xl"
                            style="color: #fff;" />
                        <h3 class="ml-5 uppercase font-bold [text-shadow:_0_4px_4px_rgb(0_0_0_/_0.8)]">{{
                            $t('education_header') }}</h3>
                    </div>
                    <div
                        class="ml-7 font-semibold tracking-tight text-sm lg:text-lg text-left lg:[text-shadow:_0_4px_4px_rgb(0_0_0_/_0.8)] [text-shadow:_0_4px_4px_rgb(0_0_0_/_0.4)]">
                        <ul>
                            <li class="mb-3">{{ $t('education_text1') }}</li>
                            <li>{{ $t('education_text2') }}</li>
                        </ul>
                    </div>

                    <!-- Naslov radnog iskustva -->
                    <div
                        class="text-lg lg:text-3xl inline-flex items-center mb-2 lg:mb-5 mt-10 lg:mt-24 h-9 w-full justify-start ml-5">
                        <font-awesome-icon icon="fa fa-user-doctor" class="shadow-xl drop-shadow-xl"
                            style="color: #fff;" />
                        <h3 class="ml-5 uppercase font-bold [text-shadow:_0_4px_4px_rgb(0_0_0_/_0.8)]">{{
                            $t('work_ex_header') }}</h3>
                    </div>

                    <!-- Lista radnog iskustva -->
                    <div class="font-semibold tracking-normal text-xs lg:text-lg spacing">
                        <ul
                            class="text-left list-disc ml-12 lg:[text-shadow:_0_4px_4px_rgb(0_0_0_/_0.8)] [text-shadow:_0_4px_4px_rgb(0_0_0_/_0.4)]">
                            <li>{{ $t('work_ex_text') }}</li>
                            <li>{{ $t('work_ex_text2') }}</li>
                            <li>{{ $t('work_ex_text3') }}</li>
                            <li>{{ $t('work_ex_text4') }}</li>
                            <li>{{ $t('work_ex_text5') }}</li>
                            <li>{{ $t('work_ex_text6') }}</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="section4"
                class="h-screen flex flex-col lg:flex-row justify-center items-center text-white relative">
                <!-- Pozadinski kontejner -->
                <div class="interests-container w-full h-screen -z-10 absolute opacity-90"></div>

                <!-- Tekstualni deo -->
                <div class="w-full lg:w-1/2 px-10 whitespace-break-spaces lg:mt-0 flex flex-col justify-center">
                    <div class="text-lg lg:text-2xl inline-flex items-center justify-end mb-2 lg:mb-5 h-9 font-bold">
                        <font-awesome-icon icon="fa fa-stethoscope" class="shadow-xl drop-shadow-xl"
                            style="color: #fff;" />
                        <h3 class="ml-5 uppercase [text-shadow:_0_4px_4px_rgb(0_0_0_/_0.8)]">{{ $t('expertes_header') }}
                        </h3>
                    </div>
                    <div
                        class="text-right text-sm lg:text-lg font-semibold [text-shadow:_0_4px_4px_rgb(0_0_0_/_0.3)] lg:[text-shadow:_0_4px_4px_rgb(0_0_0_/_0.8)]">
                        <ul>
                            <li>{{ $t('expertes_text') }}</li>
                            <li>{{ $t('expertes_text2') }}</li>
                            <li>{{ $t('expertes_text3') }}</li>
                            <li>{{ $t('expertes_text4') }}</li>
                            <li>{{ $t('expertes_text5') }}</li>
                            <li>{{ $t('expertes_text6') }}</li>
                            <li>{{ $t('expertes_text7') }}</li>
                            <li>{{ $t('expertes_text8') }}</li>
                        </ul>
                    </div>

                    <div
                        class="text-lg lg:text-2xl inline-flex items-center justify-end mb-2 lg:mb-5 mt-10 h-9 font-bold">
                        <font-awesome-icon icon="fa fa-language" class="shadow-xl drop-shadow-xl"
                            style="color: #fff;" />
                        <h3 class="ml-5 uppercase [text-shadow:_0_4px_4px_rgb(0_0_0_/_0.8)]">{{ $t('lang_header') }}
                        </h3>
                    </div>
                    <div
                        class="text-right text-sm lg:text-lg font-semibold [text-shadow:_0_4px_4px_rgb(0_0_0_/_0.3)] lg:[text-shadow:_0_4px_4px_rgb(0_0_0_/_0.8)]">
                        <ul>
                            <li>{{ $t('lang_text') }}</li>
                            <li>{{ $t('lang_text2') }}</li>
                        </ul>
                    </div>
                </div>

                <!-- Slika -->
                <div class="w-full lg:w-1/2 px-4 lg:mr-12 mt-10 lg:mt-0">
                    <img src="/public/images/interests.jpg" alt="Interests"
                        class="lg:w-full w-fit lg:mr-0 m-auto rounded-lg shadow-xl drop-shadow-xl">
                </div>
            </section>

            <section id="section5" class="h-screen flex flex-col lg:flex-row justify-center items-center relative">
                <!-- Pozadinski kontejner -->
                <div class="statistic-container w-full h-screen -z-10 absolute opacity-90"></div>

                <!-- Slika -->
                <div class="w-full lg:w-1/2 flex justify-center px-4 lg:pl-16 mt-10 lg:mt-0">
                    <img src="/public/images/stat2.jpg" alt="Profile"
                        class="rounded-3xl w-52 lg:w-2/3 shadow-xl drop-shadow-xl">
                </div>

                <!-- Statistika -->
                <div
                    class="w-full lg:w-1/2 grid grid-cols-1 lg:grid-cols-3 gap-10 lg:text-2xl text-white [text-shadow:_0_4px_4px_rgb(0_0_0_/_0.8)] px-4 lg:mr-20 mt-10 lg:mt-0">
                    <div class="flex flex-col justify-center items-center text-center">
                        <Stethoscope class="mb-2 lg:mb-5" :size="iconSize" />
                        <div>
                            <h3 class="text-xl lg:text-4xl font-bold counter" ref="counter1" data-target="15000">0</h3>
                            <p class="text-xs lg:text-lg">{{ $t('statistic_op') }}</p>
                        </div>
                    </div>
                    <div class="flex flex-col justify-center items-center text-center">
                        <Patient class="mb-2 lg:mb-5 text-4xl" :size="iconSize" />
                        <div>
                            <h3 class="text-xl lg:text-4xl font-bold counter" ref="counter2" data-target="300000">0</h3>
                            <p class="text-xs lg:text-lg">{{ $t('statistic_pati') }}</p>
                        </div>
                    </div>
                    <div class="flex flex-col justify-center items-center text-center">
                        <Doctor class="mb-2 lg:mb-5 text-4xl" :size="iconSize" />
                        <div>
                            <h3 class="text-xl lg:text-4xl font-bold counter" ref="counter3" data-target="33">0</h3>
                            <p class="text-xs lg:text-lg">{{ $t('statistic_ex') }}</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Contact Section -->
            <section id="section6" class="h-screen flex justify-center items-center">
                <div class="contact-container w-full h-screen -z-10 absolute opacity-80"></div>
                <div class="flex flex-col lg:flex-row lg:items-center lg:w-full h-full mt-32 lg:mt-0">
                    <div
                        class="lg:w-1/4 w-60 lg:h-2/3 2xl:h-3/5 xl:h-3/5 mt-6 items-start p-5 mx-auto bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md">
                        <div>
                            <h1 class="text-gray-800 lg:text-3xl 2xl:text-4xl font-extrabold">{{ $t('contact') }} <br> <span class="text-lg lg:text-3xl 2xl:text-xl underline"> {{ $t('contacnt_text') }} </span></h1>

                            <div class="lg:mt-12">
                                <ul class="mt-4 lg:space-y-20 2xl:lg:space-y-20 space-y-5">
                                    <li class="flex items-center">
                                        <div
                                            class="bg-[#e6e6e6cf] lg:h-10 lg:w-10 2xl:h-12 2xl:w-12 w-6 h-6 rounded-full flex items-center justify-center shrink-0">
                                            <Envelope fillColor="#f68846" :size="iconSize2" />
                                        </div>
                                        <a href="mailto:info@bolnicaavala.rs"
                                            class="text-[#F37246] lg:text-sm 2xl:text-xl text-xs ml-4">
                                            <small class="block font-semibold">Mail</small>
                                            <strong>info@bolnicaavala.rs</strong>
                                        </a>
                                    </li>
                                    <li class="flex items-center mt-5 lg:mt-12">
                                        <div
                                            class="bg-[#e6e6e6cf] lg:h-10 lg:w-10 2xl:h-12 2xl:w-12 w-6 h-6 rounded-full flex items-center justify-center shrink-0">
                                            <Phone fillColor="#f68846" :size="iconSize2" />
                                        </div>
                                        <a href="tel:+381 11 777 38 00"
                                            class="text-[#F37246] lg:text-sm 2xl:text-xl text-xs ml-4">
                                            <small class="block font-semibold">{{ $t('phone') }}</small>
                                            <strong>+381 11 777 38 00</strong>
                                        </a>
                                    </li>
                                    <li class="flex items-center mt-5 lg:mt-12">
                                        <div
                                            class="bg-[#e6e6e6cf] lg:h-10 lg:w-10 2xl:h-12 2xl:w-12 w-6 h-6 rounded-full flex items-center justify-center shrink-0">
                                            <CellPhone fillColor="#f68846" :size="iconSize2" />
                                        </div>
                                        <a href="tel:+381 66 839 00 39"
                                            class="text-[#F37246] lg:text-sm 2xl:text-xl text-xs ml-4">
                                            <small class="block font-semibold">{{ $t('cell') }}</small>
                                            <strong>+381 66 839 00 39</strong>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div
                        class="lg:w-1/3 w-60 h-2/4 lg:h-2/3 2xl:h-3/5 xl:h-3/5 mt-5 items-start p-5 mx-auto bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md">
                        <h1 class="text-gray-800 lg:mb-10 mb-5 lg:text-3xl font-extrabold">{{ $t('send_message') }}</h1>
                        <div class="ml-auto space-y-4">
                            <input type='text' :placeholder="$t('name_sur')" v-model="name"
                                class="lg:w-full w-full text-gray-800 rounded-md lg:py-2.5 px-4 border text-sm outline-blue-500" />
                            <input type='email' placeholder='Email' v-model="email"
                                class="lg:w-full w-full text-gray-800 rounded-md lg:py-2.5 px-4 border text-sm outline-blue-500" />
                            <input type='text' :placeholder="$t('header')" v-model="subject"
                                class="lg:w-full w-full text-gray-800 rounded-md lg:py-2.5 px-4 border text-sm outline-blue-500" />
                            <textarea :placeholder="$t('message')" :rows="textArea" v-model="message"
                                class="lg:w-full w-full text-gray-800 rounded-md lg:px-4 px-7 border text-sm pt-2.5 outline-blue-500"></textarea>
                            <button type='button'
                                class="text-white bg-nav-icon hover:bg-hover-nav rounded-md text-sm px-4 lg:py-3 py-1 lg:w-full w-full !mt-6"
                                @click="sendEmail()">{{ $t('send') }}</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <!-- Right Scroll Indicator -->
        <div class="fixed right-5 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4">
            <span v-for="n in 6" :key="n" @click="scrollToSection('section' + n)"
                :class="{ 'bg-nav-icon': currentSection === n, 'bg-gray-300': currentSection !== n }"
                class="lg:w-4 lg:h-4 w-2 h-2 rounded-full cursor-pointer transition"></span>
        </div>
        <div class="spinner-container" v-if="loading">
            <fwb-spinner size="12" color="yellow" />
        </div>
    </div>
</template>

<script>
import Patient from 'vue-material-design-icons/AccountInjury.vue';
import Doctor from 'vue-material-design-icons/Doctor.vue';
import Stethoscope from 'vue-material-design-icons/Stethoscope.vue';
import CountryFlag from 'vue-country-flag-next';
import Envelope from 'vue-material-design-icons/Email.vue';
import Phone from 'vue-material-design-icons/Phone.vue';
import Facebook from 'vue-material-design-icons/Facebook.vue';
import Linkedin from 'vue-material-design-icons/Linkedin.vue';
import Instagram from 'vue-material-design-icons/Instagram.vue';
import CellPhone from 'vue-material-design-icons/CellPhone.vue';
import Spinner from '../components/Spinner.vue';
import { FwbSpinner} from 'flowbite-vue'

export default {
    components: {
        Patient,
        Doctor,
        Stethoscope,
        CountryFlag,
        Envelope,
        Phone,
        Facebook,
        Linkedin,
        Instagram,
        CellPhone,
        FwbSpinner
    },
    data() {
        return {
            currentSection: 1,
            counters: [],
            observer: null,
            name: '',
            email: '',
            subject: '',
            message: '',
            isScrolling: false,
            menuOpen: false,
            iconSize: this.getIconSize(),
            iconSize2: this.getIconSize2(),
            textArea: this.getTextArea(),
            loading: false,
        };
    },
    computed: {
        sections() {
            return [
                { id: 'section1', name: this.$t('home'), icon: 'fas fa-user' },
                { id: 'section2', name: this.$t('about'), icon: 'fas fa-info-circle' },
                { id: 'section3', name: this.$t('work'), icon: 'fas fa-briefcase' },
                { id: 'section4', name: this.$t('interest'), icon: 'fas fa-stethoscope' },
                { id: 'section5', name: this.$t('statistic'), icon: 'fas fa-chart-column' },
                { id: 'section6', name: this.$t('cont'), icon: 'fas fa-envelope' },
            ];
        }
    },
    methods: {
        sendEmail() {
            this.loading = true;
            axios.post('/api/email', {
                name: this.name,
                email: this.email,
                subject: this.subject,
                message: this.message
            }).then(() => {
                this.loading = false;
                this.$swal({
                    text: this.$t('success'),
                    icon: 'success'
                });
            }).catch((error) => {
                this.loading = false;
                this.$swal({
                    text: this.$t('error'),
                    icon: 'error'
                });
            })
        },
        getIconSize() {
            return window.innerWidth >= 1024 ? 60 : 30;
        },
        getIconSize2() {
            return window.innerWidth >= 1024 ? 35 : 15;
        },
        getTextArea() {
            return window.innerWidth >= 1024 ? 5 : 2
        },
        toggleMenu() {
            this.menuOpen = !this.menuOpen;
        },
        changeLanguage(lang) {
            this.$i18n.locale = lang;
        },
        scrollToSection(sectionId) {
            const target = document.getElementById(sectionId);
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth',
            });
        },
        handleScroll(event) {
            if (this.isScrolling) return;

            const direction = event.deltaY > 0 ? 'down' : 'up';
            if (direction === 'down' && this.currentSection < this.sections.length) {
                this.currentSection++;
            } else if (direction === 'up' && this.currentSection > 1) {
                this.currentSection--;
            }

            this.scrollToSection(this.sections[this.currentSection - 1].id);

            this.isScrolling = true;
            setTimeout(() => {
                this.isScrolling = false;
            }, 500);
        },
        updateCurrentSection() {
            const sections = Array.from({ length: 6 }, (_, i) => document.getElementById(`section${i + 1}`));

            const scrollPosition = window.scrollY + window.innerHeight / 2;
            sections.forEach((section, index) => {
                if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
                    this.currentSection = index + 1;
                }
            });
        },
        updateIconSize() {
            this.iconSize = this.getIconSize();
        }
    },
    mounted() {
        window.addEventListener('scroll', this.updateCurrentSection);
        window.addEventListener('wheel', this.handleScroll);
        this.counters = [
            this.$refs.counter1,
            this.$refs.counter2,
            this.$refs.counter3,
        ];

        const speed = 150;

        const countUp = (counter) => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText.replace('+', '');

            const increment = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment) + "+";
                setTimeout(() => countUp(counter), 10);
            } else {
                counter.innerText = target + "+";
            }
        };

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    countUp(counter);
                    this.observer.unobserve(counter);
                }
            });
        }, {
            threshold: 0.5,
        });

        this.counters.forEach((counter) => {
            this.observer.observe(counter);
        });

        const sections = document.querySelectorAll('section'); // Selektujete sve sekcije

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-slide-in'); // Dodajete animacionu klasu
                }
            });
        }, {
            threshold: 0.1 // Pokreće animaciju kada je 10% sekcije vidljivo
        });

        sections.forEach(section => {
            observer.observe(section); // Posmatrate svaku sekciju
        });
    },
    created() {
        window.addEventListener('resize', this.updateIconSize);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.updateCurrentSection);
        window.removeEventListener('wheel', this.handleScroll);
        window.removeEventListener('resize', this.updateIconSize);
        if (this.observer) {
            this.counters.forEach((counter) => {
                this.observer.unobserve(counter);
            });
        }
    }
};
</script>

<style scoped>

@keyframes slideIn {
    from {
        transform: translateX(100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

body {
    scroll-behavior: smooth;
}

.spinner-container {
    background: rgba(0, 0, 0, 0.1);
    z-index: 99999 !important;
    @apply fixed w-full h-full left-0 top-0 flex justify-center items-center z-50;
}

section {
    scroll-snap-align: start;
    height: 100vh;
}

@keyframes typewriter {
    from {
        width: 0;
    }

    to {
        width: 100%;
    }
}

@keyframes blink {
    50% {
        border-color: transparent;
    }
}

.typewriter {
    overflow: hidden;
    border-right: 2px solid black;
    white-space: nowrap;
    width: 0;
    animation: typewriter 2s steps(26) 1s forwards, blink 0.90s step-end infinite;
}

.typewriter2 {
    overflow: hidden;
    border-right: 2px solid black;
    white-space: nowrap;
    width: 0;
    animation: typewriter 2.5s steps(40) 3s forwards, blink 0.90s step-end infinite;
}

.typewriter.typed,
.typewriter2.typed {
    border-right: none;
}

.counter {
    display: inline-block;
}

.statistic-container {
    background-image: url(/public/images/operation.jpg);
    background-size: cover;
}

.about-container {
    background-image: url(/public/images/about.jpg);
    background-size: cover;
}

.home-container {
    background-image: url(/public/images/home.jpg);
    background-size: cover;
}

.education-container {
    background-image: url(/public/images/education.jpg);
    background-size: cover;
}

.interests-container {
    background-image: url(/public/images/interests-bg.jpg);
    background-size: cover;
}

.contact-container {
    background-image: url(/public/images/bolnica.jpg);
    background-size: cover;
}
</style>
