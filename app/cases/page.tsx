import Link from "next/link";
import { getSortedPostsData } from '../lib/posts'
import { Post } from '../types/post'

export default function Cases() {
  const posts = getSortedPostsData()

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
              className="text-black dark:text-white border-b-2 border-gray-500 font-medium py-2 px-1"
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

      {/* 案例内容 */}
      <main className="w-full max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">技术文章</h1>
        
        <div className="space-y-8">
          {posts.map((post: Post) => (
            <article key={post.slug} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <Link href={`/posts/${post.slug}`}>
                <h2 className="text-2xl font-semibold mb-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                  {post.title}
                </h2>
              </Link>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {post.description}
              </p>
              <div className="flex justify-between items-center">
                <time className="text-sm text-gray-500 dark:text-gray-500">
                  {new Date(post.date).toLocaleDateString('zh-CN')}
                </time>
                <Link 
                  href={`/posts/${post.slug}`}
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                >
                  阅读更多 →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>

      <footer className="flex gap-[24px] flex-wrap items-center justify-center">
        {/* 页脚内容与首页保持一致 */}
      </footer>
    </div>
  )
}