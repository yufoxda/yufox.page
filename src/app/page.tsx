import Image from 'next/image';
import icon from '../../public/icon.png';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className='flex w-full'>
        <div className='flex-1'>
          <h1>yufox</h1>
          <p>28卒<span></span>学生エンジニア</p>
          <p className='mt-6'>希望職種</p>
          <ul className=''>
            <li className='ml-8 list-disc'>Backend engineer</li>
            <li className='ml-8 list-disc'>Full-stack engineer</li>
            <li className='ml-8 list-disc'>Game developer</li>
          </ul>
          <ul className='flex flex-row gap-4 mt-6'>
            <li className='list-none'><a href="https://github.com/yufoxda" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Image src="/GitHub_Lockup_Black.png" alt="GitHub Logo" width={80} height={32} className='w-auto h-5' />
            </a></li>
            <li className='list-none'><a href="https://x.com/yufox_official" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Image src="/xlogo.svg" alt="X Logo" width={24} height={24} className='w-5 h-5 brightness-0'/>
            </a></li>
          </ul>
        </div>
        <Image src={icon} alt="Profile Picture" className="mt-4 h-auto w-[200px] scale-x-[-1] object-cover rounded-full" />
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
      <ul >
        <li className='px-6'>
          応用情報技術者試験
        </li>
        <li className='px-6'>
          画像処理エンジニア検定 エキスパート
        </li>
        <li className='px-6'>
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
              <li className='list-none rounded-full bg-gray-100 dark:bg-gray-700 px-2.5 py-0.5 text-xs dark:text-gray-100'>nextjs</li>
              <li className='list-none rounded-full bg-gray-100 dark:bg-gray-700 px-2.5 py-0.5 text-xs dark:text-gray-100'>supabase</li>
              <li className='list-none rounded-full bg-gray-100 dark:bg-gray-700 px-2.5 py-0.5 text-xs dark:text-gray-100'>github actions</li>
              <li className='list-none rounded-full bg-gray-100 dark:bg-gray-700 px-2.5 py-0.5 text-xs dark:text-gray-100'>cloudflare workers</li>
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
              <li className='list-none rounded-full bg-gray-100 dark:bg-gray-700 px-2.5 py-0.5 text-xs dark:text-gray-100'>nextjs</li>
              <li className='list-none rounded-full bg-gray-100 dark:bg-gray-700 px-2.5 py-0.5 text-xs dark:text-gray-100'>figma</li>
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
              <li className='list-none rounded-full bg-gray-100 dark:bg-gray-700 px-2.5 py-0.5 text-xs dark:text-gray-100'>ubuntu</li>
              <li className='list-none rounded-full bg-gray-100 dark:bg-gray-700 px-2.5 py-0.5 text-xs dark:text-gray-100'>nextcloud</li>
              <li className='list-none rounded-full bg-gray-100 dark:bg-gray-700 px-2.5 py-0.5 text-xs dark:text-gray-100'>keycloak</li>
              <li className='list-none rounded-full bg-gray-100 dark:bg-gray-700 px-2.5 py-0.5 text-xs dark:text-gray-100'>apache</li>
              <li className='list-none rounded-full bg-gray-100 dark:bg-gray-700 px-2.5 py-0.5 text-xs dark:text-gray-100'>mysql</li>
              <li className='list-none rounded-full bg-gray-100 dark:bg-gray-700 px-2.5 py-0.5 text-xs dark:text-gray-100'>cloudflare</li>
              <li className='list-none rounded-full bg-gray-100 dark:bg-gray-700 px-2.5 py-0.5 text-xs dark:text-gray-100'>grafana</li>
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
              <li className='list-none rounded-full bg-gray-100 dark:bg-gray-700 px-2.5 py-0.5 text-xs dark:text-gray-100'>unity</li>
              <li className='list-none rounded-full bg-gray-100 dark:bg-gray-700 px-2.5 py-0.5 text-xs dark:text-gray-100'>blender</li>
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
          <a href='https://blog.yufox.page/2026-01-19-0/' target="_blank" rel="noopener noreferrer"> 
          <div className='flex justify-between items-start'>
            <h2 className='!m-0'>C言語でTIFFファイルを読み込む</h2>
            <p className='!m-0 text-gray-600'>2026/1/19</p>
          </div>
          
          <ul className='mt-3 flex flex-wrap gap-2'>
            <li className='list-none rounded-full bg-gray-100 dark:bg-gray-700 px-2.5 py-0.5 text-xs dark:text-gray-100'>c言語</li>
            <li className='list-none rounded-full bg-gray-100 dark:bg-gray-700 px-2.5 py-0.5 text-xs dark:text-gray-100'>画像処理</li>
          </ul>
          </a>
        </li>
        <li className='rounded-xl border border-gray-200 p-4 shadow-sm'>
          <a href='https://blog.yufox.page/2025-12-22-0/' target="_blank" rel="noopener noreferrer">
          <div className='flex justify-between items-start'>
            <h2 className='!mt-0'>VS Code拡張機能でWebviewを使ってみる</h2>
            <p className='text-sm text-gray-600'>2025/12/22</p>
          </div>
          <ul className='mt-3 flex flex-wrap gap-2'>
            <li className='list-none rounded-full bg-gray-100 dark:bg-gray-700 px-2.5 py-0.5 text-xs dark:text-gray-100'>VS Code</li>
            <li className='list-none rounded-full bg-gray-100 dark:bg-gray-700 px-2.5 py-0.5 text-xs dark:text-gray-100'>Webview</li>
            <li className='list-none rounded-full bg-gray-100 dark:bg-gray-700 px-2.5 py-0.5 text-xs dark:text-gray-100'>TypeScript</li>
          </ul>
          </a>
        </li>
      </ul>

      <h1 className='text-center'>Contact</h1>
      <div className='mx-auto flex flex-wrap items-center justify-center gap-x-3 gap-y-2'>
        <p className='whitespace-nowrap'>
          お気軽にご連絡ください！:
        </p>
        <ul className='flex flex-row items-center justify-center gap-5'>
          <li className='list-none'>
            <a href="https://github.com/yufoxda" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Image src="/GitHub_Lockup_Black.png" alt="GitHub Logo" width={80} height={32} className='w-auto h-5' />
            </a>
          </li>
          <li className='list-none'><a href="https://x.com/yufox_official" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <Image src="/xlogo.svg" alt="X Logo" width={24} height={24} className='w-5 h-5 brightness-0'/>
          </a></li>
        </ul>
      </div>
      
      
    </div>
  );
}
