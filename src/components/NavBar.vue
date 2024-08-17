<template>
    <nav id="nav">
        <a href="/" ref="navClass" class="icon solid fa-home" :class="{ active: isActive === 1 }"
            @click="changeClass(1)"><span>Home</span></a>
        <a href="/work" class="icon solid fa-folder" :class="{ active: isActive === 2 }"
            @click="changeClass(2)"><span>Work</span></a>
        <a href="/contact" class="icon solid fa-envelope" :class="{ active: isActive === 3 }"
            @click="changeClass(3)"><span>Contact</span></a>
    </nav>
</template>

<script>
// import { useRouter, useRoute } from 'vitepress'
import { ref } from 'vue';
export default {
    props: ['activeClass'],
    data() {
        return {
            isActive: 1
        }
    },
    methods: {
        changeClass(i) {
            this.isActive = i;
        }
    }
}
</script>

<style scoped></style>