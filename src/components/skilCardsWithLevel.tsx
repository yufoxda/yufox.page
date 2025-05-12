interface SkillCardProps {
  name: string;
  level: 1 | 2 | 3 | 4 | 5; // 1: 初心者, 2: 初級, 3: 中級, 4: 上級, 5: エキスパート
}

const getLevelColor = (level: number) => {
  switch (level) {
    case 1:
      return 'bg-blue-500';
    case 2:
      return 'bg-green-500';
    case 3:
      return 'bg-yellow-500';
    case 4:
      return 'bg-orange-500';
    case 5:
      return 'bg-red-500';
    default:
      return 'bg-gray-500';
  }
};

const getLevelText = (level: number) => {
  switch (level) {
    case 1:
      return '初心者';
    case 2:
      return '初級';
    case 3:
      return '中級';
    case 4:
      return '上級';
    case 5:
      return 'エキスパート';
    default:
      return '';
  }
};

export default function SkillCard({ name, level }: SkillCardProps) {
  return (
    <div
      className={`
        inline-block
        px-4 py-2 rounded-lg shadow-sm
        transition-all duration-300 ease-in-out
        hover:scale-105 hover:shadow-lg
        bg-gray-100 dark:bg-gray-800
        relative overflow-hidden
        group
        hover:min-w-[200px]
      `}
    >
      {/* レベルバー（ホバー時のみ表示） */}
      <div className="absolute top-0 left-0 h-full w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div
          className={`h-full transition-all duration-300 ${getLevelColor(level)}`}
          style={{ width: `${(level / 5) * 100}%`, opacity: 0.1 }}
        />
      </div>

      <div className="flex flex-col items-center space-y-2 relative z-10">
        <p className="text-lg font-medium text-gray-800 dark:text-gray-200 whitespace-nowrap">
          {name}
        </p>
        {/* レベル表示（ホバー時のみ表示） */}
        <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 absolute top-full left-0 w-full pt-2">
          <div className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-300 ${getLevelColor(level)}`}
              style={{ width: `${(level / 5) * 100}%` }}
            />
          </div>
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {getLevelText(level)}
          </span>
        </div>
      </div>
    </div>
  );
}