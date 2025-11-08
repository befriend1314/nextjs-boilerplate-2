import Link from "next/link";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
       {/* 导航栏 */}
      <nav className="w-full max-w-6xl mx-auto py-6 px-4 sm:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">暴</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              暴风出黑
            </span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white transition-colors">
              首页
            </Link>
            {/* <Link href="/cases" className="font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white transition-colors">
              成功案例
            </Link> */}
            <Link href="/about" className="font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white transition-colors">
              关于我们
            </Link>
            <Link href="/contact" className="font-medium text-black dark:text-white border-b-2 border-blue-600">
              联系方式
            </Link>
          </div>
        </div>
      </nav>


      {/* 主内容区 */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              联系我们
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            遇到提款问题？立即联系我们，专业团队为您解决
          </p>
        </div>

        {/* 联系方式卡片 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* 电话联系 */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4">电话/微信联系</h3>
            <p className="text-3xl font-bold text-gray-800 dark:text-white mb-6">18098176438</p>
          </div>

          {/* QQ联系 */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                  className="w-10 h-10 text-blue-600"
                  viewBox="0 0 1024 1024"
                  version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1480" width="64" height="64"><path d="M824.8 613.2c-16-51.4-34.4-94.6-62.7-165.3C766.5 262.2 689.3 112 511.5 112 331.7 112 256.2 265.2 261 447.9c-28.4 70.8-46.7 113.7-62.7 165.3-34 109.5-23 154.8-14.6 155.8 18 2.2 70.1-82.4 70.1-82.4 0 49 25.2 112.9 79.8 159-26.4 8.1-85.7 29.9-71.6 53.8 11.4 19.3 196.2 12.3 249.5 6.3 53.3 6 238.1 13 249.5-6.3 14.1-23.8-45.3-45.7-71.6-53.8 54.6-46.2 79.8-110.1 79.8-159 0 0 52.1 84.6 70.1 82.4 8.5-1.1 19.5-46.4-14.5-155.8z" p-id="1481"></path></svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4">QQ联系</h3>
            <p className="text-3xl font-bold text-gray-800 dark:text-white mb-6">3405554131</p>
          </div>

          {/* 邮箱联系 */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="w-20 h-20 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4">邮箱联系</h3>
            <p className="text-3xl font-bold text-gray-800 dark:text-white mb-6 break-all">3405554131@qq.com</p>
          </div>
        </div>

        {/* 服务时间 */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center shadow-lg">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">服务时间</h3>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">7×24小时在线服务</p>
          <p className="text-lg text-gray-500 dark:text-gray-400">紧急情况随时联系，专业团队及时响应</p>
        </div>
      </main>

      {/* 页脚 */}
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">暴</span>
                </div>
                <span className="text-xl font-bold">暴风出黑</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                专业出黑提款服务，十年经验，成功再收费
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">导航</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">首页</Link></li>
                {/* <li><Link href="/cases" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">成功案例</Link></li> */}
                <li><Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">关于我们</Link></li>
                <li><Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">联系方式</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">服务承诺</h3>
              <ul className="space-y-2">
                <li className="text-gray-600 dark:text-gray-400">不成功不收费</li>
                <li className="text-gray-600 dark:text-gray-400">专业高效处理</li>
                <li className="text-gray-600 dark:text-gray-400">十年出黑经验</li>
                <li className="text-gray-600 dark:text-gray-400">资金安全保障</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">联系信息</h3>
              <ul className="space-y-2">
                <li className="text-gray-600 dark:text-gray-400">电话/微信: 18098176438</li>
                <li className="text-gray-600 dark:text-gray-400">邮箱: 3405554131@qq.com</li>
                <li className="text-gray-600 dark:text-gray-400">QQ: 3405554131</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center text-gray-500 dark:text-gray-400">
            <p>© {new Date().getFullYear()} 暴风出黑. 保留所有权利.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}