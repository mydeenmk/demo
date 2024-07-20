

import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    postCard: {
      width: '100%',
      maxWidth: 800,
      margin: 'auto',
      marginBottom: 20,
    },
  }));
  
  function Post({ post }) {
    const classes = useStyles();
    const { text } = post;
  
    return (
      <Card className={classes.postCard}>
        <CardContent>
          <Typography variant="body1" component="p">
            {text}
          </Typography>
        </CardContent>
      </Card>
    );
  }
  
  export default Post;
