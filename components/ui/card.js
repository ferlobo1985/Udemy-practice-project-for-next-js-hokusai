import { Card, CardActions, CardContent, Button } from '@material-ui/core';
import Link from 'next/link';
import Image from 'next/image';

import { Fade } from 'react-awesome-reveal';

const CardItem = ({ article }) => {
    return(
        <Fade>
            <Card
                style={{
                    maxWidth:345
                }}
            >
                <Image
                    src={`/images/arts/${article.img}`}
                    layout="responsive"
                    width="1920"
                    height="1080"
                />

                <CardContent>
                    <h5>{article.name}</h5>
                    <p>{article.excerpt}</p>
                </CardContent>

                <CardActions>
                    <Link href={`/articles/${article.slug}`}>
                        <Button variant="contained" color="primary">
                            Link
                        </Button>
                    </Link>
                </CardActions>
            </Card>
        </Fade>
    )
}

export default CardItem;