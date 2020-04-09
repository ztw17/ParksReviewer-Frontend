import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
});
  

export default function TagParkCard(props) {
    const classes = useStyles();

    const handleParkClick = (id) => {
        console.log("clicked park", id)
    }

    return (
        <Card className={classes.root} button onClick={() => handleParkClick(props.parkInfo.id)}>
            <CardMedia
                className={classes.media}
                image={props.parkInfo.image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                {props.parkInfo.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                {props.parkInfo.state}
                </Typography>
            </CardContent>
        </Card>
    )
}