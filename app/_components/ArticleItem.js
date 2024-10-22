import Image from "next/image";

export default function ArticleItem({ item }) {
  const { source, alt, title, text } = item;

  return (
    <div className="flex-shrink-0 flex h-[200px] w-[300px] flex-col items-center justify-center">
      {/* Image Container */}
      <div className="relative h-full w-full overflow-hidden rounded-lg">
        <div className="group relative h-full w-full">
          {/* Image with hover effect */}
          <Image
            src={source}
            alt={alt}
            fill
            className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" // Apply scale on hover
          />
        </div>
      </div>
      <p className="mt-2 font-semibold">{title}</p>
      <p className="text-gray-500">{text}</p>
    </div>
  );
}
