import Image from "next/image";

export default function ProductsItem({ item }) {
  const { image_url, alt, name, price } = item;

  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID").format(price); // Formats using Indonesian locale for "dot" thousand separators
  };

  return (
    <div>
      {/* Big Screen */}
      <div className="flex-col items-center justify-center hidden gap-2 sm:flex">
        <div className="relative h-[150px] w-[150px]">
          <Image
            src={image_url}
            alt={alt || name}
            fill
            className="object-cover rounded-lg"
            unoptimized
          />
        </div>
        <p className="text-lg font-semibold leading-tight text-center text-orange-500">
          {name}
        </p>
        <p>Harga Rp {formatPrice(price)}</p>
      </div>

      {/* Small Screen */}
      <div className="flex flex-col items-center justify-center gap-2 sm:hidden">
        <div className="relative h-[120px] w-[120px]">
          <Image
            src={image_url}
            alt={alt || name}
            fill
            className="object-cover rounded-lg"
            unoptimized
          />
        </div>
        <p className="text-lg font-semibold leading-tight text-center text-orange-500">
          {name}
        </p>
        <p>Harga Rp {formatPrice(price)}</p>
      </div>
    </div>
  );
}
