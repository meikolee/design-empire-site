# 🎨 设计帝国 - 推广落地页

> 让每一份设计都值得被看见

国内领先的设计作品投稿与展示平台推广页面。这是一个基于 **GitHub Pages** 的纯静态网站，用于推广「设计帝国」投稿平台。

## 🌐 在线访问

部署后，通过以下地址访问：

```
https://<你的GitHub用户名>.github.io/design-empire-site
```

## 📁 项目结构

```
design-empire-site/
├── index.html              # 主页面
├── README.md               # 本文件
├── css/
│   └── style.css           # 样式文件
├── js/
│   └── main.js             # JavaScript 交互
├── images/                 # 图片资源目录
└── .github/
    └── workflows/
        └── deploy.yml      # GitHub Actions 自动部署
```

## 🚀 部署指南

### 方式一：GitHub Actions（推荐）

1. **Fork / Clone 本仓库**
2. **推送到 GitHub**
   ```bash
   git add .
   git commit -m "初始化设计帝国推广页面"
   git push origin main
   ```
3. **启用 GitHub Pages**
   - 进入仓库 **Settings → Pages**
   - **Source** 选择 "**GitHub Actions**"
   - 推送代码到 `main` 分支后，Actions 将自动部署
4. **等待部署完成**
   - 进入 **Actions** 标签页查看部署进度
   - 部署成功后，访问 `https://<用户名>.github.io/design-empire-site`

### 方式二：手动部署

1. 进入仓库 **Settings → Pages**
2. **Source** 选择 "**Deploy from a branch**"
3. **Branch** 选择 `main`，目录选择 `/design-empire-site`
4. 点击 **Save**

## ✏️ 自定义修改

### 基础信息修改

编辑 [`index.html`](index.html) 文件：

- **标题**：修改 `<title>` 标签内容
- **描述**：修改 `<meta name="description">` 内容
- **联系方式**：更新页脚的社交链接
- **统计数据**：更新 Hero 区域的作品数、设计师数等

### 样式修改

编辑 [`css/style.css`](css/style.css) 文件：

- **主题色**：修改 `:root` 中的 CSS 变量
  - `--primary`: 主色调（紫色）
  - `--secondary`: 次要色（青色）
  - `--accent`: 强调色（粉色）
- **字体**：修改 `body` 的 `font-family`

### 功能修改

编辑 [`js/main.js`](js/main.js) 文件：

- 导航栏滚动效果
- 滚动动画触发
- 平滑滚动

## 💡 功能特性

- ✅ **响应式设计** — 完美适配桌面端、平板和手机端
- ✅ **暗色系主题** — 炫酷的深色渐变背景，突显设计感
- ✅ **滚动动画** — 元素渐入动画，提升浏览体验
- ✅ **平滑导航** — 点击导航平滑滚动到对应区域
- ✅ **移动端适配** — 汉堡菜单，触屏友好
- ✅ **SEO 优化** — 完善的 Meta 标签和语义化 HTML
- ✅ **自动部署** — GitHub Actions 一键自动部署

## 🛠️ 技术栈

- **HTML5** — 语义化标签结构
- **CSS3** — Flexbox/Grid 布局、渐变、动画、CSS 变量
- **JavaScript** — 原生 ES6+，无任何外部依赖
- **GitHub Actions** — CI/CD 自动部署
- **GitHub Pages** — 免费静态网站托管

## 📄 许可

MIT License © 2026 设计帝国

---

> 💡 **提示**：将 `your-username` 替换为你的 GitHub 用户名后，即可开始使用！
