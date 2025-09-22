import Link from "next/link";

export default function Home() {
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
            <Link href="/cases" className="font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white transition-colors">
              成功案例
            </Link>
            <Link href="/about" className="font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white transition-colors">
              关于我们
            </Link>
            <Link href="/contact" className="font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white transition-colors">
              联系方式
            </Link>
          </div>
          
          {/* <a href="tel:18028445908" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors font-medium">
            紧急联系
          </a> */}
        </div>
      </nav>

      {/* 主内容区 */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        {/* 英雄区域 */}
        <section className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              专业出黑提款解决方案
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10">
            十年专注出黑提款，累计成功提款5000万+，采用独家技术手段，解决各种提款难题
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors font-medium text-lg text-center">
              立即咨询
            </a>
            <a href="#contact" className="border border-gray-300 hover:border-blue-600 text-gray-700 dark:text-gray-300 dark:border-gray-600 dark:hover:border-blue-400 px-8 py-3 rounded-lg transition-colors font-medium text-lg text-center">
              了解更多
            </a>
          </div>
        </section>

        {/* 特性展示 */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-4">为什么选择暴风出黑</h2>
          <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-12">
            十年专注，专业解决各种提款难题，让您的资金安全回归
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">成功再收费</h3>
              <p className="text-gray-600 dark:text-gray-400">
                采用"不成功不收费"原则，每成功提取一笔，收取相应比例费用，零风险合作
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">高效处理</h3>
              <p className="text-gray-600 dark:text-gray-400">
                一般情况一周内完成提款，采用分批多次提款方式，最大化保障资金安全
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">专业经验</h3>
              <p className="text-gray-600 dark:text-gray-400">
                十年以上出黑经验，精通各种疑难情况处理，累计成功提款5000万+
              </p>
            </div>
          </div>
        </section>

        {/* 服务流程 */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-4">服务流程</h2>
          <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-12">
            简单四步，解决您的提款难题
          </p>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="font-semibold mb-2">联系咨询</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">通过电话或QQ联系我们，说明您的情况</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="font-semibold mb-2">提供信息</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">提供您的账号网址和密码，我们评估金额</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="font-semibold mb-2">开始提款</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">我们开始处理，一般一周内完成提款</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="font-semibold mb-2">支付费用</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">每成功一笔，支付一笔的服务费</p>
            </div>
          </div>
        </section>

        {/* 数据统计 */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">10+</div>
              <div className="text-sm md:text-base">行业经验</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">5000万+</div>
              <div className="text-sm md:text-base">累计提款</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">95%</div>
              <div className="text-sm md:text-base">成功率</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">7天</div>
              <div className="text-sm md:text-base">平均周期</div>
            </div>
          </div>
        </section>

        {/* 联系方式 */}
        <section id="contact" className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-4">联系我们</h2>
          <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-12">
            如果您遇到提款问题，请立即联系我们，专业团队为您解决
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">电话联系</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">180-2844-5908</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center">
              <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">邮箱联系</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">3405554131@qq.com</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center">
              <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">QQ联系</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">3405554131</p>
            </div>
          </div>
        </section>
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
                <li><Link href="/cases" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">成功案例</Link></li>
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
                <li className="text-gray-600 dark:text-gray-400">电话: 18028445908</li>
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