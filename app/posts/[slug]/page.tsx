import { notFound } from 'next/navigation'
import { getPostData, getAllPostSlugs } from '../../lib/posts'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Link from "next/link"

// 生成静态参数
export async function generateStaticParams() {
  const posts = getAllPostSlugs()
  return posts
}

// 生成元数据
export async function generateMetadata({ params }: { params: { slug: string } }) {
  try {
    const post = await getPostData(params.slug)
    
    return {
      title: post.title,
      description: post.description,
    }
  } catch (error) {
    return {
      title: '文章未找到',
      description: '请求的文章不存在',
    }
  }
}

export default async function Post({ params }: { params: { slug: string } }) {
  let post
  try {
    post = await getPostData(params.slug)
  } catch (error) {
    notFound()
  }

  return (
    <div className="font-sans grid grid-rows-[auto_1fr_auto] items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      {/* 导航菜单 */}
      <nav className="w-full max-w-5xl mx-auto py-4">
        <ul className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm md:text-base">
          <li>
            <Link 
              href="/" 
              className="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors duration-200 font-medium py-2 px-1 border-b-2 border-transparent hover:border-gray-300"
            >
              首页
            </Link>
          </li>
          <li>
            <Link 
              href="/cases" 
              className="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors duration-200 font-medium py-2 px-1 border-b-2 border-transparent hover:border-gray-300"
            >
              案例
            </Link>
          </li>
          <li>
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors duration-200 font-medium py-2 px-1 border-b-2 border-transparent hover:border-gray-300"
            >
              关于我们
            </Link>
          </li>
          <li>
            <Link 
              href="/contact" 
              className="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors duration-200 font-medium py-2 px-1 border-b-2 border-transparent hover:border-gray-300"
            >
              联系方式
            </Link>
          </li>
        </ul>
      </nav>

      {/* 文章内容 */}
      <main className="w-full max-w-3xl mx-auto">
        <article className="max-w-none">
          <header className="mb-12">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">{post.description}</p>
            <time className="text-sm text-gray-500 dark:text-gray-500">
              {new Date(post.date).toLocaleDateString('zh-CN')}
            </time>
          </header>
          
          <div className="border-t pt-8 prose prose-lg dark:prose-invert max-w-none">
            {/* @ts-expect-error Server Component */}
            <MDXRemote source={post.content} />
          </div>
        </article>

        <div className="mt-12 pt-8 border-t">
          <Link 
            href="/cases"
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
          >
            ← 返回文章列表
          </Link>
        </div>
      </main>

      <footer className="flex gap-[24px] flex-wrap items-center justify-center">
        {/* 页脚内容与首页保持一致 */}
      </footer>
    </div>
  )
}