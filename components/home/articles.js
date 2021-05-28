import Masonry from 'react-masonry-css'
import Card from '../ui/card';

const Articles = (props) => {

    const breakpoints = {
        default: 3,
        768:2,
        500:1
    }

    return(
        <>
            <Masonry
                breakpointCols={breakpoints}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                { props.data.map(article =>(
                    <Card key={article.id} article={article}/>
                ))}
            </Masonry>
        </>
    )

}

export default Articles;
