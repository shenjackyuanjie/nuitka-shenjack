import * as path from 'path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
    // 部署路径 cf pages root
    root: path.join(__dirname, 'docs'),
    title: 'nuitka 文档',
    description: 'nuitka qq 群的群文档',
    icon: "/nuitka-logo.png",
    logo: {
        light: "/nuitka-logo.png",
        dark: "/nuitka-logo.png",
    },
    themeConfig: {
        socialLinks: [
            { icon: 'github', mode: 'link', content: 'https://github.com/nuitka/nuitka' },
        ],
    },
    outDir: 'local_build',
    markdown: {
        highlightLanguages: [
            ['py', 'python'],
            'python',
            ['cfg', 'ini'],
            'toml',
        ]
    }
});