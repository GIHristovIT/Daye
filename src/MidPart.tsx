import * as React from "react"

import {motion} from "framer-motion";
interface props {
    tampons:any;
}


const MidPart: React.FC<props> = ({tampons}) => {
    return(<>  
 <motion.div whileHover={{scale: 1.05}}>
                        {/* render the details for the tampons  */}
                        <ul style={{display:"flex", listStyle:"none", justifyContent:"space-around", marginTop:20, paddingLeft:0}}>
                            {tampons.map((tampon:any, index:number)  => 
                        <li key={index} style={{padding:5}}>
                            {tampons.length === 1 && <> <span style={{fontFamily:"Comic Sans MS", fontSize:"x-large"}}>Buy 1 package containing {tampon.amount} tampons with {tampon.size} size</span></>}                            
                            {tampons.length === 2 && <>
                            {tampon.coating!=="CBD" ?
                               <span style={{fontFamily:"Comic Sans MS", fontSize:"large"}}>Buy 1 package containing {tampon.amount} tampons with {tampon.size} size</span>:
                               <span style={{fontFamily:"Comic Sans MS" , fontSize:"large"}}>Grab 1 package containing {tampon.amount} CBD tampons with {tampon.size} size as gift</span>}       
                            </>}  
                            </li>                                                              
                                )}
                        </ul>
                        </motion.div>   </>)
}

export default MidPart