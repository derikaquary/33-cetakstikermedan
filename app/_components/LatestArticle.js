import Image from "next/image";
import { article } from "../_data/article";
import ArticleItem from "./ArticleItem";

export default function LatestArticle() {
  return (
    <>
      {/* Big Screen */}
      <div className="flex w-full justify-center bg-gray-200 px-4 py-10">
        <div className="w-full sm:max-w-4xl flex flex-col gap-3">
          <div className="hidden items-center justify-center gap-8 sm:mx-auto sm:flex sm:w-full">
            <div className="h-[3px] w-full bg-gray-400 sm:w-full"></div>
            <div className="w-[100px] text-center text-xl font-semibold text-orange-500 sm:w-full sm:text-3xl">
              Latest Article
            </div>
            <div className="h-[3px] w-full bg-gray-400 sm:w-full"></div>
          </div>
          {/* Horizontal scrolling container */}
          <div className="flex gap-3 overflow-x-auto ">
            {article.map((item) => (
              <ArticleItem item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
