type TimelineItem = {
    date: string;
    title: string;
    description?: string;
    type?: "qualification" | "admission" | "award";
  };
  
  const timeline: TimelineItem[] = [
    { date: "誕生", title: "誕生", description: "生まれました。" },
    { date: "高専 入学", title: "電子制御工学科", description: "機械、電気、情報の幅広い分野を学び始めました。", type: "admission" },
    { date: "ロボコン", title: "ロボコン出場", description: "ロボットコンテストに出場しました。", type: "award" },
    { date: "ロボカップ", title: "ロボカップ出場", description: "ロボカップにも挑戦しました。", type: "award" },
    { date: "TJSHI", title: "TJSHI参加", description: "TJSHIに参加しました。" },
    { date: "東京農工大 入学", title: "東京農工大学入学", description: "大学で知能情報システム工学を専攻。", type: "admission" },
    { date: "CGARTS", title: "CGARTS コンピュータグラフィクス検定エキスパート取得", description: "CG分野の資格を取得。", type: "qualification" },
    { date: "CGARTS", title: "CGARTS 画像処理検定エキスパート取得", description: "画像処理分野の資格を取得。", type: "qualification" },
    { date: "インターン", title: "インターンシップへ参加", description: "企業で実務経験を積みました。" },
    { date: "技育博", title: "技育博出展", description: "技育博に作品を出展しました。", type: "award" },
    { date: "応用情報", title: "応用情報技術者試験 受験", description: "国家資格に受験しました。", type: "qualification" },
    //{ date: "東京農工大 工学府", title: "東京農工大学工学府入学", description: "大学院に進学しました。", type: "admission" },
  ];
  
  function getIconColor(type?: string) {
    switch (type) {
      case "qualification":
        return "bg-purple-300 dark:bg-purple-700 text-purple-700 dark:text-purple-200";
      case "admission":
        return "bg-pink-300 dark:bg-pink-700 text-pink-700 dark:text-pink-200";
      case "award":
        return "bg-yellow-300 dark:bg-yellow-500 text-yellow-700 dark:text-yellow-200";
      default:
        return "bg-blue-200 dark:bg-blue-700 text-blue-600 dark:text-blue-200";
    }
  }
  
  export default function ProfileTimeline() {
    const reversed = [...timeline].reverse();
    return (
      <section id="profile" className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center">
            profile
        </h2>
        <div className="relative flex flex-col items-center">
          {/* 中央線 */}
          <div className="absolute w-1 bg-gray-300 dark:bg-gray-700 h-full left-1/2 transform -translate-x-1/2 z-0" />
          <ol className="w-full">
            {reversed.map((item, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <li key={idx} className="mb-10 flex w-full justify-between items-center">
                  {/* 左側 */}
                  <div className={`w-5/12 ${isLeft ? "text-right" : "text-left"}`}>
                    {isLeft && (
                      <div>
                        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{item.date}</time>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{item.description}</p>
                      </div>
                    )}
                  </div>
                  {/* 中央アイコン */}
                  <div className="flex flex-col items-center z-10">
                    <span className={`flex items-center justify-center w-6 h-6 rounded-full ring-8 ring-white dark:ring-gray-900 ${getIconColor(item.type)}`}>
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10"/></svg>
                    </span>
                  </div>
                  {/* 右側 */}
                  <div className={`w-5/12 ${!isLeft ? "text-left" : "text-right"}`}>
                    {!isLeft && (
                      <div>
                        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{item.date}</time>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{item.description}</p>
                      </div>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>
    );
  }