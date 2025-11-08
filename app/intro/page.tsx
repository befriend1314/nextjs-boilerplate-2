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
            <Link
              href="/"
              className="font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              首页
            </Link>
            {/* <Link
              href="/cases"
              className="font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              成功案例
            </Link> */}
            <Link
              href="/about"
              className="font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              关于我们
            </Link>
            <Link
              href="/contact"
              className="font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              联系方式
            </Link>
          </div>
        </div>
      </nav>

      {/* 主内容区 */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <section>
          <h1 className="text-center text-4xl md:text-5xl font-bold mb-20">网投被黑提不出来怎么办？</h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-10">看到这篇内容的网友，我相信你此刻就碰到提不出款的问题，不然你也不会搜到这篇文章，下面就请你耐心看完这篇内容。</p>
          <ol className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 ">
            <li className="font-bold mb-2">被黑是什么意思？</li>
            <li className="mb-5">被黑就是行业的术语， 意识就是你遇到黑平台了， 平台要黑掉你帐号上的钱， 不给你提出来。</li>
            <li className="font-bold mb-2">为什么会被黑？</li>
            <li className="mb-5">
              <p>很多新人玩家可能想不到为什么会被黑，这就是导致被黑的根本原因，也是大多数人最疑惑的地方。说到底，就是平台不想给你赢那么多钱走，担心你提款之后不玩了，你想想，你正常赢个几百几千，你可以顺利提出来， 那是平台损失不大， 如果你一下子提款个几万甚至几十万，怎么可能给你提呢？这也就要么不被黑， 要么被黑之后玩家损失巨大。</p>
              <p className="mt-2">除了正常的玩家，还有一部分是靠刷水/对冲/优惠返现盈利的玩家， 这种也是经常被黑的，这个很好理解， 毕竟平台不是傻子不是来做慈善的。</p>
            </li>
            <li className="font-bold mb-2">被黑之后怎么办？</li>
            <li className="mb-5">
              <p>重要重要重要‼️</p>
              <p className="mt-2">第一、不要找客服，不管你是否已经找过客服询问原因了，从此刻起，不要再去找她们沟通，更加不要找她们理论对骂，只会导致更严重的后果——冻结封号。</p>
              <p className="mt-2">第二、不要继续提款，频繁提款会导致被系统拉入黑名单，给后续提款难度加大。</p>
              <p className="mt-2">第三、不要相信平台跟你说的任何接口理由，比如什么流水不够，注单异常，银行正在维护等等，她们就是找这种理由希望你再继续玩，好让你把钱输回去而已。你只要没有输回去，她都不会给你提出来的，你问她什么时候维护结束就知道了，她只会回你：请耐心等待！！</p>
              <p className="mt-2">第四、不要拖，拖的越久越难出， 时间拖久了发生什么情况都不好说，趁还没冻结帐号，赶紧联系我，网站右上角和底部有我联系方式。QQ 3405554131</p>
            </li>
            <li className="font-bold mb-2">怎么出？收费吗？不会是骗子吧？</li>
            <li className="mb-5">
              <p className="mt-2">我也不是100%能帮你的，需要看你网站才确定能不能出，你帐号能正常登陆，能正常下注玩游戏才可以，冻结封号的不行了，但是你也可以找我帮你看看。</p>
              <p className="mt-2">收费的，我会分批给你提出来， 你收到了再转我这一笔的费用，因此你不用担心上当受骗损失什么的，如果提不出来，你不会再损失一分钱。</p>
            </li>

            <li className="font-bold mb-2">那国内就没有靠谱的不黑玩家的平台吗？</li>
            <li className="mb-5">
              <p>有，但是极少，新手玩家识别不出来。因此，除了你完完全全信得过的朋友给你推荐的平台，其它的都不要碰。</p>
              <p className="mt-2">可以从网站规模，充值方式，页面设计，域名，优惠活动等几个方面就能看出靠不靠谱。</p>
            </li>
          </ol>

          <h3 className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-10">最后最后，祝大家赢多输少，永远不被黑。需要靠谱平台也可以找我。</h3>
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
                <li>
                  <Link
                    href="/"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    首页
                  </Link>
                </li>
                {/* <li>
                  <Link
                    href="/cases"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    成功案例
                  </Link>
                </li> */}
                <li>
                  <Link
                    href="/about"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    关于我们
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    联系方式
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">服务承诺</h3>
              <ul className="space-y-2">
                <li className="text-gray-600 dark:text-gray-400">
                  不成功不收费
                </li>
                <li className="text-gray-600 dark:text-gray-400">
                  专业高效处理
                </li>
                <li className="text-gray-600 dark:text-gray-400">
                  十年出黑经验
                </li>
                <li className="text-gray-600 dark:text-gray-400">
                  资金安全保障
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">联系信息</h3>
              <ul className="space-y-2">
                <li className="text-gray-600 dark:text-gray-400">
                  电话/微信: 18098176438
                </li>
                <li className="text-gray-600 dark:text-gray-400">
                  邮箱: 3405554131@qq.com
                </li>
                <li className="text-gray-600 dark:text-gray-400">
                  QQ: 3405554131
                </li>
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
