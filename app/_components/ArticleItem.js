import Image from "next/image";

export default function ArticleItem({item}) {
    const {source, alt, title, text} = item
  return (
    <div className="flex-shrink-0 flex h-[200px] w-[300px] flex-col items-center justify-center ">
      <div className="relative h-full w-full">
        <Image
          src={source}
          atl={alt}
          fill
          className="object-cover"
        />
      </div>
      <p>{title}</p>
      <p>{text}</p>
    </div>
  );
}
