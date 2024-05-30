import Image from "next/image";

function Footer() {
  return (
    <footer className="sm:px-16 py-4 px-8 flex justify-between items-center gap-2 flex-wrap bg-[#161921]">
      <p className="text-base font-bold text-white">@2023 EpicAnimeVault</p>
      <Image
        src="./logo.svg"
        alt="logo"
        width={47}
        height={44}
        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-contain h-auto"
      />
      <div className="flex items-center gap-6">
        <Image
          src="./tiktok.svg"
          alt="logo"
          width={19}
          height={19}
          className="object-contain w-auto h-auto"
        />
        <Image
          src="./instagram.svg"
          alt="logo"
          width={19}
          height={19}
          className="object-contain w-auto h-auto"
        />
        <Image
          src="./twitter.svg"
          alt="logo"
          width={19}
          height={19}
          sizes="(max-width: 600px) 19px, (max-width: 1200px) 19px, 19px"
          className="object-contain w-auto"
        />
      </div>
    </footer>
  );
}

export default Footer;
