# 内容维护说明

这个站点现在已经改成更适合长期维护的结构了。

以后你主要只需要碰 3 类位置：

- 站点基础资料：[`src/content/site/`](/Users/al/Desktop/个人网站-en/magicuidesign-portfolio-5ef12e4/src/content/site)
- 项目内容：[`src/content/projects/`](/Users/al/Desktop/个人网站-en/magicuidesign-portfolio-5ef12e4/src/content/projects)
- 博客文章：[`content/guava/`](/Users/al/Desktop/个人网站-en/magicuidesign-portfolio-5ef12e4/content/guava) 和 [`content/en/guava/`](/Users/al/Desktop/个人网站-en/magicuidesign-portfolio-5ef12e4/content/en/guava)

`src/data/resume.tsx` 现在只是组装层，不再是主要维护入口。

## 1. 改首页个人信息

中文站改这里：

- [`src/content/site/zh.ts`](/Users/al/Desktop/个人网站-en/magicuidesign-portfolio-5ef12e4/src/content/site/zh.ts)

英文站改这里：

- [`src/content/site/en.ts`](/Users/al/Desktop/个人网站-en/magicuidesign-portfolio-5ef12e4/src/content/site/en.ts)

两边共用的基础资料在这里：

- [`src/content/site/shared.ts`](/Users/al/Desktop/个人网站-en/magicuidesign-portfolio-5ef12e4/src/content/site/shared.ts)

适合放在 `shared.ts` 的内容：

- 姓名
- 头像
- 联系方式
- 技能
- 不分语言的公共信息

适合放在 `zh.ts` / `en.ts` 的内容：

- `description`
- `summary`
- `navbar`
- `work`
- `education`

## 2. 新增项目

中文项目放这里：

- [`src/content/projects/zh/`](/Users/al/Desktop/个人网站-en/magicuidesign-portfolio-5ef12e4/src/content/projects/zh)

英文项目放这里：

- [`src/content/projects/en/`](/Users/al/Desktop/个人网站-en/magicuidesign-portfolio-5ef12e4/src/content/projects/en)

做法：

1. 新建一个项目文件，例如 `my-new-project.tsx`
2. 在对应目录的 `index.ts` 里把它加进数组

可以直接从这个模板复制：

- [`src/content/projects/project.template.tsx`](/Users/al/Desktop/个人网站-en/magicuidesign-portfolio-5ef12e4/src/content/projects/project.template.tsx)

例如：

- [`src/content/projects/zh/index.ts`](/Users/al/Desktop/个人网站-en/magicuidesign-portfolio-5ef12e4/src/content/projects/zh/index.ts)
- [`src/content/projects/en/index.ts`](/Users/al/Desktop/个人网站-en/magicuidesign-portfolio-5ef12e4/src/content/projects/en/index.ts)

项目文件要维护的核心字段：

- `slug`
- `title`
- `href`
- `dates`
- `description`
- `detail`
- `technologies`
- `links`
- `image` 或 `video`
- `gallery`

建议：

- `slug` 中英文保持一致
- 文件名也尽量和 `slug` 保持一致
- 资源放在 `public/projects/项目名/`

## 3. 修改项目

找到对应项目文件直接改。

例如：

- [`src/content/projects/zh/sdecky.tsx`](/Users/al/Desktop/个人网站-en/magicuidesign-portfolio-5ef12e4/src/content/projects/zh/sdecky.tsx)
- [`src/content/projects/en/sdecky.tsx`](/Users/al/Desktop/个人网站-en/magicuidesign-portfolio-5ef12e4/src/content/projects/en/sdecky.tsx)

你以后不会再去一个超长数组里定位项目对象了。

## 4. 删除项目

做两步：

1. 删除对应项目文件
2. 从对应 `index.ts` 数组里删掉它

可选：

3. 删除 `public/projects/` 下的资源目录

## 5. 新增博客

中文：

- [`content/guava/`](/Users/al/Desktop/个人网站-en/magicuidesign-portfolio-5ef12e4/content/guava)

英文：

- [`content/en/guava/`](/Users/al/Desktop/个人网站-en/magicuidesign-portfolio-5ef12e4/content/en/guava)

每篇文章一个 `.mdx` 文件。

头部至少要有：

```mdx
---
title: "文章标题"
publishedAt: "2026-03-08"
updatedAt: "2026-03-08"
summary: "一句摘要"
image: "/blog/my-post/images/cover.png"
---
```

## 6. 删除博客

直接删对应 `.mdx` 文件。

可选再删：

- `public/blog/对应 slug 目录`

## 7. 图片怎么放

统一规则：

- 项目资源放 [`public/projects/`](/Users/al/Desktop/个人网站-en/magicuidesign-portfolio-5ef12e4/public/projects)
- 博客资源放 [`public/blog/`](/Users/al/Desktop/个人网站-en/magicuidesign-portfolio-5ef12e4/public/blog)
- Logo / 头像放 [`public/logos/`](/Users/al/Desktop/个人网站-en/magicuidesign-portfolio-5ef12e4/public/logos)

引用时不要写 `public`，只写网站路径。

例如真实文件：

- `public/projects/sdecky/cover.svg`

代码里写：

- `/projects/sdecky/cover.svg`

## 8. 现在这套结构的好处

和之前相比：

- 改个人资料，不再翻一个超长 `resume.tsx`
- 改项目时，一次只改一个文件
- 删除项目时，不容易误删别的内容
- 中英文内容边界更清楚
- 后面如果要接 CMS，也更容易迁移

## 9. 一句话记忆版

- 改个人资料：改 [`src/content/site/`](/Users/al/Desktop/个人网站-en/magicuidesign-portfolio-5ef12e4/src/content/site)
- 改项目：改 [`src/content/projects/`](/Users/al/Desktop/个人网站-en/magicuidesign-portfolio-5ef12e4/src/content/projects)
- 发博客：改 [`content/guava/`](/Users/al/Desktop/个人网站-en/magicuidesign-portfolio-5ef12e4/content/guava) / [`content/en/guava/`](/Users/al/Desktop/个人网站-en/magicuidesign-portfolio-5ef12e4/content/en/guava)
