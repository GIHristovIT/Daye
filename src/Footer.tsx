import {motion} from "framer-motion";

const Footer = () => (
    <div className="footer" style={{display:"flex", alignItems:"center", gap:20}}> 
            <motion.div animate={{rotate:[0,200,200,0]}} transition={{duration:1}}
            style={{cursor:"pointer", color:"blue", textDecoration:"underline",fontFamily:"Impact"}} >Home Page</motion.div>
            <motion.div animate={{rotate:[0,200,200,0]}} transition={{repeat:1,duration:1}}
            style={{cursor:"pointer", color:"blue", textDecoration:"underline",fontFamily:"Impact"}} >Contacts</motion.div>
            <div className="leftLabel" style={{fontFamily:"Segoe Script"}}>Because you can</div>
    </div>
  );
  
  export default Footer;