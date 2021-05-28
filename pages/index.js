import { getJsonData } from '../utils/tool';
import CarrouselComp from '../components/ui/carrousel'

const Home = ({data}) => {
  return (
    <>
      <CarrouselComp data={data.carrousel}/>
    </>
  )
}


export const getStaticProps = async() => {
  const data = await getJsonData();

  return{
    props:{
        data:data
    }
  }
}



export default Home;