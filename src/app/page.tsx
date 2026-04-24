import Image from 'next/image';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className='flex w-full'>
        <div className='flex-1'>
          <h1 className=''>yufox</h1>
          <p>28卒　学生エンジニア</p>
          <p>希望職種</p>
          <ul className='list-disc pl-5'>
            <li>Backend engineer</li>
            <li>Full-stack engineer</li>
            <li>Game developer</li>
          </ul>
          <h3>SNS</h3>
          <ul className='flex flex-row gap-4'>
            <li className='list-none'><a href="https://github.com/yufoxda" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li className='list-none'><a href="https://x.com/yufox_official" target="_blank" rel="noopener noreferrer">X</a></li>
          </ul>
        </div>
        <Image src="/globe.svg" alt="Profile Picture" width={200} height={200} className="rounded-full mt-4" />
      </div>
      

      
      <h1 className='text-center mt-10'>Experience</h1>
      <h2>Education</h2>
      <div className='mt-2 grid grid-cols-[1fr_auto_auto_auto] items-baseline gap-x-2 gap-y-1'>
        <h3 className='col-span-4 mt-1 ml-6'>高等専門学校</h3>
        <p className='ml-12'>電子制御工学科</p>
        <p className='tabular-nums'>2019/4</p>
        <span>-</span>
        <p className='tabular-nums'>2024/3</p>

        <h3 className='col-span-4 mt-2 ml-6'>大学</h3>
        <p className='ml-12'>工学部</p>
        <p className='tabular-nums'>2024/4</p>
        <span>-</span>
        <p className='tabular-nums'>2026/3</p>

        <p className='ml-12'>工学府</p>
        <p className='tabular-nums'>2026/4</p>
        <span>-</span>
        <p className='tabular-nums text-center'>now</p>
      </div>
      <h2>Certifications</h2>
      <ul className=''>
        <li>
          応用情報技術者試験
        </li>
        <li>
          画像処理エンジニア検定 エキスパート
        </li>
        <li>
          CGエンジニア検定 エキスパート
        </li>
      </ul>

      <h1 className='text-center'>Projects</h1>
      <div className='mt-6 grid grid-cols-1 gap-6 md:grid-cols-2'>
        <div className='rounded-xl border border-gray-200 p-5'>
          <h2 className='text-xl font-semibold'>楽譜館</h2>
          <p className='mt-2'>楽譜検索アプリ</p>
          <p>部室所蔵の楽譜を検索</p>
          <ul className='mt-3 list-disc pl-5'>
            <li>nextjs</li>
            <li>supabase</li>
            <li>github actions</li>
            <li>cloudflare workers</li>
          </ul>

          <div className='mt-4 flex gap-4'>
            <a href="https://github.com/ompoo/scoremanager" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              source
            </a>
            <a href="https://scores.ompoo.org" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              website
            </a>
          </div>
        </div>

        <div className='rounded-xl border border-gray-200 p-5'>
          <h2 className='text-xl font-semibold'>音風</h2>
          <p className='mt-2'>エレクトーンサークル公式サイト</p>
          <ul className='mt-3 list-disc pl-5'>
            <li>nextjs</li>
            <li>figma</li>
          </ul>
          <div className='mt-4'>
            <a href="https://www.ompoo.org" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              website
            </a>
          </div>
        </div>

        <div className='rounded-xl border border-gray-200 p-5'>
          <h2 className='text-xl font-semibold'>プライベートクラウド</h2>
          <p className='mt-2'>サークル専用クラウドサーバーのホスト</p>
          <ul className='mt-3 list-disc pl-5'>
            <li>ubuntu</li>
            <li>nextcloud</li>
            <li>keycloak</li>
            <li>apache</li>
            <li>mysql</li>
            <li>cloudflare</li>
            <li>grafana</li>
          </ul>
        </div>

        <div className='rounded-xl border border-gray-200 p-5'>
          <h2 className='text-xl font-semibold'>Ricoshot</h2>
          <p className='mt-2'>文化祭展示用ゲーム</p>
          <p>背景モデル担当</p>
          <ul className='mt-3 list-disc pl-5'>
            <li>unity</li>
            <li>blender</li>
          </ul>
          <div className='mt-4'>
            <a href="https://github.com/tuatmcc/SchoolFestival2024_Unity" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              source
            </a>
          </div>
        </div>
      </div>
      

      <h1 className='text-center'>pasts</h1>
      <ul className='mt-6 grid grid-cols-1 gap-5'>
        <li className='rounded-xl border border-gray-200 p-4 shadow-sm'>
          <div className='flex justify-between'>
            <h2 className='!m-0'>C言語でTIFFファイルを読み込む</h2>
            <p className='m-0 text-gray-600'>2026/1/19</p>
          </div>
          
          <ul className='mt-3 flex flex-wrap gap-2'>
            <li className='list-none rounded-full bg-gray-100 px-3 py-1 text-sm'>c言語</li>
            <li className='list-none rounded-full bg-gray-100 px-3 py-1 text-sm'>画像処理</li>
          </ul>
        </li>
        <li className='rounded-xl border border-gray-200 p-4 shadow-sm'>
          <div className='flex justify-between'>
            <h2 className='!mt-0'>VS Code拡張機能でWebviewを使ってみる</h2>
            <p className='text-sm text-gray-600'>2025/12/22</p>
          </div>
          <ul className='mt-3 flex flex-wrap gap-2'>
            <li className='list-none rounded-full bg-gray-100 px-3 py-1 text-sm'>VS Code</li>
            <li className='list-none rounded-full bg-gray-100 px-3 py-1 text-sm'>Webview</li>
            <li className='list-none rounded-full bg-gray-100 px-3 py-1 text-sm'>TypeScript</li>
          </ul>
        </li>
      </ul>

      <h1 className='text-center'>Contact</h1>
      <p>お気軽にご連絡ください！</p>
      <ul>
        <li><a href="" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        <li><a href="" target="_blank" rel="noopener noreferrer">X</a></li>
      </ul>
    </div>
  );
}
