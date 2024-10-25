<template>
    <div>
        <!-- Left Sidebar Navigation -->
        <nav class="w-full bg-gray-300 h-14 fixed left-0 top-0 flex items-center justify-center px-4 z-10">
            <!-- Burger icon for mobile devices -->
            <div class="block w-full sm:hidden sticky">
                <button @click="toggleMenu" class="focus:outline-none">
                    <!-- Burger menu icon with animated lines -->
                    <div class="space-y-2">
                        <!-- Top line -->
                        <span :class="{
                            'block w-8 h-1 bg-gray-800 transform transition-transform duration-300': true,
                            'rotate-45 translate-y-2.5': menuOpen,
                        }"></span>
                        <!-- Middle line -->
                        <span :class="{
                            'block w-8 h-1 bg-gray-800 transition-opacity duration-300': true,
                            'opacity-0': menuOpen,
                        }"></span>
                        <!-- Bottom line -->
                        <span :class="{
                            'block w-8 h-1 bg-gray-800 transform transition-transform duration-300': true,
                            '-rotate-45 -translate-y-2.5': menuOpen,
                        }"></span>
                    </div>
                </button>
            </div>
        </nav>

        <!-- Section navigation with added animations -->
        <transition-group name="fade" tag="div"
            class="flex flex-col space-y-4 sm:flex-row items-center justify-center space-x-4">
            <div v-for="section in sections" :key="section.id"
                class="relative group hover:scale-105 transition-transform duration-500 ease-in-out"
                @click="scrollToSection(section.id)">
                <div
                    class="bg-nav-icon p-3 rounded-full group-hover:bg-hover-nav cursor-pointer transition-colors duration-300">
                    <i :class="section.icon"></i>
                </div>
                <span
                    class="absolute left-0 bottom-0 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">{{
                    section.name }}</span>
            </div>
        </transition-group>

        <!-- Section content with smooth fade-in effect -->
        <div v-for="section in sections" :key="section.id" class="section-content">
            <transition name="slide-fade">
                <div v-if="currentSection === section.id" class="p-8">
                    <!-- Section content with sliding transition -->
                    <h2 class="text-xl font-bold mb-4">{{ section.name }}</h2>
                    <p>{{ section.description }}</p>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            menuOpen: false,
            currentSection: null,
            sections: [
                { id: 1, name: 'Section 1', icon: 'fas fa-home', description: 'Description for section 1' },
                { id: 2, name: 'Section 2', icon: 'fas fa-user', description: 'Description for section 2' },
                { id: 3, name: 'Section 3', icon: 'fas fa-cog', description: 'Description for section 3' },
            ],
        };
    },
    methods: {
        toggleMenu() {
            this.menuOpen = !this.menuOpen;
        },
        scrollToSection(sectionId) {
            this.currentSection = sectionId;
        },
    },
};
</script>

<style scoped>
/* Fade-in effect for section content */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

/* Slide and fade effect for section content */
.slide-fade-enter-active {
    transition: all 0.6s ease;
    transform: translateX(0);
    opacity: 1;
}

.slide-fade-leave-active {
    transition: all 0.6s ease;
    transform: translateX(-10%);
    opacity: 0;
}

.slide-fade-enter,
.slide-fade-leave-to {
    transform: translateX(10%);
    opacity: 0;
}
</style>
