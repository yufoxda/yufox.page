import Link from "next"; 
import Skills from "./_components/skills";
import Works from "./_components/works";
import MiniWorks from "./_components/miniWorks";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="h-screen">
          <h1 className="text-4xl font-bold text-center sm:text-left">
            yufox
          </h1>

          <p className="text-lg text-center sm:text-left">
            Japanese university student engineer
          </p>
          <a href="https://blog.yufox.page" className="text-lg text-center sm:text-left text-blue-500 hover:text-blue-700 transition-colors">
            visit my techblog ↗
          </a>
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-2 text-gray-500">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
          </div>
        </div>

        <p>
          幼い頃からの「ものづくり」への興味を原点に、大学で情報工学を学んでいます。多くの人に
        </p>
        <br />
        <p className="font-bold text-4xl text-center">「これがあって良かった」</p>
        <br />
        <p>と思ってもらえる、価値あるプロダクト開発が私の目標です。</p>

        <br />

        <p>
          サークル活動やハッカソン形式の短期開発を通じて、チームで一つのプロダクトを創る面白さと、ユーザーに価値を届けることの重要性を学びました。
        </p>

        <p>
          学習においては、常に課題解決を起点とし、必要な技術を自ら調べ実装までやり遂げる探求心を大切にしています。この強みを活かし、目標実現のために成長し続けたいです。
        </p>

        <Skills />

        <Works />

        <MiniWorks />

      </main>
      <footer className="row-start-3 flex flex-col items-center gap-4 py-8">
        <div className="flex gap-[24px] flex-wrap items-center justify-center">
          <h2 className="font-bold text-gray-900 dark:text-white">Contact</h2>
          <a 
            href="https://x.com/yufox_official" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            X: @yufox_official
          </a>
          <a 
            href="https://github.com/yufoxda" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            GitHub: yufoxda
          </a>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © 2026 yufox. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
