
interface WorkItem {
  id: string;
  title: string;
  subtitle: string;
  concept: string;
  description: string;
  features: string[];
  techStack: {
    [key: string]: string[];
  };
  highlights: {
    title: string;
    description: string;
  }[];
  images?: string[];
}

export const WorksData: WorkItem[] = [
  {
    id: "scores",
    title: "楽譜館",
    subtitle: " https://scores.ompoo.org/　エレクトーンサークルの「楽譜を探す・買う」手間を解消する管理アプリ",
    concept: "属人化していた楽譜管理を、誰もがアクセスできるデータベースへ",
    description: "所属するエレクトーンサークルでは、楽譜が物理的に保管されているため、「新歓で楽譜を買う際に、既に持っているか分からない」「コンサートで弾きたい曲が部室にあるか、探しに行かないと分からない」といった課題がありました。この課題を解決するため、サークルが所蔵する全ての楽譜情報をデータベースで一元管理し、いつでも・どこでも検索・確認できるWebアプリケーション「楽譜館」を開発しました。",
    features: [
      "楽譜・楽譜集の横断検索機能",
      "キーワード検索 (作詞/作曲/編曲/アーティスト/主題歌/難易度)",
      "公式販売ページへのワンクリック遷移",
      "バーコードスキャンによる楽譜情報の自動登録・追加機能",
      "Supabaseを利用したユーザー認証機能"
    ],
    techStack: {
      frontend: ["Next.js", "TypeScript", "React", "TanStack Query", "TanStack Table"],
      backend: ["Supabase (Auth, Database, Storage)"],
      design: ["Figma"],
      deployment: ["cloudflare workers"]
    },
    highlights: [
      {
        title: "【最大の挑戦】バーコードスキャンによる楽譜情報の自動登録",
        description: "数百冊に及ぶ楽譜情報を手入力するのは非現実的でした。そこで、スマートフォンのカメラで楽譜集のバーコードを読み取り、Webスクレイピングによって書籍情報を自動で取得・整形してデータベースに登録する仕組みを実装しました。HTMLからの特定情報抽出、特にアーティスト名などに含まれる特殊文字の処理や正規表現の実装に苦労しましたが、これによりデータ登録の手間を9割以上削減し、アプリの実用性を大きく向上させることができました。"
      },
      {
        title: "モダン技術によるパフォーマンスと拡張性の追求",
        description: "Next.jsのSSR (サーバーサイドレンダリング) を活用し、クライアント側の負荷を軽減。データフェッチにはTanStack Queryを導入し、キャッシュを最適化することで、大量の楽譜データからでも高速な検索体験を実現しました。また、データベースは第三正規形を意識して設計し、将来的な機能追加にも対応できる拡張性を確保。SupabaseのRLS (Row Level Security) を設定することで、部員が安全に楽譜情報を追加・編集できる環境を構築しました。"
      },
      {
        title: "ユーザーの課題解決を最優先したUI/UX設計",
        description: "「一度見れば使い方がわかる」直感的なデザインを目標とし、Figmaでプロトタイプを作成。開発段階からサークルのメンバーに実際に触ってもらい、フィードバックを元にUI改善を繰り返すことで、ITに詳しくない部員でも迷わず使えるアプリケーションを目指しました。"
      }
    ]
  },
  {
    id: "cloud",
    title: "サークル専用プライベートクラウド",
    subtitle: "サークルのデジタル資産（楽譜・動画）を安全に共有・保管するためのインフラ構築・運用",
    concept: "一度きりで埋もれてしまう作品を、いつでもアクセスできる「共有財産」へ",
    description: "サークルでは、部員が作成した楽譜やコンサートの映像といった貴重なデジタル資産が、個人のPCや部室のHDDに散在し、有効活用されていないという課題がありました。一方で、プライベートな内容も含むため、一般的なクラウドサービスへのアップロードは躊躇される状況でした。そこで、部員だけが安全にアクセスできるプライベートクラウド環境を自宅サーバーに構築・運用。これにより、過去の資産を誰もが手軽に閲覧・活用できる仕組みを整えました。",
    features: [
      "Keycloakによる一元的なアカウント認証・管理",
      "Nextcloudを用いたファイル共有・管理機能",
      "自作楽譜のアップロードおよびプレビュー",
      "過去のコンサート動画のストリーミング視聴",
      "フォルダ/ファイル単位での柔軟な閲覧権限設定"
    ],
    techStack: {
      infrastructure: ["Linux (Ubuntu Server)", "Apache", "Samba"],
      backend: ["Nextcloud", "Keycloak"],
      database: ["MariaDB"],
      hardware: ["N100 Mini PC"]
    },
    highlights: [
      {
        title: "低スペックマシンにおけるパフォーマンスチューニング",
        description: "限られたリソース（N100 Mini PC）の中で快適な動作を実現するため、徹底的なパフォーマンスチューニングを行いました。Apacheのプロセス数やキャッシュ設定、MariaDBのバッファプールサイズなどを公式ドキュメントや技術ブログを参考に調整。試行錯誤を繰り返すことで、複数人が同時に動画を再生しても遅延の少ない、安定したサービス稼働を実現しました。"
      },
      {
        title: "Keycloak連携によるセキュアで独立した認証基盤の構築",
        description: "単にNextcloudを導入するだけでなく、認証基盤としてKeycloakを採用しました。これにより、将来的に他のサービス（例: サークル内Wikiなど）を導入した際にも、同じアカウント情報でログインできる拡張性の高い認証システムを構築。サークルのITインフラの中核を担う設計を意識しました。"
      },
      {
        title: "AIを活用した自律的な問題解決と学習",
        description: "NextcloudとKeycloakの連携は日本語の情報が少なく、公式ドキュメントの読解にも時間がかかりました。そこで、ChatGPTなどのAIを壁打ち相手として活用。「まず何から始めるべきか」「この設定項目は何を意味するのか」といった質問をステップバイステップで投げかけ、対話を通じて複雑なシステムへの理解を深めながら構築をやり遂げました。未知の技術に対しても、現代的なツールを駆使して自律的に学習・課題解決できることが私の強みです。"
      }
    ]
  },
  {
    id: "tapla",
    title: "tapla",
    subtitle: "https://tapla.ompoo.org/ サークルの簡単にイベント日程調整ができる予定共有アプリ　",
    concept: "面倒な「繰り返し入力」をゼロに。",
    description: "サークルで従来使用していた日程調整ツール「tappy」には、「イベントごとに毎回、自分の空き時間を入力し直さなければならない」という課題がありました。そこで、ユーザー認証機能を追加し、一度入力した予定を別イベント作成時に自動入力することで、日程調整の手間を大幅に削減する後継アプリケーション「tapla」を開発しました。既存の便利な体験（tappy）を、より発展（++）させるという思いを込めて命名しました。",
    features: [
      "Keycloakを利用したSSO（シングルサインオン）/ Google認証",
      "予定の自動入力機能による、複数イベントへの迅速な回答",
      "日程候補への参加可否の投票機能",
      "イベント参加メンバーの投票状況のリアルタイム閲覧",
      "イベント投票ページの作成・共有機能"
    ],
    techStack: {
      frontend: ["Next.js", "TypeScript","tanstack (table,form)"],
      backend: ["Cloudflare Workers", "Supabase (Database)"],
      authentication: ["Keycloak", "Supabase (Auth)", "Google Auth"],
      deployment: ["vercel"],
      design: ["Figma"]
    },
    highlights: [
      {
        title: "KeycloakとGoogle認証による、高度でパスワードレスな体験",
        description: "サークル専用クラウドとアカウント情報を共通化するため、KeycloakをIdP（IDプロバイダ）としたSSO（シングルサインオン）を実装。さらにGoogleアカウントでのログインにも対応し、ユーザーがパスワードを覚える必要のない、セキュアで快適な認証体験を構築しました。"
      },
      {
        title: "リアルタイム性とセキュリティを両立するアーキテクチャ",
        description: "誰かが投票すると、その結果が他のメンバーの画面にも即時反映されるリアルタイム性をSupabaseのRealtime機能で実現。データベースへのアクセスはSupabaseのRLS (Row Level Security) で厳格に制御し、自分以外のユーザーの予定を不正に編集できないよう、安全性を担保しています。"
      },
      {
        title: "【技術的挑戦】パフォーマンスを意識した非正規化スキーマ設計",
        description: "最も苦労したのは、ユーザーから送られてくる投票データ（{ \"日付\": [\"10時\", \"11時\"] }）を、ユーザーごとの参加可能時間データ（{ \"ユーザーID\": [\"日付T10:00\", \"日付T11:00\"] }）へ効率的に変換・保存する部分です。当初は正規化されたスキーマを検討しましたが、データの読み出し時に複雑なクエリが必要になるため、あえて冗長性を持たせたスキーマ（非正規化）を設計。これによりデータの整形ロジックは複雑になりましたが、読み込み時のパフォーマンスを大幅に向上させることに成功しました。アプリケーションの特性に合わせた最適なデータベース設計を、トレードオフを考慮しながら判断する良い経験となりました。"
      }
    ]
  }

];

export default function Works() {
    return (
        <div className="space-y-12">
            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Works</h2>
            
            {WorksData.map((work) => (
                <div key={work.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-lg bg-white dark:bg-gray-800">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{work.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">{work.subtitle}</p>
                    
                    <div className="mb-4">
                        <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">コンセプト</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">{work.concept}</p>
                    </div>
                    
                    <div className="mb-4">
                        <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">概要</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">{work.description}</p>
                    </div>
                    
                    <div className="mb-4">
                        <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">主な機能</h4>
                        <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
                            {work.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    </div>
                    
                    <div className="mb-4">
                        <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">使用技術</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            {Object.entries(work.techStack).map(([category, technologies]) => (
                                <div key={category}>
                                    <span className="font-medium capitalize text-gray-900 dark:text-white">{category}:</span>
                                    <div className="text-gray-700 dark:text-gray-300">{technologies.join(", ")}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div className="mb-4">
                        <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">工夫した点・アピールポイント</h4>
                        <div className="space-y-4">
                            {work.highlights.map((highlight, index) => (
                                <div key={index}>
                                    <h5 className="font-medium text-sm mb-1 text-gray-900 dark:text-white">{highlight.title}</h5>
                                    <p className="text-sm text-gray-700 dark:text-gray-300">{highlight.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
