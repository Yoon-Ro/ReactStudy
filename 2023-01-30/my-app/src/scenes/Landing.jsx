import useMediaQuery from "../hooks/useMediaQuery";
import {motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";


const  Landing = ({setSelectedPage}) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1084px)");

    return (
        <section id="home" className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10">



{/*  IMAGE SECTION */}
        <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
            {isAboveMediumScreens ? (
                
                <div className="relative z-0 ml-20 before:absolute before:-top-16 before:-left-16 before:rounded-[32px] before:w-full before:max-w-[400px] before:h-full before:border-2 before:border-blue before:z-[-1]">
                    <img
                    className="hover:filter hover:saturate-200 transition duration-500 z-10 rounded-[32px] w-full md:max-w-[600px] max-w-[400px]" alt="profile" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80../assets/profile-image.png"/>
                </div>
            ):( <img
                className="hover:filter hover:saturate-200 transition duration-500 z-10 rounded-[32px] w-full md:max-w-[600px] max-w-[400px]" alt="profile" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80../assets/profile-image.png"/>)} 
                </div>

                {/* MAIN SECTION */}
                <div className="z-30 basis-2/5 mt-12 md:mt-32">
                    {/* HEADING */}
                    <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:true, amount: 0.5}}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: {opacity: 1, x: 0 }
                    }}
                    >
                        <p className="text-6xl font-playfair z-10 text-center md:text-start">
                            Jane {""}
                            <span cla ssName="xs:relative xs:text-deep-blue xs:font-semibold z-20
                            xs:before:content-brush before:absolute before:-left-[25px] 
                            before:-top-[70px] before:z-[-1]">
                                Esper
                            </span>

                        </p>

                        <p className="mt-10  mb-7 text-sm text-center md:text-start">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur esse necessitatibus molestias quidem ipsa consectetur, commodi expedita facilis eligendi earum consequatur? Perspiciatis exercitationem culpa cupiditate eveniet iure, illo ipsa impedit?
                        </p>
                    </motion.div>


                </div>

        
        </section>
    )
}

export default Landing;