import Image from "next/image";
import Skills from "@/components/skiles";
import BestWorks from "@/components/bestWorks";
import Blogs from "@/components/blogs";
import PickUpArticle from "@/components/pickUpArticle";
import ProfileTimeline from "@/components/profileTimeline";



export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">yufox</h1>
          <nav className="space-x-4">
            <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">About</a>
            <a href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Skills</a>
            <a href="#works" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Works</a>
            <a href="#blog" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Blog</a>
            <a href="#profile" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">profile</a>
  
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section id="about" className="mb-16">
          <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            yufox
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Junior Engineer
          </p>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            About
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            東京農工大学の学生です。
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            より便利な生活にテクノロジーを使って貢献したいと考えています。
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            個人やサークルで、時に依頼を受けて、ゲームやwebサイト、アプリを制作しています。
          </p>
        </section>

        <Skills />
        <BestWorks />

        <Blogs />

        <ProfileTimeline />

      </main>

      <footer className="container mx-auto px-4 py-8 border-t border-gray-200 dark:border-gray-700">
        <p className="text-center text-gray-600 dark:text-gray-400">
          © yufox All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
