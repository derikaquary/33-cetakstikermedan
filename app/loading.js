import { Spinner } from "./_MTailwind.js";

export default function SpinnerSizes() {
  return (
    <div className="w-6 h-6 flex items-center justify-center bg-green-400 mx-auto mt-[100px]">
      <Spinner className="w-full h-full" />
    </div>
  );
}
