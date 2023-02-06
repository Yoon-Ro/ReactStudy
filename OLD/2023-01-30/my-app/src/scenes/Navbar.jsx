import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import {BiMenu} from "react-icons/bi";
import {AiOutlineClose} from "react-icons/ai"

const Link = ({ page, selectedPage, setSelectedPage }) => {
    const  lowerCasePage = page.toLowerCase();
    return (
        <AnchorLink className={`${selectedPage === lowerCasePage ? "text-yellow" : ""}
            hover:text-yellow transition duration-500`}
            href={`#${lowerCasePage}`}
            onClick={() => setSelectedPage(lowerCasePage)}
            >
                {page}
        </AnchorLink>
    )
}


const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
    const [ isMenuToggled, setIsMenuToggled ] = useState(false);
    const isAboveSmallScreens = useMediaQuery("(min-width: 840px)");
    const navbarBackground = isTopOfPage ? "": "bg-red";

    return(
        <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
            <div className="flex items-center justify-between mx-auto w-5/6">
                <h4 className="font-playfair text-3xl font-bold">YOON RO</h4>


            {/* DESKTOP NAV */}
            {isAboveSmallScreens ? (
                <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
                    <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    />
                    <Link
                    page="Skills"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    />
                    <Link
                    page="Project"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    />
                    <Link
                    page="Testimonials"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    />
                    <Link
                    page="Contact"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    />
                    </div>
            ) : (<button
            className="rounded-full bg-red p-2 "
            onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <BiMenu size={30}/>
            </button>)}

            {/* MOBILE MENU POPUP */}
            {!isAboveSmallScreens && isMenuToggled && (
                <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px]">
                    {/* CLOSE ICON */}
                    <div className="flex justify-end p-8 ">
                        <button onClick={()=> setIsMenuToggled(!isMenuToggled)} className="p-2 rounded-full bg-red">
                            <AiOutlineClose size={30}/>

                        </button>
                    </div>


                    {/* MENU ITEMS */}
                    <div className="flex flex-col gap-10 p-4 text-2xl text-deep-blue">
                        
                    <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    />
                    <Link
                    page="Skills"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    />
                    <Link
                    page="Project"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    />
                    <Link
                    page="Testimonials"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    />
                    <Link
                    page="Contact"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    />
                    </div>
                </div>
            )}

            </div>
        </nav>
    );
};

export default Navbar;