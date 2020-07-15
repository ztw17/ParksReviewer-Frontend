import React from 'react';
import { Card, CardActionArea, Button, makeStyles, CardContent, CardMedia, Typography, Grid } from '@material-ui/core';

export default function FavoritesParkCard(props) {
    const classes = useStyles();

    const handleFavoritedParkClick = (id) => {
        const showPark = props.parks.find(park => park.id === id)
        props.handleParkClick(showPark)
        props.history.push(`/parks/${id}`)
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
            <Grid align="center">
                <Button 
                    fullWidth
                    className={classes.button}
                    onClick={() => removeFavorite(props.favoriteInfo.id)}>Remove from Favorites
                </Button>
            </Grid>
        </Card>
    )
}

const useStyles = makeStyles({
    root: {
        width: "48%",
        margin: 10,
        color: "#434C5C",
    },
    media: {
        height: 160,
    },
    button: {
        backgroundColor: "primary",
        color: "#434C5C",
        "&:hover": {
            backgroundColor: "#FF6452",
            color: "#FFF"
        }
    }
    // buttonText: {
    //     fontSize: 14
    // }
});
  