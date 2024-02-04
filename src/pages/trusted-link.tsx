
import GetReviewData from "../components/get-review-data"
import LoginForm from "../components/login-form"
import {db}  from "./api/firebase-config"
import {doc, updateDoc , collection , getDocs} from "firebase/firestore"

const getData =async (value:number) => {
    const wordCollectionRef = collection(db , "words")
   
    try{
     const data = await getDocs(wordCollectionRef)
     return data.docs[value].data() 
    }
    catch(err){
        console.error(err)
    }
      return {}
}

const Page =  ({ data }:any) => {

    return (
        <GetReviewData EngOjibReData={data[0]} OjibEngReData={data[1]} EngCorrection={data[2]} OjibCorrection={data[3]}/>
    )

}

export const getStaticProps = async () => {
    const mainDataEngObjibRe:any = await getData(1)
    const mainDataObjibEngRe:any = await getData(4)
    const EngOjibCorrection:any = await getData(5)
    const OjibEngCorrection:any = await getData(2)
    const data = [mainDataEngObjibRe,mainDataObjibEngRe,EngOjibCorrection, OjibEngCorrection]
  
    // Return the data as props
    return {
      props: {
        data,
      },
    };
  };

export default Page