import PickUpArticle from "@/components/pickUpArticle";
import articles from "@/../mock/mysite";

type Article = {
  image: string;
  title: string;
  date: string;
  author: string;
};

export default function Blogs() {
    return (
        <section id="blog" className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
            blog
        </h2>
            <div className="flex flex-row gap-6 w-full">
            {articles.map((article: Article, idx: number) => (
                <PickUpArticle
                    key={idx}
                    image={article.image}
                    title={article.title}
                    date={article.date}
                    author={article.author}
                />
            ))}
        </div>
          <p className="text-gray-600 dark:text-gray-300 text-center my-4">more</p>
        </section>
        
    );
}
