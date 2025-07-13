import fac from "../../../public/assets/facebook_icon.png";
import what from "../../../public/assets/whatsapp.png";
import youtube from "../../../public/assets/youtube.png";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-4 p-4 ">
      <div className="follow text-lg font-semibold">Follow Us</div>
      <div className="icon flex gap-6">
        <Image
          src={fac}
          alt="facebook"
          height={45}
          width={45}
          className="cursor-pointer"
        />
        <Image
          src={what}
          alt="whatsapp"
          height={45}
          width={45}
          className="cursor-pointer"
        />
        <Image
          src={youtube}
          alt="youtube"
          height={45}
          width={45}
          className="cursor-pointer"
        />
      </div>
    </footer>
  );
}
