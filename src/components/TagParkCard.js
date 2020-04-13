import React from 'react';
import { makeStyles, Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
  
export default function TagParkCard(props) {
    const classes = useStyles();

    const handleParkTagClick = (id) => {
        const showPark = props.parks.find(park => park.id === id)
        props.handleParkClick(showPark)
        props.history.push(`/park/${id}`)
    }

    return (
        <Card className={classes.root} onClick={() => handleParkTagClick(props.parkInfo.id)}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.parkInfo.image}
                />
                <CardContent>
                    <Typography align="left" gutterBottom variant="h5" component="h2">
                        {props.parkInfo.name}
                    </Typography>
                    <Typography align="left" variant="body2" color="textSecondary" component="p">
                        {props.parkInfo.state}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

const useStyles = makeStyles({
    root: {
        maxWidth: 600,
        margin: 20,
        color: "#434C5C",
    },
    media: {
      height: 160,
    },
});