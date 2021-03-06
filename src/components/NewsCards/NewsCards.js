import React from 'react'
import {Grid, Grow } from '@material-ui/core'

import useStyles from './styles.js'
import NewsCard from '../NewsCard/NewsCard'

function NewsCards({articles}) {
    const classes = useStyles()
    return (
        <Grow in>
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {   articles.map((article, index) => 
                        <Grid item xs={12} sm={6} md={4} lg={3}  style={{display: "flex"}}>
                            <NewsCard key={index} article={article} index={index}/>
                        </Grid>    
                    )
                }

            </Grid>
        </Grow>
    )
}

export default NewsCards
