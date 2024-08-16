import wallpaper from "@/assets/undraw_profile_re_4a55.svg";
import Image from "next/image";
import Link from "next/link";
import { HiOutlinePaintBrush } from "react-icons/hi2";
import Footer from "./_components/footer";

export default function Page() {
  return (
    <div className="h-screen max-w-screen-lg mx-auto flex flex-col">
      <section className="flex-1 grid px-4 gap-12 lg:grid-cols-2">
        <div className="place-self-center max-w-2xl">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl xl:text-6xl">
            Crie seu portfólio sem código!
          </h1>
          <p className="mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
            Construa o seu portfólio em minutos com nosso editor intuitivo.
            Personalize, adicione seu trabalho e mostre seu talento sem
            complicações técnicas.
          </p>
          <Link
            href="/editor"
            className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg"
          >
            <HiOutlinePaintBrush className="size-4" />
            Começar
          </Link>
        </div>
        <div className="hidden md:block">
          <Image
            className="size-full"
            src={wallpaper}
            width={600}
            height={600}
            alt="hero image"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}
