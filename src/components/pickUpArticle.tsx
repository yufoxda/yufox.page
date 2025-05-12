import Image from "next/image";

type PickUpArticleProps = {
  image: string;
  title: string;
  date: string;
  author: string;
};

export default function PickUpArticle({ image, title, date, author }: PickUpArticleProps) {
  return (
    <div className="flex items-center bg-white dark:bg-gray-800 rounded-lg shadow p-4 w-full max-w-2xl min-w-1/3">
      <div className="w-48 h-32 relative flex-shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-md"
        />
      </div>
      <div className="ml-6 flex flex-col justify-between h-full">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white">{title}</h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm">{date}</p>
        <p className="text-gray-600 dark:text-gray-300 text-sm">@{author}</p>
      </div>
    </div>
  );
}