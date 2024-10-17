import Image from "next/image";

export default function ProductsItem({ item }) {
  const { source, alt, name, price } = item;

  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID").format(price); // Formats using Indonesian locale for "dot" thousand separators
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="relative h-[120px] w-[120px]">
        <Image src={source} alt={alt} fill className="rounded-lg object-fit" />
      </div>
      <p className="text-lg font-semibold text-orange-500 text-center">{name}</p>
      <p>Harga Rp {formatPrice(price)}</p>
    </div>
  );
}
