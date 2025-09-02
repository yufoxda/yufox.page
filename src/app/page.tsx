import Image from "next/image";
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
        </div>

        <p>
          幼い頃からの「ものづくり」への興味を原点に、大学で情報工学を学んでいます多くの人に。
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
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <h1>
          contact:
        </h1>
          <p>
            x: @yufox_official
          </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © 2025 yufox. All rights reserved.
        </p>

      </footer>
    </div>
  );
}
