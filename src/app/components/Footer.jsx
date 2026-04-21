import Image from "next/image";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="z-10 text-white">
      <Separator className="bg-[#33353F]" />
      <div className="container p-12 flex justify-between items-center">
        <Image
          src="/images/ASK-no-bg.png"
          width={90}
          height={90}
          alt="Logo"
        />
        <p className="text-slate-600 text-sm text-right">
          Abner Kaizer <br /> MIT License.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
