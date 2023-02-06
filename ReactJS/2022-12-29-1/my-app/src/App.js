import React from 'react';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';




function App() {
  return (
    <body className='px-16 py-16'>
      <Box>
        <AppBar sx={{ background: 'red'}}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2}}>
              <MenuIcon/>
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit"
            sx={{ fontSize: 'xl'}}>Login</Button>

          </Toolbar>
        </AppBar>
      </Box>
      <Typography >Hello</Typography>

      











        <Typography variant="">
          Create a New Note
        </Typography>
        <div>
        <Button variant="text">Text</Button>
<Button variant="contained">Contained</Button>
<Button variant="outlined">Outlined</Button>
        </div>
        <div>
          <h3 className="my-2">Text Button</h3>
          <Button>Primary</Button>
          <Button disabled>Disabled</Button>
          <Button href="#text-buttons">Link</Button>
          
        </div>
        <div>
        <Button variant="contained">Contained</Button>
<Button variant="contained" disabled>
  Disabled
</Button>
<Button variant="contained" href="#contained-buttons">
  CHECK
</Button>
        </div>



        <div className='pt-24'>
        <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">


  <h2>Hello</h2><Button color="primary" variant="contained">Primary</Button>
 </Stack>
        </div>
 
    <div className='mt-24 bg-teal-100'>
      <h2>Chec</h2>
      
    </div>


    </body> 








  );
}

export default App;
