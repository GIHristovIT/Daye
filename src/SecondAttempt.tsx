import React, { useEffect, useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage
} from "mdb-react-ui-kit";
import { motion } from "framer-motion";
import axios from 'axios';
import Footer from "./Footer";
import Header from "./Header";
import './Styles/all_in_one.css';
import CardHeader from "./CardHeader";
import CardRightPart from "./CardRightPart";
import MidPart from "./MidPart";
import { setData } from "./SetData";
import { finArray } from "./Maper";


const { convertXML } = require("simple-xml-to-json")

function Products2() {

  const [storage, setStorage] = useState<any[]>([{}])     
  const [finalArray, setFinalArray] = React.useState<finArray>([]);  //this will be the desired format for all elements
  const changedTags = storage.map(function (row, index) { //create new array with correct datatypes (except tampons) and fixing the mispelling in tampons main tag
    let transformer: any = {
      id: index,
      price: parseFloat(row.price),
      currency: String(row.currency),
      productImage: String(row.productImage),      
      //tampons: !row.tampons ? row.tapons : convertXML(String(row.tampons))  //if I use this row need to enable productArray and pass that to setFinalArray

      
      //tampons are always xml encapsulated as string
      //tapons are sometime JSON object and sometime JSON as string
      tampons: !row.tampons ? (typeof(row.tapons)!=="string"?row.tapons:convertXML(row.tapons)): convertXML(String(row.tampons))
    }   
    return transformer
  })

  const productsArray: any = changedTags.map(function (row) {
    console.log(changedTags)
    //convert the xml tampons to json object  where such exists
    let transformer = { ...row, tampons: typeof(row.tampons) !== "string" ? row.tampons : convertXML(row.tampons) }
    return transformer
  })


  useEffect(() => {
    async function getDataFromServer() { //request the Api
      let resp = await axios.get("https://front-end-technical-test-bvhzjr6b6a-ew.a.run.app/");
      setStorage(resp.data) //assighn the response to "storage"
      console.log(JSON.stringify(resp.data))
    }
    getDataFromServer() //actually this executes first (calling the upper getDataFromServer function)  
  }, [])

  useEffect(() => {
    if (storage.length > 1) { setFinalArray(setData(changedTags)) } //ensure that "storage" state is updated 
  }
    , [storage]) //triggers when "storage" state is updated"

  return (

    <MDBContainer fluid>
      <Header/>
      {finalArray.map((item) =>
        <MDBRow key={item.id} className="justify-content-center mb-5">
          <MDBCol xl="9">
            <motion.div whileHover={{ scale: 1.1 }} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 2 }}>
              <MDBCard className="shadow border-5 rounded-4  mt-3">
                <MDBCardBody>
                  <MDBRow>
                    {/* left part of the card */}
                    <MDBCol lg="3" >
                      <MDBCardImage src={item.productImage} className="w-75" style={{ backgroundColor: "#ffffff" }} />
                    </MDBCol>
                    {/* middle  part of the card   */}
                    <MDBCol md="6">
                      {/* CardHeader renders Offer Header / CBD Icon and the tags below them with the blue dots */}
                      <CardHeader item0coat={item.tampons[0]?.coating} item1coat={item.tampons[1]?.coating} tamponsArrayLenght={item.tampons.length} itemID={item.id}></CardHeader>
                      <MidPart tampons={item.tampons}></MidPart>
                    </MDBCol>
                    <MDBCol lg="3" className="border-sm-start-none border-start">
                      <CardRightPart itemPrice={item.price} itemCurrency={item.currency}></CardRightPart>
                    </MDBCol>                    
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </motion.div>
          </MDBCol>
        </MDBRow>)}
      <Footer/>
    </MDBContainer>
  );
}

export default Products2;

