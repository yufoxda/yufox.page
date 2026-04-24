import Image from 'next/image';

export default function Home() {
  return (
    <div className="w-max-screen-lg mx-auto px-4 py-8">
      <h1>yufox</h1>
      <p>student engineer from Japan 24yo</p>
      <p>I wanna develop as ...</p>
      <ul>
        <li>Backend engineer</li>
        <li>Full-stack engineer</li>
        <li>Game developer</li>
      </ul>
      <h3>Contact</h3>
      <ul>
        <li><a href="https://github.com/yufoxda" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        <li><a href="https://x.com/yufox_official" target="_blank" rel="noopener noreferrer">X</a></li>
      </ul>

      <Image src="/globe.svg" alt="Profile Picture" width={200} height={200} className="rounded-full mt-4" />

      <h1>Experience</h1>
      <h2>Education</h2>
      <ul>
        <li>
          <div>
            <h3>高等専門学校</h3>
            <div>
              <p>電子制御工学科</p>
                <p>2019/4 - 2024/3</p>
            </div>
          </div>
        </li>

        <li>
          <div>
            <h3>大学</h3>
            <div>
              <p>工学部</p>
              <p>2024/4 - 2026/3</p>
            </div>
            <div>
              <p>工学府</p>
              <p>2026/4 - now</p>
            </div>
          </div>
        </li>
      </ul>
      <h2>certifications</h2>
      <ul>
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

      <h1>Projects</h1>
      <div>
        <h2>楽譜館</h2>
        <p>楽譜検索アプリ</p>
        <p>部室所蔵の楽譜を検索</p>
        <ul>
          <li>nextjs</li>
          <li>supabase</li>
          <li>github actions</li>
          <li>cloudflare workers</li>
        </ul>

        <div> 
          <a href="https://github.com/ompoo/scoremanager" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          source
        </a>
        </div>
        <div>
          <a href="https://scores.ompoo.org" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          website
        </a>
        </div>      
      </div>
      <div>
        <h2>音風</h2>
        <p>エレクトーンサークル公式サイト</p>
        <ul>
          <li>nextjs</li>
          <li>figma</li>
        </ul>
        <div>
          <a href="https://www.ompoo.org" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          website
        </a>
        </div>      
      </div>
      <div>
        <h2>プライベートクラウド</h2>
        <p>サークル専用クラウドサーバーのホスト</p>
        <ul>
          <li>ubuntu</li>
          <li>nextcloud</li>
          <li>keycloak</li>
          <li>apache</li>
          <li>mysql</li>
          <li>cloudflare</li>
          <li>grafana</li>
        </ul>
      </div>
      <div>
        <h2>Ricoshot</h2>
        <p>文化祭展示用ゲーム</p>
        <p>背景モデル担当</p>
        <ul>
          <li>unity</li>
          <li>blender</li>
        </ul>
        <div>
          <a href="https://github.com/tuatmcc/SchoolFestival2024_Unity" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          source
          </a>
        </div>
      </div>

      <h1>pasts</h1>
      <ul>
        <li>
          <h2>C言語でTIFFファイルを読み込む</h2>
          <p>2026/1/19</p>
          <ul>
            <li>c言語</li>
            <li>画像処理</li>
          </ul>
        </li>
        <li>
          <h2>VS Code拡張機能でWebviewを使ってみる</h2>
          <p>2025/12/22</p>
          <ul>
            <li>VS Code</li>
            <li>Webview</li>
            <li>TypeScript</li>
          </ul>
        </li>
      </ul>

      <h1>Contact</h1>
      <p>お気軽にご連絡ください！</p>
      <ul>
        <li><a href="" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        <li><a href="" target="_blank" rel="noopener noreferrer">X</a></li>
      </ul>
    </div>
  );
}
