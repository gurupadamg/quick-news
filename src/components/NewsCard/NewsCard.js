import React from 'react'
import {Card, CardActionArea, CardActions, CardContent, Button, Typography, CardMedia} from '@material-ui/core'

import useStyles from './styles.js'

function NewsCard({article : {description, publishedAt,source, title, url, urlToImage}, index}) {
    const classes = useStyles()
    return (
       <Card className={classes.card}>
           <CardActionArea href={url} target="_blank">
               <CardMedia className={classes.media} image={urlToImage || 'https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png'}/>
               <diV className={classes.details}>
                   <Typography variant="body2" color="textSecondary" component="h2">{(new Date(publishedAt)).toDateString()}</Typography>
                   <Typography variant="body2" color="textSecondary" component="h2">{source.name}</Typography>
               </diV>
               <Typography className={classes.title} gutterBottom variant="h5">{title}</Typography>
               <CardContent >
                   <Typography variant="body2" color="textSecondary" component="p">{description}</Typography>
               </CardContent>
           </CardActionArea>
           <CardActionArea href={url} target="_blank">
                <CardActions className={classes.cardActions}>
                    <Button size="small" color="primary">Read More</Button>
                    <Typography variant="h5" color="textSecondary">{index + 1} </Typography>
                </CardActions>
           </CardActionArea>
       </Card>
    )
}

export default NewsCard
