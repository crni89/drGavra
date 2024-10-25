
<template>
    <div class="flex min-h-screen">
        <!-- Left Sidebar Navigation -->
        <nav class="w-screen bg-gray-300 h-20 fixed left-0 top-0 flex flex-row items-center justify-center space-x-40 z-10">
            <div
                v-for="section in sections"
                :key="section.id"
                class="relative group"
                @click="scrollToSection(section.id)"
            >
                <div class="bg-nav-icon p-3 rounded-full hover:bg-hover-nav cursor-pointer">
                    <font-awesome-icon :icon="section.icon" class="text-white text-lg"/>
                </div>
                <!-- Tooltip for section name -->
                <span class="absolute left-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {{ section.name }}
                </span>
            </div>
            <country-flag country='rs' size='big'  <!-- Previous segment for nav -->
<main class="flex-grow p-4 sm:p-6 lg:p-8">
    <div class="container mx-auto">
        <!-- Content dynamically inserted and responsive styles for other elements go here -->
        <section id="dynamic-content" class="w-full flex flex-col items-center sm:flex-row sm:justify-between p-4 space-y-4 sm:space-y-0 sm:space-x-4">
            <div class="bg-white shadow-lg p-4 rounded-lg w-full sm:w-1/2">
                <!-- Example card or block of content -->
                <h2 class="text-xl font-bold mb-2">Title Here</h2>
                <p>Content or description here...</p>
            </div>
            <div class="bg-white shadow-lg p-4 rounded-lg w-full sm:w-1/2">
                <!-- Another card or block of content -->
                <h2 class="text-xl font-bold mb-2">Another Title</h2>
                <p>Another content section...</p>
            </div>
        </section>
    </div>
</main>

<footer class="bg-gray-800 text-white py-6">
    <div class="container mx-auto text-center">
        <p>&copy; 2024 Your Website. All rights reserved.</p>
    </div>
</footer>
