import React, { useState } from 'react';
import { Container, Card, CardContent, CardMedia, Button, TextField, InputAdornment, IconButton, Typography } from '@mui/material';
import { styled, keyframes } from '@mui/system';
import { FaApple, FaBreadSlice, FaCarrot, FaSearch, FaMinus, FaPlus } from 'react-icons/fa';
import fruitsImage from './assets/friuts.jpg';
import bakery from './assets/bakery.jpg';
import veg from './assets/veg.jpg';
import dairy from './assets/veg.jpg';
import snacks from './assets/veg.jpg';
import bannerImage from './assets/banner.jpg'; // Add your banner image path

const SearchBox = styled(TextField)(({ theme }) => ({
    width: '50%',
    maxWidth: '500px',
    margin: ' 20px',
    backgroundColor: 'white',
    borderRadius: '40px',
    marginLeft: 300,
   

    '& .MuiOutlinedInput-root': {
        borderRadius: '40px',
        '& fieldset': {
            border: '2px solid #ccc',
        },
        '&:hover fieldset': {
            border: '2px solid #4CAF50',
        },
        '&.Mui-focused fieldset': {
            border: '2px solid #4CAF50',
        },
        '& input': {
            padding: '8px 12px',
            fontSize: '0.875rem',
        },
    },
}));

const slide = keyframes`
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
`;

const Banner = styled('div')(({ theme }) => ({
    width: '100%',
    height: '300px', // Adjust the height of the banner as needed
    backgroundImage: `url(${bannerImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    animation: `${slide} 10s infinite`,
    marginTop:'20pz',
    marginLeft:20,
    justifyContent: 'flex-start',
}));

const Content = styled(Container)(({ theme }) => ({
    flex: 1,
    padding: theme.spacing(4),
    marginTop: theme.spacing(2),
}));

const Footer = styled('footer')(({ theme }) => ({
    backgroundColor: '#333',
    color: '#fff',
    padding: theme.spacing(2),
    textAlign: 'center',
    position: 'relative',
    bottom: 0,
    width: '100%',
}));

const ProductCard = styled(Card)(({ theme }) => ({
  marginTop: theme.spacing(2),
  width: '100%',
  maxWidth: '300px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
  },
}));

const ProductContent = styled(CardContent)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const ProductActions = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(2),
}));
function QuantityButton({ quantity, setQuantity }) {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <IconButton onClick={() => setQuantity(Math.max(1, quantity - 1))} disabled={quantity <= 1}>
                <FaMinus />
            </IconButton>
            <Typography variant="body1" style={{ margin: '0 8px' }}>
                {quantity}
            </Typography>
            <IconButton onClick={() => setQuantity(quantity + 1)}>
                <FaPlus />
            </IconButton>
        </div>
    );
}

function ProductPage() {
    const initialQuantities = { 1: 1, 2: 1, 3: 1, 4: 1, 5: 1 };
    const [quantities, setQuantities] = useState(initialQuantities);

    const handleQuantityChange = (id, newQuantity) => {
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [id]: newQuantity,
        }));
    };

    const products = [
        { id: 1, image: fruitsImage, title: 'Fresh Fruits', price: '$10.00' },
        { id: 2, image: bakery, title: 'Bakery Items', price: '$5.00' },
        { id: 3, image: veg, title: 'Vegetables', price: '$8.00' },
        { id: 4, image: dairy, title: 'Dairy Products', price: '$12.00' },
        { id: 5, image: snacks, title: 'Snacks', price: '$3.00' },
    ];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <SearchBox
                variant="outlined"
                placeholder="Search..."
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <FaSearch style={{ color: '#4CAF50', fontSize: '1rem' }} />
                        </InputAdornment>
                    ),
                }}
            />

            <Banner />

            <Content>
                <Typography variant="h4" gutterBottom>
                    Our Products
                </Typography>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '21px', justifyContent: 'center' }}>
                    {products.map((product) => (
                        <ProductCard key={product.id}>
                            <CardMedia image={product.image} title={product.title} style={{ height: '200px' }} />
                            <ProductContent>
                                <Typography variant="h5">{product.title}</Typography>
                                <Typography variant="body2">Price: {product.price}</Typography>
                            </ProductContent>
                            <ProductActions>
                                <QuantityButton
                                    quantity={quantities[product.id]}
                                    setQuantity={(newQuantity) => handleQuantityChange(product.id, newQuantity)}
                                />
                                <Button variant="contained" color="primary">Add to Cart</Button>
                            </ProductActions>
                        </ProductCard>
                    ))}
                </div>
            </Content>

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

export default ProductPage;
