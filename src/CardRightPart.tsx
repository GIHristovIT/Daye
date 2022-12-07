interface props {
    itemPrice:number,
    itemCurrency:string   
}

const CardRightPart: React.FC<props> = ({itemPrice,itemCurrency})  => {
    return(<>
    <div className=" flex-row align-items-center mb-1">                                      
                    <div style={{display:"flex"}}>
                    <h4 className="mb-1 me-1">{itemPrice}{itemCurrency}</h4>                    
                      <s  className="text-danger" style={{marginLeft:10}}>{itemPrice +(itemPrice * 0.20)} {itemCurrency}</s>                                      
                    </div>
                  </div>
                  <h6 className="text-info">Free shipping</h6>
                  <div className="d-flex flex-column mt-4">
                  <input type="button" value="Details"  className="button-92" style={{backgroundColor:"#7e376c"}}/>                  
                  <input type="button" value="Buy now" className="button-92"/>                
                  </div>             
                       </>)
}

export default CardRightPart