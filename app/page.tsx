import Booking from "@/components/Booking/Booking";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="bg">
          <Booking />
        </div>
        <div
          className="col-span-2
        "
        >
          hi
        </div>
      </div>
    </main>
  );
}
