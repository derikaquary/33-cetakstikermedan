import Image from "next/image";

export default function OrderedItem({item}) {
    const {source, alt, name, price, category} = item
  return (
    <div className="mt-4 flex flex-1 gap-3 bg-blue-400 p-4">
      <div className="relative h-[200px] flex-1">
        <Image src={source} alt={alt} fill className="object-cover" />
      </div>
      <div className="h-[200px] flex-1 bg-red-400">
        <p className="text-2xl font-bold">{name}</p>
        <p> Category&#58; {category}</p>
        <p className="text-2xl font-bold"> FROM&#58; {price}</p>
      </div>
    </div>
  );
}
