import Link from "next/link"
import GetStartedButton from "../animata/button/get-started-button"
import { gilroyBold } from "@/app/layout"
import { cn } from "@/lib/utils"
import Image from "next/image"

function HeroSection() {
  return (
    <section>
        <div className="md:mt-32 mt-16">
            <p className={cn(gilroyBold.className,"text-4xl md:text-8xl text-center max-w-5xl m-auto")}>Streamline Repos, Empower Teams.</p>
            <p className="my-8 md:text-[22px] text-center text-[#66696b] md:max-w-2xl max-w-56 m-auto">Revolutionize Collaboration with Smart Code Insights and Meeting-Driven Issue Tracking!</p>
        </div>
        <div className="flex justify-center mt-8">
        <Link href={'/dashboard'}><GetStartedButton text="Get Started" /></Link>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
            <Image src="/images/app.png" alt="app image" width={1252}
            height={732}/>
       
            <Image className="absolute w-[20rem] top-[2.4rem] left-[2.7rem] md:top-[7.5rem] md:w-[67.4rem] md:left-[5.8rem]" src="/images/hero.png" alt="app image" width={1252}
            height={732}/>
            </div>
    </section>
  )
}
export default HeroSection