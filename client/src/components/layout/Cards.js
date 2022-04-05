import React from 'react'
import {Grid,Card,CardContent,Typography,CardActions} from '@mui/material'
import { makeStyles } from '@mui/styles';
import EditModal from '../modals/EditModal';
import DeleteModal from '../modals/DeleteModal';
import DetailsButton from './DetailsButton';


const useStyles = makeStyles({
  text: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    wordWrap: 'inherit',
    whiteSpace: 'normal',
  },
  card:{
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px "
  }
});


export default function Cards({recipe,buttonSetter}) {

  const {_id,title,body,username} = recipe

  const classes = useStyles();
  return (
    <Grid item xs={3} >
          
<Card  className={classes.card}> 


  <CardContent>
    <Typography gutterBottom variant='h5' sx={{mb:1,textTransform:"capitalize"}} noWrap={true}>{title}</Typography>
    <Typography gutterBottom variant="body2" sx={{mb:3}}  className={classes.text}><b>Author</b>:{username}</Typography>

    <Typography  variant="body2"  className={classes.text} sx={{height:65}}>
      <b>Description:</b>{body}
    </Typography>
  </CardContent>
  <CardActions  disableSpacing sx={{borderTop:'1px solid rgba(0, 0, 0, 0.54)'}}>
    {
      buttonSetter && 
        <>
        <EditModal _id={_id} title={title} body={body}/>
        <DeleteModal _id={_id} />
        </>

    }
 
 <DetailsButton _id={_id} />
  </CardActions>
</Card>
      </Grid>
  )
}
