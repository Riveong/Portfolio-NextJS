import React from "react"
import Image from "next/image"


const HeroSection = () => {
    return(
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-12 mb-20">
                <div className="col-span-7 place-self-center p-6">
                    <h1 className="text-white mb-4 font-extrabold text-4xl lg:text-6xl">Hiya, I'm Riveong</h1>
                    <p className="text-white mb-4 text-lg lg:text-xl">A Backend Developer. Borned in Semarang, based in Yogyakarta. Love to expand my stacks whilst drinking various kind of tea</p>
                    <button className="bg-white border-2 rounded-full border-white p-4 font-sans text-black">📖 Visit My Blog</button>
                        
                    
                </div>
                <div className="col-span-5">
                    <div className="rounded-full bg-white w-50">
                        <Image
                            src="/images/chibi.png"
                            alt="hero image"
                            width={300}
                            height={300}/>
                    </div>
                </div>
            </div>
        </section>
    )


}

export default HeroSection