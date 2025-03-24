import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { TextReveal } from "@/components/magicui/text-reveal";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
   return (
      <>
      <main className="p-4 max-w-4xl mx-auto">
         <div className="h-dvh">
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
               Haiii
            </h1>
         </div>

         <TextReveal>
            Kamu tahu tidak? setiap detik bersamamu adalah hadiah terindah dalam
            hidupku 🎁🎀. scroll sampai bawah yah! ada hadiah untukmu.
         </TextReveal>

         <div className="flex justify-center items-center h-dvh">
            <Link href={"/flowers"}>
               <InteractiveHoverButton className="text-primary bg-secondary">
                  Hadiah spesial untukmu 💖💖💖
               </InteractiveHoverButton>
            </Link>
         </div>

         <Image
            src="/photo3.jpg"
            className="absolute top-10 left-10 w-20 -rotate-12 rounded-md grayscale"
            alt="floating flower"
            width={100}
            height={100}
         />
         <Image
            src="/photo1.jpg"
            className="absolute bottom-10 right-20 w-28 rotate-6 rounded-md grayscale"
            alt="floating flower"
            width={100}
            height={100}
         />
         <Image
            src="/photo5.jpg"
            className="absolute top-1/3 right-10 w-16 rotate-12 rounded-md grayscale"
            alt="floating heart"
            width={100}
            height={100}
         />
         <Image
            src="/photo4.jpg"
            className="absolute bottom-1/4 left-5 w-24 rotate-2 rounded-md grayscale"
            alt="floating heart"
            width={100}
            height={100}
         />
         <Image
            src="/photo2.jpg"
            className="absolute top-1/2 left-1/2 w-14 -rotate-4 rounded-md grayscale "
            alt="floating star"
            width={100}
            height={100}
         />
      </main>
      <footer className="p-4 flex justify-center text-sm text-gray-700">
         <p>&copy; 2025 Ridho. All rights reserved.</p>
      </footer>
      </>
   );
}
