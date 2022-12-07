export type MapperType =  [{ 
    id?:number,
    size?: string,
    coating?: string,
    amount?: number}] ;

  export  type finArray = {
      currency: string,
      id: number,
      price: number,
      productImage: string,
      tampons: { size: string, coating: string, amount: number }[]
    }[]

    export  type trans = {
      currency: string,
      id: number,
      price: number,
      productImage: string,
      tampons: { size: string, coating: string, amount: number }[]
    }[]