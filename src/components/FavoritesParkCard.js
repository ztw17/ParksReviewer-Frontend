import React from 'react';
import { Card, CardActionArea, Button, makeStyles, CardContent, CardMedia, Typography } from '@material-ui/core';

export default function FavoritesParkCard(props) {
    const classes = useStyles();

    const handleFavoritedParkClick = (id) => {
        const showPark = props.parks.find(park => park.id === id)
        props.handleParkClick(showPark)
        props.history.push(`/park/${id}`)
    }

    const removeFavorite = (id) => {
        props.handleFavoriteDelete(id)
    }

    return (
        <Card className={classes.root}>
            <CardActionArea onClick={() => handleFavoritedParkClick(props.favoriteInfo.park.id)}>
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

const useStyles = makeStyles({
    root: {
        width: 550,
        margin: 20,
        color: "#434C5C",
    },
    media: {
        height: 160,
    },
});
  