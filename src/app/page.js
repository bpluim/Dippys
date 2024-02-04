import { getAllArticles, getSideBySide } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";
import SideBySide from "@/components/SideBySide";

export default async function Home() {
  const articles = await getAllArticles();
  const mountainSection = await getSideBySide("Mountains");
  const pyramidSection = await getSideBySide("Pyramid");

  const mountains = {
    imageUrl: mountainSection.image.url,
    imageLeft: mountainSection.imageLeft,
    title: mountainSection.title,
    description: mountainSection.description,
    buttonText: mountainSection.buttonText,
    buttonUrl: mountainSection.buttonUrl,
  };

  const pyramids = {
    imageUrl: pyramidSection.image.url,
    imageLeft: pyramidSection.imageLeft,
    title: pyramidSection.title,
    description: pyramidSection.description,
    buttonText: pyramidSection.buttonText,
    buttonUrl: pyramidSection.buttonUrl,
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white dark:bg-black">
      <section className="w-full pt-12">
        <div className="mx-auto container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-zinc-900 dark:text-zinc-50">
                Welcome to our Knowledge Base
              </h1>
              <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                Discover our latest articles and stay up to date with the newest
                technologies, features, and trends.
              </p>
            </div>
          </div>
          <div className="space-y-12">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {articles && articles.map((article) => (
                  <article key={article.sys.id} className="h-full flex flex-col rounded-lg shadow-lg overflow-hidden bg-black dark:bg-white">
                    <Image
                      alt="placeholder"
                      className="aspect-[4/3] object-cover w-full"
                      height="263"
                      src={article.articleImage.url}
                      width="350"
                      priority
                    />
                    <div className="flex-1 p-6">
                      <Link href={`/articles/${article.slug}`}>
                        <h3 className="text-2xl font-bold leading-tight text-zinc-50 dark:text-zinc-950  py-4">
                          {article.title}
                        </h3>
                      </Link>
                      <div className="inline-block rounded-full bg-zinc-100 px-3 py-1 text-sm font-semibold text-zinc-800">
                        {article.categoryName}
                      </div>
                      <p className="max-w-none text-zinc-500 mt-4 mb-2 text-sm dark:text-zinc-400">
                        {article.summary}
                      </p>
                      <p className="max-w-none text-zinc-600 mt-2 mb-2 text-sm font-bold dark:text-zinc-400">
                        Written by: {article.authorName}
                      </p>
                      <div className="flex justify-end">
                        <Link
                          className="inline-flex h-10 items-center justify-center text-sm font-medium"
                          href={`/articles/${article.slug}`}
                        >
                          Read More →
                        </Link>
                      </div>
                    </div>
                  </article>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="w-full pt-12">
        <div className="mx-auto container space-y-12 px-4 md:px-6">
          <div className="space-y-12">
            {mountains && (
              <SideBySide {...mountains}/>
            )}
          </div>
        </div>
      </section>
      <section className="w-full pt-12">
        <div className="mx-auto container space-y-12 px-4 md:px-6">
          <div className="space-y-12">
            {mountains && (
              <SideBySide {...pyramids}/>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}