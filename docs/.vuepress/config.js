module.exports = {
    title: '首页', // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
    description: '刘锦的技术博客', // meta 中的描述文字，用于SEO
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }],  //浏览器的标签栏的网页图标
    ],
    markdown: {
        lineNumbers: true
    },
    serviceWorker: true,
    themeConfig: {    
        logo: '/logo.png',
        lastUpdated: 'lastUpdate', // string | boolean
        nav: [
            { text: '首页', link: '/' },
            {
                text: '分类',
                ariaLabel: '分类',
                items: [
                    { text: '文章', link: '/pages/folder1/test1.md' },
                    { text: '琐碎', link: '/pages/folder2/test4.md' },
                    { text: '简历', link: '/pages/resume/resume.md' },
                    { text: '前端', link: '/pages/frontend/html.md' },
                ]
            },
            { text: '功能演示', link: '/pages/folder1/test3.md' },
            { text: 'Github', link: 'https://github.com/LiuJhin' },
        ],
        sidebar: {
            '/pages/folder1/':[
                {
                    title: '测试菜单1',   // 必要的
                    collapsable: false, // 可选的, 默认值是 true,
                    sidebarDepth: 1,    // 可选的, 默认值是 1
                    children: [
                        ['test1.md', '子菜单1'],
                        ['test3.md', '子菜单2']
                    ]
                },
                {
                    title: '测试菜单2',
                    collapsable: false, // 可选的, 默认值是 true,
                    children: [
                        ['test2.md', '子菜单1']
                    ]
                }
            ],
            '/pages/resume/':[
                {
                    title: '个人简历',   // 必要的
                    collapsable: false, // 可选的, 默认值是 true,
                    sidebarDepth: 1,    // 可选的, 默认值是 1
                    children: [
                        ['resume.md', '基本信息'],
                        ['PersonalAdvantages.md', '个人优势'],
                        ['WorkExperience.md', '工作经历'],
                        ['ProjectExperience.md', '项目经验'],
                        ['EducationalInformation.md', '教育信息'],
                    ]
                },
            ],
            '/pages/frontend/':[
                {
                    title: '前端',   // 必要的
                    collapsable: false, // 可选的, 默认值是 true,
                    sidebarDepth: 1,    // 可选的, 默认值是 1
                    children: [
                        ['html.md', 'html'],
                        ['css.md', 'css'],
                        ['javascript.md', 'javascript'],
               
                    ]
                },
            ],
        }
    }
}