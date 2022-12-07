import {MapperType} from './Maper';

export function setData(productsArray:any)  {  //The main task is to setState of finalArray with proper data which is used in HTML
    const tamponsArray: MapperType = [{}] //create sample array to collect xml data later  
   //tamponsArray.shift() //clear the element from initialization
    for (let i = 0; i < productsArray.length; i++) {  //for every one of the six elements contained in the API response                 
      if (productsArray[i].tampons.tapons) {  //if it has XML tag            
        for (let n = 0; n < productsArray[i].tampons.tapons.children.length; n++) {    //go deeper in the nested elements to reach the element containing size,coating,amount                 
          tamponsArray.push({
            id: i, size: productsArray[i].tampons.tapons.children[n].tampon.children[0].size.content,
            coating: productsArray[i].tampons.tapons.children[n].tampon.children[1].coating.content,
            amount: productsArray[i].tampons.tapons.children[n].tampon.children[2].amount.content
          } // fill tamponsArray with read data elements like {id:0,size:small,coating:none,amount:10}
          )
        }
        //once we collect all elements form the xml tags into tamponsArray we assign them to productsArray by coresponding id
        productsArray[i].tampons = tamponsArray.filter((a) => a.id === i);
      }
    }
    return productsArray
    //we setState finalArray with the value of productsArray
  }