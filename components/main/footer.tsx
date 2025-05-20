import Image from "next/image";
import Link from "next/link";
import { SOCIALS } from "@/constants";

export const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] pt-0">
        <div className="flex flex-row gap-5 items-center justify-center">
          <Image
            src="/logo.png" 
            alt="Logo"
            width={70}
            height={75}
            draggable={false}
            className="cursor-pointer hover:animate-slowspin !h-[75px]"
          />
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <Link
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              key={name}
            >
              <Icon className="h-6 w-6 text-white" />
            </Link>
          ))}
      </div>
    </div>
  );
};
