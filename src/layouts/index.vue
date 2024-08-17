<template>
    <div id="wrapper">
        <NavBar />
        <div id="main">
            <!-- <TransitionGroup> -->
            <TransitionGroup name="astral" appear>
                <article id="home" class="panel intro" v-if="frontmatter.home">
                    <header>
                        <h1>{{ site.title }}</h1>
                        <p>{{ site.description }}</p>
                    </header>
                    <a href="/work" class="jumplink pic">
                        <span class="arrow icon solid fa-chevron-right"><span>See my work</span></span>
                        <img :src="theme.avatar" alt="" />
                    </a>
                </article>
                <article id="work" class="panel" v-if="frontmatter.layout == 'work'">
                    <Work />
                </article>
                <article id="contact" class="panel" v-if="frontmatter.layout == 'doc'">
                    <Doc />
                </article>
            </TransitionGroup>
        </div>
        <Footer />
    </div>
</template>

<script setup>
import { useData, useRouter, useRoute } from 'vitepress'
import { nextTick, ref, TransitionGroup } from "vue"

import NavBar from '@src/components/NavBar.vue'
import Work from '@src/components/Work.vue'
import Doc from '@src/components/Doc.vue'
import Footer from '@src/components/Footer.vue'
const { site, frontmatter, theme } = useData()

// let isActive = ref(true)
</script>

<style scoped>
.astral-enter-active,
.astral-leave-active {
    transition: all 1s ease-in-out;
}

.astral-leave-from,
.astral-enter-to {
  opacity: 1;
}

.astral-leave-to,
.astral-enter-from {
  opacity: 0;
  transform: translateX(30px);
}


.astral-leave-active {
  position: absolute !important;
}
</style>