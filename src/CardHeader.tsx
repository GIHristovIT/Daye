import CBDIcon from './Images/CBD';

interface props {
    itemID:number,
    item0coat:string,
    item1coat:string,
    tamponsArrayLenght:number
}

const CardHeader: React.FC<props> = ({item0coat,item1coat,tamponsArrayLenght,itemID})  => {
    return(<>
     <div style={{display:"flex", justifyContent:"space-between"}}>
      
                <h5 style={{fontFamily:"MV Boli"}}>Promo Offer {itemID+1}</h5> 
                {(item0coat==="CBD" || item1coat==="CBD") && // if any of the elements got CBD we display icon in the header of the cards
                    <>
                    <span > <CBDIcon height={40} width={40}></CBDIcon></span></>}   
                    </div>                  
                  <div className="mt-1 mb-0 text-muted small">
                  {tamponsArrayLenght === 2 && 
                    <><span>2 Packages</span>
                    <span className="text-primary"> •  •  •  </span></> //if there are 2 packages we place another bullet ub the list 
                    } 
                    <span>100% organic</span>
                    <span className="text-primary"> •  •  •  </span>
                    <span>Light weight </span>                    
                    <span className="text-primary"> •  •  • </span>
                    <span>Unique design</span>                                                                   
                  </div>                   
                       </>)
}

export default CardHeader