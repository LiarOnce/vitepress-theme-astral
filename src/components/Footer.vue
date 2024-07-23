<template>
    <div id="footer">
        <ul class="copyright">
            <li>&copy; {{ site.title }}</li>
            <li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
        </ul>
    </div>
</template>

<script setup>
import { useData } from 'vitepress'
const { site } = useData()
</script>