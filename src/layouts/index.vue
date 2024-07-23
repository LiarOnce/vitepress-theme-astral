<template>
    <div v-if="frontmatter.home" id="wrapper">
        <NavBar />
        <div id="main">
            <article id="home" class="panel intro">
                <header>
                    <h1>{{ site.title }}</h1>
                    <p>{{ site.description }}</p>
                </header>
                <a href="#work" class="jumplink pic">
                    <span class="arrow icon solid fa-chevron-right"><span>See my work</span></span>
                    <img src="../images/me.jpg" alt="" />
                </a>
            </article>
        </div>
        <Footer />
    </div>
    <div v-else>
        <a href="/">Home</a>
        <Content />
    </div>
</template>

<script setup>
import { useData } from 'vitepress'
import { onMounted } from "vue"

import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
const { site, frontmatter } = useData()
</script>