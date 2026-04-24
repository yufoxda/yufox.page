import Image from 'next/image';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className='flex w-full'>
        <div className='flex-1'>
          <h1>yufox</h1>
          <p>28卒　学生エンジニア</p>
          <p className='mt-6'>希望職種</p>
          <ul className='list-disc pl-5'>
            <li>Backend engineer</li>
            <li>Full-stack engineer</li>
            <li>Game developer</li>
          </ul>
          <ul className='flex flex-row gap-4 mt-6'>
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
      <div className='mt-6 grid grid-cols-1 items-stretch gap-6 md:grid-cols-2'>
        <div className='flex h-full min-h-[22rem] flex-col rounded-xl border border-gray-200 p-5'>
          <Image src="/scoremanager.png" alt="scoremanager logo" width={280} height={140} className='mb-4 h-32 w-full object-contain' />
          <h2 className='text-xl font-semibold'>楽譜館</h2>
          <p>部室所蔵の楽譜を検索</p>

          <div className='mt-auto space-y-4 pt-4'>
            <ul className='flex flex-wrap gap-2'>
              <li className='list-none rounded-full bg-gray-100 px-2.5 py-0.5 text-xs'>nextjs</li>
              <li className='list-none rounded-full bg-gray-100 px-2.5 py-0.5 text-xs'>supabase</li>
              <li className='list-none rounded-full bg-gray-100 px-2.5 py-0.5 text-xs'>github actions</li>
              <li className='list-none rounded-full bg-gray-100 px-2.5 py-0.5 text-xs'>cloudflare workers</li>
            </ul>

            <div className='flex gap-4'>
              <a href="https://github.com/ompoo/scoremanager" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                source
              </a>
              <a href="https://scores.ompoo.org" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                website
              </a>
            </div>
          </div>
        </div>

        <div className='flex h-full min-h-[22rem] flex-col rounded-xl border border-gray-200 p-5'>
          <Image src="/ompoo.png" alt="ompoo logo" width={280} height={140} className='mb-4 h-32 w-full object-contain' />
          <h2 className='text-xl font-semibold'>音風</h2>
          <p className='mt-2'>エレクトーンサークル公式サイト</p>
          <div className='mt-auto space-y-4 pt-4'>
            <ul className='flex flex-wrap gap-2'>
              <li className='list-none rounded-full bg-gray-100 px-2.5 py-0.5 text-xs'>nextjs</li>
              <li className='list-none rounded-full bg-gray-100 px-2.5 py-0.5 text-xs'>figma</li>
            </ul>

            <div>
              <a href="https://www.ompoo.org" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                website
              </a>
            </div>
          </div>
        </div>

        <div className='flex h-full min-h-[22rem] flex-col rounded-xl border border-gray-200 p-5'>
          <h2 className='text-xl font-semibold'>プライベートクラウド</h2>
          <p className='mt-2'>サークル専用クラウドサーバーのホスト</p>
          <div className='mt-auto pt-4'>
            <ul className='flex flex-wrap gap-2'>
              <li className='list-none rounded-full bg-gray-100 px-2.5 py-0.5 text-xs'>ubuntu</li>
              <li className='list-none rounded-full bg-gray-100 px-2.5 py-0.5 text-xs'>nextcloud</li>
              <li className='list-none rounded-full bg-gray-100 px-2.5 py-0.5 text-xs'>keycloak</li>
              <li className='list-none rounded-full bg-gray-100 px-2.5 py-0.5 text-xs'>apache</li>
              <li className='list-none rounded-full bg-gray-100 px-2.5 py-0.5 text-xs'>mysql</li>
              <li className='list-none rounded-full bg-gray-100 px-2.5 py-0.5 text-xs'>cloudflare</li>
              <li className='list-none rounded-full bg-gray-100 px-2.5 py-0.5 text-xs'>grafana</li>
            </ul>
          </div>
        </div>

        <div className='flex h-full min-h-[22rem] flex-col rounded-xl border border-gray-200 p-5'>
          <Image src="/ricoshot.png" alt="ricoshot logo" width={280} height={140} className='mb-4 h-32 w-full object-contain' />
          <h2 className='text-xl font-semibold'>Ricoshot</h2>
          <p className='mt-2'>文化祭展示用ゲーム</p>
          <p>背景モデル担当</p>
          <div className='mt-auto space-y-4 pt-4'>
            <ul className='flex flex-wrap gap-2'>
              <li className='list-none rounded-full bg-gray-100 px-2.5 py-0.5 text-xs'>unity</li>
              <li className='list-none rounded-full bg-gray-100 px-2.5 py-0.5 text-xs'>blender</li>
            </ul>

            <div>
              <a href="https://github.com/tuatmcc/SchoolFestival2024_Unity" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                source
              </a>
            </div>
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
            <li className='list-none rounded-full bg-gray-100 px-2.5 py-0.5 text-xs'>c言語</li>
            <li className='list-none rounded-full bg-gray-100 px-2.5 py-0.5 text-xs'>画像処理</li>
          </ul>
        </li>
        <li className='rounded-xl border border-gray-200 p-4 shadow-sm'>
          <div className='flex justify-between'>
            <h2 className='!mt-0'>VS Code拡張機能でWebviewを使ってみる</h2>
            <p className='text-sm text-gray-600'>2025/12/22</p>
          </div>
          <ul className='mt-3 flex flex-wrap gap-2'>
            <li className='list-none rounded-full bg-gray-100 px-2.5 py-0.5 text-xs'>VS Code</li>
            <li className='list-none rounded-full bg-gray-100 px-2.5 py-0.5 text-xs'>Webview</li>
            <li className='list-none rounded-full bg-gray-100 px-2.5 py-0.5 text-xs'>TypeScript</li>
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
