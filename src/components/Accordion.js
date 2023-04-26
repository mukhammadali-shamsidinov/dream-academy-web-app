import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Player, ControlBar, ReplayControl, ForwardControl } from 'video-react';
import { collection, onSnapshot } from 'firebase/firestore';
import {Avatar,Button} from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import { db } from '../config';
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions({data}) {
  const [expanded, setExpanded] = React.useState('panel1');
  const [search,setSearch] = React.useState("")
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const [posts,setPosts] = React.useState([])

  React.useEffect(()=>{
    const query = onSnapshot(collection(db,`${data.type}`),(snapshot)=>{

      setPosts(snapshot.docs.map(item=>({id:item.id,...item.data()})))

    })
  },[])

  return (
    <div>
    <div className="search mt-3 flex justify-start mb-3">
        <input type="text"
       onChange={e=>setSearch(e.target.value)}
        placeholder='Search'
        className='border-2 bg-teal-50 border-solid border-indigo-500 rounded p-3 w-4/12 search' />
      </div>
     <Typography variant='h5'>{posts.length > 0 ? <div className="bg-green-500 font-bold text-gray-50">Darslar Soni: {posts.length}</div> : <div className='
     font-bold
     text-gray-50 bg-pink-600'>Darslar Mavjud Emas</div>}</Typography>
      {posts.length >0 ? 
  
  posts.sort((a,b)=>Number(a.sort) > Number( b.sort) ? 1 : -1).filter(c=>{
    if(search === ""){
      return c
    }else if(c.title.toLowerCase().includes(search.toLowerCase())){
      return c
    }
  }).map((data,i)=>(
    <Accordion key={data.id} expanded={expanded === 'panel1'} className="responsive" onChange={handleChange('panel1')}>
    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
      <Typography>{data.title.toUpperCase()} </Typography>
    </AccordionSummary>
    <AccordionDetails>
    <Player poster={data.image} src={data.video}>

<ControlBar autoHide={false}>
<ReplayControl seconds={30} order={3.1} />
<ForwardControl seconds={30} order={3.1} />
</ControlBar>
</Player>
    </AccordionDetails>
  <div className="flex p-3 items-center">
  <Typography variant='h4'>Ma'lumot:</Typography> <Typography variant='h5'> {data.message}</Typography>
  </div>
    <hr />
<div className='m-5'>
<Typography variant='h5'>Izoh</Typography>
<br />
<div className="flex items-center gap-3">
<Avatar sx={{ bgcolor: deepOrange[500] }} alt='Remy' /> <p> User</p>
</div>
<br />

    <textarea className='w-9/12 resize text-gray-700' col="60"></textarea><br /><br />

    <Button variant='contained' color="error">submit</Button>
</div>
  </Accordion>
  ))
  
     : ""
    }
    </div>
  );
}