export default function Footer() {
  return (
    <div className="grid grid-cols-1 sm:flex bg-gray-800 items-center justify-between py-5 px-5 w-full max-w-7xl mx-auto gap-y-9">
      <div className="flex flex-col gap-1 ">
        <p className="text-2xl text-white font-semibold">Popular Links</p>
        <p className="text-white">Contact Us</p>
        <p className="text-white">About Us</p>
        <p className="text-white">Go Print</p>
        <p className="text-white">How to Order</p>
        <p className="text-white">How to Payment</p>
      </div>
      <div className="flex flex-col gap-1 ">
        <p className="text-2xl text-white font-semibold">Online Support</p>
        <p className="text-white">Senin &#45; Jumat	&#58; 08.00 &#45; 21.00</p>
        <p className="text-white">Sabtu	&#58; 08.00 &#45; 19.00</p>
        <p className="text-white">Minggu	&#58; 12.00 &#45; 21.00</p>
      </div>
      
    </div>
  );
}
