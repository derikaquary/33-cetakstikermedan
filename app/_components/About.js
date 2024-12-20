export default function About() {
  return (
    <>
      {/* Big Screen */}
      <div className="items-center justify-center hidden gap-8 sm:mx-auto sm:flex sm:w-full sm:max-w-4xl">
        <div className="h-[3px] w-[40px] bg-gray-400 sm:w-full"></div>
        <div className="w-[100px] text-center text-xl font-semibold text-orange-500 sm:w-full sm:text-3xl">
          About Cetak Stiker Medan
        </div>
        <div className="h-[3px] w-[40px] bg-gray-400 sm:w-full"></div>
      </div>
      {/* Small Screen */}
      <div className="flex items-center justify-center gap-8 sm:mx-auto sm:hidden sm:w-full sm:max-w-4xl">
        <div className="h-[3px] w-[40px] bg-gray-400 sm:w-full"></div>
        <div className="w-[100px] text-center text-xl font-semibold text-orange-500 sm:w-full sm:text-3xl">
          About
        </div>
        <div className="h-[3px] w-[40px] bg-gray-400 sm:w-full"></div>
      </div>
    </>
  );
}
