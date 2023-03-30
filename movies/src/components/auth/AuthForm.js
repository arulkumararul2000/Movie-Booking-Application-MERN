import { Button, Dialog, IconButton, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';



const AuthForm = ({onSubmit ,isAdmin }) => {
    const [inputs, setinputs] = useState({
        name:"",
        email:"",
        password:"",
    });

    const [isSignup, setisSignup] = useState(false);
    
    const handleChange=(e)=>{
        setinputs((prevState)=>({
            ...prevState,
            [e.target.name] : e.target.value,

        }))
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        onSubmit({inputs,signup:isAdmin?false:isSignup});

        
    }

  return (
   <Dialog paperProps={{style:{borderRadius:20}}}open={true}>
   <Box sx={{ml:'auto',padding:1}}> 
    <IconButton LinkComponent={Link} to="/" >
        <CloseRoundedIcon/>
    </IconButton>
    
   </Box>
    <Typography variant='h4' textAlign={'center'}>
    {isSignup?'Signup':'login'}
    </Typography>
    <form onSubmit={handleSubmit}>
        <Box display="flex" justifyContent={'center'} flexDirection='column' width={400} margin='auto' alignItems={'center'} padding={4}>
           { !isAdmin &&isSignup &&<>
            <TextField  value={inputs.name} onChange={handleChange} label='Name'  variant='filled' fullWidth margin='normal'  type={'text'} name='name'/> </>
            
            }


            
            <TextField value={inputs.email} onChange={handleChange} label='Email' variant='filled' fullWidth margin='normal'  type={'email'} name='email'/>
            
            <TextField  value={inputs.password} onChange={handleChange} label='Password' fullWidth variant='filled' margin='normal'  type={'password'} name='password'/>
            <Button sx={{mt:2,borderRadius:10,bgcolor:'#2b2d42'}} type="submit" fullWidth variant='contained'> {isSignup?'Signup':'login'} </Button>
     {  !isAdmin &&    ( <Button onClick={()=>{
                setisSignup(!isSignup)
            }} sx={{mt:2,borderRadius:10}} fullWidth > Switch To {isSignup?"Login":"Signup"}</Button>)}
            
        </Box>
    </form>
   </Dialog>
  )
}

export default AuthForm
