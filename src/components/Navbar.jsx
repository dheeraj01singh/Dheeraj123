import {FaLinkedin} from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"

import logo from "../assets/raviKumarLogo.webp"
const Navbar = () => {
  return (
   <nav className="flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
       <p className="font-bold ml-5.5 text-3xl"> 𝕯𝖍𝖊𝖊𝖗𝖆𝖏 𝕾𝖎𝖓𝖌𝖍</p>
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/dheeraj-kumar-83891b270/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn">
            <FaLinkedin/>

        </a>

        <a href="https://github.com/dheeraj01singh"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub">
            <FaGithub/>

        </a>
        <a href="https://www.linkedin.com/in/dheeraj-kumar-83891b270/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram">
            <FaInstagram/>

        </a>

    </div>
   </nav>
  )
}

export default Navbar