import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="font-sans grid grid-rows-[auto_1fr_auto] items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      {/* 导航菜单 - 与首页保持一致 */}
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
              className="text-black dark:text-white border-b-2 border-gray-500 font-medium py-2 px-1"
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

      {/* 关于我们内容 */}
      <main className="w-full max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">关于我们</h1>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-semibold mb-6">我们的故事</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              我们是一家专注于创意设计和数字解决方案的团队，成立于2020年。我们的使命是通过创新的设计和精湛的技术，帮助客户实现他们的业务目标。
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              从最初的小工作室发展到如今拥有20多名专业人才的团队，我们始终坚持以客户为中心，提供最优质的服务。
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              我们的团队成员来自不同的背景和专业领域，这使我们能够从多角度思考问题，为客户提供全面而创新的解决方案。
            </p>
          </div>
          <div className="flex justify-center items-start">
            <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
              {/* <Image
                src="/next.svg" // 请替换为您的实际图片路径
                alt="团队照片"
                fill
                className="object-cover"
              /> */}
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">我们的价值观</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">创新</h3>
              <p className="text-gray-700 dark:text-gray-300">
                我们不断探索新的想法和方法，致力于为客户提供前沿的解决方案。
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">质量</h3>
              <p className="text-gray-700 dark:text-gray-300">
                我们注重每一个细节，确保交付的每一个项目都达到最高的质量标准。
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">合作</h3>
              <p className="text-gray-700 dark:text-gray-300">
                我们与客户建立长期的合作伙伴关系，共同成长，共享成功。
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-8 text-center">我们的团队</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <span className="text-4xl">👤</span>
                </div>
                <h3 className="font-semibold mb-1">团队成员 {item}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">职位描述</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          /> */}
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          /> */}
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          /> */}
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}