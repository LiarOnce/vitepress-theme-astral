<template>
    <div id="wrapper">
        <NavBar />
        <div id="main">
            <article id="home" class="panel intro" v-if="frontmatter.home">
                <header>
                    <h1>{{ site.title }}</h1>
                    <p>{{ site.description }}</p>
                </header>
                <a href="/work" class="jumplink pic">
                    <span class="arrow icon solid fa-chevron-right"><span>See my work</span></span>
                    <img src="../images/me.jpg" alt="" />
                </a>
            </article>
            <article id="work" class="panel" v-if="frontmatter.layout == 'work'">
                <Work />
            </article>
        </div>
        <Footer />
    </div>
</template>

<script setup>
import { useData } from 'vitepress'
import { onMounted } from "vue"

import NavBar from '@src/components/NavBar.vue'
import Work from '@src/components/Work.vue'
import Footer from '@src/components/Footer.vue'
const { site, frontmatter } = useData()
</script>