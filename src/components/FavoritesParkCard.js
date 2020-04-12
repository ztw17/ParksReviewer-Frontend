import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, Button } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 630,
        margin: 20,
    },
    media: {
        height: 160,
    },
});
  

export default function FavoritesParkCard(props) {
    const classes = useStyles();

    const handleFavoritedParkClick = (id) => {
        console.log("favorited park", id)
        const showPark = props.parks.find(park => park.id === id)
        props.handleParkClick(showPark)
        props.history.push(`/park/${id}`)
    }

    const removeFavorite = (id) => {
        // props.handleFavoriteDelete(id)
        console.log("hit delete", id)
    }

    return (
        <Card className={classes.root} onClick={() => handleFavoritedParkClick(props.favoriteInfo.park)}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.favoriteInfo.park.image}
                />
                <CardContent>
                    <Typography align="left" gutterBottom variant="h5" component="h2">
                        {props.favoriteInfo.park.name}
                    </Typography>
                    <Typography align="left" variant="body2" color="textSecondary" component="p">
                        {props.favoriteInfo.park.state}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <Button onClick={() => removeFavorite(props.favoriteInfo.id)}>Remove from Favorites</Button>
        </Card>
    )
}