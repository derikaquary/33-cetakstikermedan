import { FaWhatsapp } from "react-icons/fa";

export default function WhatsApp() {
  // Replace the number with your actual WhatsApp number, including the country code (without the "+" sign)
  const phoneNumber = "1234567890"; // Example: "6281234567890" for an Indonesian number

  return (
    <>
    {/* Big Screen */}
    <div className="hidden sm:block fixed bottom-[50px] right-3 rounded-full bg-orange-600 px-2 py-2">
      <a
        href={`https://wa.me/${6281370281883}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={40} color="white" />
      </a>
    </div>
    {/* Small Screen */}
    <div className="sm:hidden fixed bottom-[50px] right-3 rounded-full bg-orange-600 px-2 py-2">
      <a
        href={`https://wa.me/${6281370281883}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={30} color="white" />
      </a>
    </div>
    </>
  );
}
