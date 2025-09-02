interface MiniWorkItem {
  id: string;
  title: string;
  overview: string;
  role: string;
  technologies: string[];
}

export const MiniWorksData: MiniWorkItem[] = [
  {
    id: "pos-system",
    title: "学祭用POSレジアプリ",
    overview: "学園祭の模擬店で実際に使用したC++製POSレジアプリ。売上計算、おつり計算、売上記録といった機能を実装し、2日間のイベント期間中、ミスのない安定稼働を実現しました。",
    role: "設計・開発",
    technologies: ["C++", "Siv3D"]
  },
  {
    id: "tower-defense",
    title: "タワーディフェンスゲーム",
    overview: "約10名のチームで開発した3Dタワーディフェンスゲーム。3Dモデリング班のアドバイザーとして後輩への技術指導を行いつつ、背景モデルの制作を担当しました。",
    role: "3Dモデリング班アドバイザー, 背景モデラー",
    technologies: ["Unity", "Blender", "Git", "GitHub"]
  }
];

export default function MiniWorks() {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Mini Works</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {MiniWorksData.map((work) => (
                    <div key={work.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-800">
                        <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{work.title}</h3>

                        <div className="mb-3">
                        <p className="text-sm text-gray-700 dark:text-gray-300">{work.overview}</p>
                    </div>
                    
                    <div className="mb-3">
                        <span className="font-medium text-sm text-gray-900 dark:text-white">役割: </span>
                        <span className="text-sm text-gray-700 dark:text-gray-300">{work.role}</span>
                    </div>
                    
                    <div>
                        <span className="font-medium text-sm text-gray-900 dark:text-white">使用技術: </span>
                        <span className="text-sm text-gray-700 dark:text-gray-300">{work.technologies.join(", ")}</span>
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
}
