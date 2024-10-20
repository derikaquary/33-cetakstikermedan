import Image from "next/image";

export default function ProductsItem({ item }) {
  const { source, alt, name, price } = item;

  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID").format(price); // Formats using Indonesian locale for "dot" thousand separators
  };

  return (
    <div>
      {/* Big Screen */}

      <div className="hidden flex-col items-center justify-center gap-2 sm:flex">
        <div className="relative h-[350px] w-[350px]">
          <Image
            src={source}
            alt={alt}
            fill
            className="object-fit rounded-lg"
          />
        </div>
        <p className="text-center text-lg font-semibold leading-tight text-orange-500">
          {name}
        </p>
        <p>Harga Rp {formatPrice(price)}</p>
      </div>
      {/* Small Screen */}
      <div className="flex flex-col items-center justify-center gap-2 sm:hidden">
        <div className="relative h-[120px] w-[120px]">
          <Image
            src={source}
            alt={alt}
            fill
            className="object-fit rounded-lg"
          />
        </div>
        <p className="text-center text-lg font-semibold leading-tight text-orange-500">
          {name}
        </p>
        <p>Harga Rp {formatPrice(price)}</p>
      </div>
    </div>
  );
}
