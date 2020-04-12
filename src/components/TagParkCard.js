import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 370,
      margin: 20,
    },
    media: {
      height: 160,
    },
});
  

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