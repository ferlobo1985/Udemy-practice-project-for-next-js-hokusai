import { getJsonData } from '../utils/tool';
import CarrouselComp from '../components/ui/carrousel';
import Articles from '../components/home/articles';

const Home = ({data}) => {
  return (
    <>
      <CarrouselComp data={data.carrousel}/>
      <Articles data={data.articles}/>
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