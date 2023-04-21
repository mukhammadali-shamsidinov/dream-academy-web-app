import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Player, ControlBar, ReplayControl } from 'video-react';
import { collection, onSnapshot } from 'firebase/firestore';
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
     <Typography variant='h5'>{posts.length > 0 ? <div className="bg-green-500 font-bold text-gray-50">Darslar Soni: {posts.length}</div> : <div className='
     font-bold
     text-gray-50 bg-pink-600'>Darslar Mavjud Emas</div>}</Typography>
      {posts.length >0 ? 
  
  posts.map((data,i)=>(
    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
      <Typography>{data.title.toUpperCase()} {i + 1} dars </Typography>
    </AccordionSummary>
    <AccordionDetails>
    <Player poster={data.image} src={data.video}>

<ControlBar autoHide={false}>
<ReplayControl seconds={5} order={2.1} />
<ReplayControl seconds={10} order={2.2} />
<ReplayControl seconds={30} order={2.3} />
</ControlBar>
</Player>
    </AccordionDetails>
    
  </Accordion>
  ))
  
     : ""
    }
    </div>
  );
}