import { defineConfig } from "vitepress";
import { resolve } from 'path'

export default defineConfig({
    title: "Astral",
    lang: "zh-CN",
    description: "A theme port for VitePress",
    themeConfig: {
        avatar: "",
        background: "",
    },
    vite: {
        resolve: {
            alias: {
                "@src": resolve(__dirname, "../../src"),
            },
        },
    },
});
