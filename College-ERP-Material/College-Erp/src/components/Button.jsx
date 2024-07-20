import * as React from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function ButtonSizes() {
  return (
    <Container maxWidth="sm">
      <div>
      <h3 style={{fontFamily:'Poppins'}}>Hello Super Admin</h3>
        <Button variant="contained" size="large" sx={{fontFamily:"Poppins", fontWeight:400,width:'50%', backgroundColor:"#B0D4FC", color:"#141414", textTransform:'capitalize',
            '&:hover':{
                backgroundColor:"#B0D4FD",
                transition:'300ms',
            }
        }}>
          Create Client <ArrowForwardIosIcon fontSize='small'/>
        </Button>
      </div>
      <br/><br/>
      <div>
        <Button variant="contained" size="large" sx={{fontFamily:"Poppins", fontWeight:400, width:'50%',   backgroundColor:"#B0D4FC", color:"#141414", textTransform:'capitalize',
            '&:hover':{
                backgroundColor:"#B0D4FD",
                transition:'300ms',
            }
        }}>
          All Clients <ArrowForwardIosIcon fontSize='small'/>
        </Button>
      </div>
      <br/><br/>
      <div>
        <Button variant="contained" size="large" sx={{fontFamily:"Poppins", fontWeight:400, width:'50%',  backgroundColor:"#B0D4FC", color:"#141414", textTransform:'capitalize',
            '&:hover':{
                backgroundColor:"#B0D4FD",
                transition:'300ms',
            }
        }}>
          Generate Report <ArrowForwardIosIcon fontSize='small'/>
        </Button>
      </div>
      <br/><br/>
      <div>
        <Button variant="contained" size="large" sx={{fontFamily:"Poppins", fontWeight:400, width:'50%',  backgroundColor:"#B0D4FC", color:"#141414", textTransform:'capitalize',
            '&:hover':{ fontWeight:400,
                backgroundColor:"#B0D4FD",
                transition:'300ms',
            }
        }}>
          Edit Client <ArrowForwardIosIcon fontSize='small'/>
        </Button>
      </div>
      <br/><br/>
      <div>
        <Button variant="contained" size="large" sx={{fontFamily:"Poppins", fontWeight:400, width:'50%',  backgroundColor:"#B0D4FC", color:"#141414", textTransform:'capitalize',
            '&:hover':{
                backgroundColor:"#B0D4FD",
                transition:'300ms',
            }
        }}>
          Bulk Upload <ArrowForwardIosIcon fontSize='small' sx={{fontWeight:400}}/>
        </Button>
      </div>
    </Container>
  );
}
