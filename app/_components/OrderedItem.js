import Image from "next/image";

export default function OrderedItem({ item }) {
  const { image_url, alt, name, price, category } = item;
  return (
    <div className="flex flex-1 gap-3 p-4 mt-4">
      <div className="relative h-[400px] w-[450px]">
        <Image src={image_url} alt={alt} fill className="object-cover rounded-xl" />
      </div>
      <div className="flex flex-col justify-center flex-1 gap-4 ">
        <p className="text-3xl font-bold">{name}</p>
        <p> Category&#58; {category}</p>
        <p className="text-3xl font-bold"> FROM&#58; {price}</p>
      </div>
    </div>
  );
}
