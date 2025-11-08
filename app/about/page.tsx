import Image from "next/image";
import Link from "next/link";

export default function About() {
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
            <Link href="/about" className="font-medium text-black dark:text-white border-b-2 border-blue-600">
              关于我们
            </Link>
            <Link href="/contact" className="font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white transition-colors">
              联系方式
            </Link>
          </div>
        </div>
      </nav>

      {/* 主内容区 */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        {/* 公司介绍 */}
        <section className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              关于暴风出黑
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            十年专注，专业解决各种提款难题，累计成功提款金额超过2000万元
          </p>
        </section>

        {/* 我们的故事 */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">我们的故事</h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p className="leading-relaxed">
                  <strong>暴风出黑</strong>成立于2014年，至今已在出黑行业深耕十年。我们的创始人从最初的技术研究开始，逐步建立起一支专业的四人的出黑团队。
                </p>
                <p className="leading-relaxed">
                  在这十年间，我们见证了各种黑平台不给提款的例子，例如：注单审核/银行审核/银行风控等，积累了丰富的实战经验。从最初的单打独斗，发展到如今拥有完善技术体系和专业服务的组织。
                </p>
                <p className="leading-relaxed">
                  我们深知客户在遇到提款问题时的焦虑和无助，因此始终坚持"客户至上"的原则，用专业的技术和真诚的服务帮助每一位客户解决问题。
                </p>
                <p className="leading-relaxed">
                  十年磨一剑，我们不断优化技术手段，提升服务效率，只为给客户提供最可靠、最专业的出黑解决方案。
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white text-center">
              <div className="text-5xl font-bold mb-4">10+</div>
              <div className="text-2xl mb-6">年行业经验</div>
              <div className="text-3xl font-bold mb-4">2000万+</div>
              <div className="text-xl">累计成功提款金额</div>
            </div>
          </div>
        </section>

        {/* 我们的优势 */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-4">我们的核心优势</h2>
          <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-12">
            十年磨一剑，我们拥有其他团队无法比拟的专业优势
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">十年经验</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                十年行业深耕，熟悉各种平台规则和技术手段
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">成功收费</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                不成功不收费，零风险合作，客户资金安全有保障
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">高效处理</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                一般情况一周内完成提款，专业技术团队快速响应
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">专业团队</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                资深技术专家组成核心团队，确保每个案件的专业处理
              </p>
            </div>
          </div>
        </section>

        {/* 服务承诺 */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold text-center mb-8">我们的服务承诺</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">零风险合作</h3>
                <p className="text-blue-100">
                  严格执行"不成功不收费"原则，客户无需承担任何前期费用，真正做到零风险合作。
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">信息安全</h3>
                <p className="text-blue-100">
                  严格保护客户隐私，所有信息加密处理，服务完成后彻底清除相关数据。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 为什么选择我们 */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-4">为什么选择暴风出黑</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">专业技术优势</h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>十年行业经验，熟悉各种平台规则和风控机制</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>独家技术手段，解决各种复杂提款难题</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>持续技术更新，应对平台不断升级的风控措施</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">服务保障</h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>不成功不收费，客户零风险</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>7×24小时在线咨询，及时响应客户需求</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>严格保密协议，保护客户隐私安全</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA区域 */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6">遇到提款问题？立即联系我们</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            十年专业团队为您提供最可靠的解决方案，不成功不收费，零风险合作
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contact" target="_blank" rel="noopener noreferrer" className="border border-gray-300 hover:border-blue-600 text-gray-700 dark:text-gray-300 dark:border-gray-600 dark:hover:border-blue-400 px-8 py-3 rounded-lg transition-colors font-medium text-lg">
              联系我们
            </a>
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