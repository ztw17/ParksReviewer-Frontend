import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

export default function RenderStarRating(props) {

  return (
    <div>
      <Box align="left" mb={1} borderColor="transparent">
        <Rating
          value={props.reviewInfo.rating}
          name="rating"
          readOnly={props.readOnly}
        />
      </Box>
    </div>
  );
};