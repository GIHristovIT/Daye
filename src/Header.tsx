import LogoIcon from './Images/TheLogo';
import FlowerIcon from "./Images/Flower";
import {motion} from "framer-motion";

const Header = () => {
    return(<>
    <div className="header" style={{display:"flex", marginTop:"2%", justifyContent: "space-between", marginRight:"5%"}}>
        <LogoIcon width={300} height={70}></LogoIcon>  
        <motion.div animate={{rotate:[0,-200,-200,0], x:[0,-100,-100,0]}}  transition={{repeat:Infinity,duration:10}}><FlowerIcon width={50} height={50}></FlowerIcon></motion.div>      
      </div> </>)
}

export default Header