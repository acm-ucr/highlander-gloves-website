import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type photoProps = {
  webp: StaticImport;
  alt: string;
  txt: string;
};

const Title = ({ webp, alt, txt }: photoProps) => {
  return (
    <div className="relative h-[200px] w-full md:h-[400px]">
      <Image src={webp} alt={alt} fill={true} className="object-cover" />

      <div className="absolute inset-0 flex items-center justify-center font-archivo-black">
        <div className="max-w-[800px] text-center">
          <div className="animate-jump-in text-5xl font-bold text-white drop-shadow-[8px_6px_0_#000000] md:text-9xl md:drop-shadow-[20px_15px_0_#000000]">
            {txt}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Title;
