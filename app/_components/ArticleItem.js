import Image from "next/image";

export default function ArticleItem({ item, onClick }) {
  const { image_url, alt, title } = item;

  return (
    <div
      className="flex h-[400px] w-[300px] flex-shrink-0 flex-col items-center justify-center cursor-pointer"
      onClick={onClick} // Handle click on the entire component
    >
      {/* Image Container */}
      <div className="relative h-full w-full overflow-hidden rounded-lg">
        <div className="group relative h-full w-full">
          {/* Image with hover effect */}
          <Image
            src={image_url}
            alt={alt}
            fill
            className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" // Apply scale on hover
          />
        </div>
      </div>
      <p className="mt-2 font-semibold">{title}</p>
    </div>
  );
}