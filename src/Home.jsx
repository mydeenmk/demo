import React from 'react';
import { AppBar, Toolbar, Typography, Container, Card, CardContent, CardMedia, Button, TextField ,InputAdornment} from '@mui/material'; // Added TextField import
import { styled } from '@mui/system';
import { FaApple, FaBreadSlice, FaCarrot } from 'react-icons/fa'; // Latest icons
import fruitsImage from './assets/friuts.jpg';
import bakery from './assets/bakery.jpg';
import veg from './assets/veg.jpg';
import { FaSearch } from 'react-icons/fa' 
import bannerImage from './assets/banner.jpg';


const Banner = styled('div')(({ theme }) => ({
    width: '100%',
    height: '100rem',
    backgroundImage: `url(${bannerImage})`, // Replace with your banner image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    animation: 'slide 10s infinite',
    marginTop: 20,
    marginLeft:20,

    '@keyframes slide': {
        '0%': { backgroundPosition: '0% 50%' },
        '50%': { backgroundPosition: '100% 50%' },
        '100%': { backgroundPosition: '0% 50%' },
    },
}));


const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    // justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(0, 2),
    
}));

const SearchBox = styled(TextField)(({ theme }) => ({
    width: '50%',
    maxWidth: '500px',
    marginLeft: 300,
   backgroundColor: 'white',
   borderRadius: '40px', // Apply border radius to the outer container

   '& .MuiOutlinedInput-root': {
       borderRadius: '40px', // Apply border radius to the input container
       '& fieldset': {
           border: '2px solid #ccc', // Add a small border with a light color
       },
       '&:hover fieldset': {
           border: '2px solid #4CAF50', // Change border color on hover
       },
       '&.Mui-focused fieldset': {
           border: '2px solid #4CAF50', // Change border color when focused
       },
       '& input': {
           padding: '8px 12px', // Adjust padding to control height
           fontSize: '0.875rem', // Adjust font size to fit the reduced height
        },
    },
  
}));

const Content = styled(Container)(({ theme }) => ({
    flex: 1,
    padding: theme.spacing(4),
    marginLeft: theme.spacing(0),
    marginTop: '30px', // Space for header
}));

const Footer = styled('footer')(({ theme }) => ({
    backgroundColor: '#333',
    color: '#fff',
    padding: theme.spacing(2),
    textAlign: 'center',
    position: 'relative',
    bottom: 0,
    // width: 'calc(100% - 220px)', 
    // marginLeft: '220px', 
}));

const StyledCard = styled(Card)(({ theme }) => ({
    marginTop: theme.spacing(2),
    transition: 'transform 0.3s ease',
    '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    },
    width: '370px',
}));

const Media = styled(CardMedia)(({ theme }) => ({
    height: 140,
}));

function Home() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', margin: 0 }}>
          <SearchBox
            variant="outlined"
            placeholder="Search..."
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <FaSearch style={{ color: '#4CAF50', fontSize: '1rem' }} /> {/* Search icon */}
                    </InputAdornment>
                ),
            }}
        />
            {/* <Header position="static">
                <ToolbarStyled>
                    <Typography variant="h6"><FaLeaf style={{ marginRight: '8px' }} />Green Market</Typography>
                    
                </ToolbarStyled>
            </Header> */}
                
            <Content>
                <Typography variant="h4" gutterBottom style={{ marginTop: 30, marginLeft: 0 }}>
                    Welcome to Our Grocery Store
                </Typography>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '21px' }}>
                    <StyledCard>
                        <Media image={fruitsImage} title="Fresh Fruits" />
                        <CardContent>
                            <Typography variant="h5">Fresh Fruits</Typography>
                            <Typography variant="body2">
                                Enjoy a variety of fresh fruits directly from the farm.
                            </Typography>
                            <Button variant="contained" color="primary" style={{ marginTop: '8px' }}>
                                Shop Now
                            </Button>
                        </CardContent>
                    </StyledCard>
                    <StyledCard>
                        <Media image={bakery} title="Bakery Items" />
                        <CardContent>
                            <Typography variant="h5">Bakery Items</Typography>
                            <Typography variant="body2">
                                Freshly baked bread and pastries to start your day.
                            </Typography>
                            <Button variant="contained" color="primary" style={{ marginTop: '8px' }}>
                                Shop Now
                            </Button>
                        </CardContent>
                    </StyledCard>
                    <StyledCard>
                        <Media image={veg} title="Vegetables" />
                        <CardContent>
                            <Typography variant="h5">Vegetables</Typography>
                            <Typography variant="body2">
                                Fresh and organic vegetables for your meals.
                            </Typography>
                            <Button variant="contained" color="primary" style={{ marginTop: '8px' }}>
                                Shop Now
                            </Button>
                        </CardContent>
                    </StyledCard>
                    <StyledCard>
                        <Media image={veg} title="Dairy Products" />
                        <CardContent>
                            <Typography variant="h5">Dairy Products</Typography>
                            <Typography variant="body2">
                                Quality dairy products for your daily needs.
                            </Typography>
                            <Button variant="contained" color="primary" style={{ marginTop: '8px' }}>
                                Shop Now
                            </Button>
                        </CardContent>
                    </StyledCard>
                    <StyledCard>
                        <Media image={veg} title="Snacks" />
                        <CardContent>
                            <Typography variant="h5">Snacks</Typography>
                            <Typography variant="body2">
                                Delicious snacks for your cravings.
                            </Typography>
                            <Button variant="contained" color="primary" style={{ marginTop: '8px' }}>
                                Shop Now
                            </Button>
                        </CardContent>
                    </StyledCard>
                </div>
            </Content>

            {/* Footer */}
            <Footer>
                <Typography variant="body2">
                    &copy; 2024 Grocery Store. All rights reserved.
                </Typography>
                <div>
                    <FaApple style={{ marginRight: '8px' }} />
                    <FaBreadSlice style={{ marginRight: '8px' }} />
                    <FaCarrot />
                </div>
            </Footer>
        </div>
    );
}

export default Home;
