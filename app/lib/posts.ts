import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Post } from '../types/post'

const postsDirectory = path.join(process.cwd(), 'app', 'posts')

export function getSortedPostsData(): Post[] {
  // 确保posts目录存在
  if (!fs.existsSync(postsDirectory)) {
    console.warn('Posts directory not found:', postsDirectory)
    return []
  }
  
  // 获取posts目录下的所有文件项
  const items = fs.readdirSync(postsDirectory, { withFileTypes: true })
  
  // 过滤出文件（排除目录），并且只处理.mdx和.md文件
  const fileNames = items
    .filter(item => item.isFile() && (item.name.endsWith('.mdx') || item.name.endsWith('.md')))
    .map(item => item.name)

  const allPostsData = fileNames.map((fileName) => {
    // 移除.md或.mdx扩展名获取slug
    const slug = fileName.replace(/\.(mdx|md)$/, '')

    // 读取文件内容
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // 使用gray-matter解析元数据
    const { data } = matter(fileContents)

    // 组合数据与slug
    return {
      slug,
      ...data,
    } as Post
  }).filter(Boolean) as Post[] // 过滤掉null值

  // 按日期排序文章
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllPostSlugs() {
  if (!fs.existsSync(postsDirectory)) {
    console.warn('Posts directory not found:', postsDirectory)
    return []
  }
  
  const items = fs.readdirSync(postsDirectory, { withFileTypes: true })
  const fileNames = items
    .filter(item => item.isFile() && (item.name.endsWith('.mdx') || item.name.endsWith('.md')))
    .map(item => item.name)

  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.(mdx|md)$/, ''),
      },
    }
  })
}

export async function getPostData(slug: string) {
  // 尝试.mdx文件
  let fullPath = path.join(postsDirectory, `${slug}.mdx`)
  if (!fs.existsSync(fullPath)) {
    // 如果.mdx不存在，尝试.md文件
    fullPath = path.join(postsDirectory, `${slug}.md`)
    if (!fs.existsSync(fullPath)) {
      throw new Error(`Post not found: ${slug}`)
    }
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // 使用gray-matter解析元数据和内容
  const { data, content } = matter(fileContents)

  return {
    slug,
    content,
    ...data,
  }
}