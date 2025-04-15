import React from 'react';
import Stack from '@mui/material/Stack';
import { Typography, Box, useMediaQuery, Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faSnapchatGhost,
  faYoutube
} from '@fortawesome/free-brands-svg-icons'; 

const Footerofproducts = () => {
  const isSmallScreen = useMediaQuery('(max-width: 600px)'); // for checking screen size

  return (
    <>
      <Stack
        spacing={4}
        direction={isSmallScreen ? 'column' : 'row'}
        sx={{
          padding: 3,
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          background: '#9ACBD0', // Same background as navbar
          borderTop: '1px solid #ccc',
        }}
      >
        {/* ABOUT US Section */}
        <Stack spacing={1} direction="column" sx={{ color: '#fff' }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              color: '#006A71',
              '&:hover': { color: '#00B0FF' },
            }}
          >
            ABOUT US
          </Typography>
          <Button sx={{ color: '#fff', '&:hover': { color: '#00B0FF' } }}>
            Our Story
          </Button>
          <Button sx={{ color: '#fff', '&:hover': { color: '#00B0FF' } }}>
            Careers
          </Button>
          <Button sx={{ color: '#fff', '&:hover': { color: '#00B0FF' } }}>
            Blog
          </Button>
          <Button sx={{ color: '#fff', '&:hover': { color: '#00B0FF' } }}>
            Press
          </Button>
          <Button sx={{ color: '#fff', '&:hover': { color: '#00B0FF' } }}>
            Affiliate Program
          </Button>
        </Stack>

        {/* CUSTOMER SERVICE Section */}
        <Stack spacing={1} direction="column" sx={{ color: '#fff' }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              color: '#006A71',
              '&:hover': { color: '#00B0FF' },
            }}
          >
            CUSTOMER SERVICE
          </Typography>
          <Button sx={{ color: '#fff', '&:hover': { color: '#00B0FF' } }}>
            Contact Us
          </Button>
          <Button sx={{ color: '#fff', '&:hover': { color: '#00B0FF' } }}>
            Shipping Info
          </Button>
          <Button sx={{ color: '#fff', '&:hover': { color: '#00B0FF' } }}>
            Returns & Exchanges
          </Button>
          <Button sx={{ color: '#fff', '&:hover': { color: '#00B0FF' } }}>
            FAQs
          </Button>
          <Button sx={{ color: '#fff', '&:hover': { color: '#00B0FF' } }}>
            Order Tracking
          </Button>
        </Stack>

        {/* SHOP Section */}
        <Stack spacing={1} direction="column" sx={{ color: '#fff' }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              color: '#006A71',
              '&:hover': { color: '#00B0FF' },
            }}
          >
            SHOP
          </Typography>
          <Button sx={{ color: '#fff', '&:hover': { color: '#00B0FF' } }}>
            New Arrivals
          </Button>
          <Button sx={{ color: '#fff', '&:hover': { color: '#00B0FF' } }}>
            Best Sellers
          </Button>
          <Button sx={{ color: '#fff', '&:hover': { color: '#00B0FF' } }}>
            Gift Cards
          </Button>
          <Button sx={{ color: '#fff', '&:hover': { color: '#00B0FF' } }}>
            Sale
          </Button>
          <Button sx={{ color: '#fff', '&:hover': { color: '#00B0FF' } }}>
            Brands
          </Button>
        </Stack>
      </Stack>

      {/* CONNECT WITH US Section */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 2,
          py: 3,
          background: '#9ACBD0', // Matching navbar background color
          borderTop: '1px solid #ccc',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: '#006A71',
            fontWeight: 'bold',
            '&:hover': { color: '#00B0FF' },
          }}
        >
          CONNECT WITH US
        </Typography>

        {/* Social Media Icons */}
        <FontAwesomeIcon
          icon={faFacebookF}
          className="icon-hover"
          style={{
            fontSize: '30px',
            color: '#fff',
            cursor: 'pointer',
            transition: 'color 0.3s',
          }}
          onMouseEnter={(e) => (e.target.style.color = '#3b5998')}
          onMouseLeave={(e) => (e.target.style.color = '#fff')}
        />
        <FontAwesomeIcon
          icon={faInstagram}
          className="icon-hover"
          style={{
            fontSize: '30px',
            color: '#fff',
            cursor: 'pointer',
            transition: 'color 0.3s',
          }}
          onMouseEnter={(e) => (e.target.style.color = '#CAC4C6FF')}
          onMouseLeave={(e) => (e.target.style.color = '#fff')}
        />
        <FontAwesomeIcon
          icon={faTwitter}
          className="icon-hover"
          style={{
            fontSize: '30px',
            color: '#fff',
            cursor: 'pointer',
            transition: 'color 0.3s',
          }}
          onMouseEnter={(e) => (e.target.style.color = '#1DA1F2')}
          onMouseLeave={(e) => (e.target.style.color = '#fff')}
        />
        <FontAwesomeIcon
          icon={faSnapchatGhost}
          className="icon-hover"
          style={{
            fontSize: '30px',
            color: '#fff',
            cursor: 'pointer',
            transition: 'color 0.3s',
          }}
          onMouseEnter={(e) => (e.target.style.color = '#FFFC00')}
          onMouseLeave={(e) => (e.target.style.color = '#fff')}
        />
        <FontAwesomeIcon
          icon={faYoutube}
          className="icon-hover"
          style={{
            fontSize: '30px',
            color: '#fff',
            cursor: 'pointer',
            transition: 'color 0.3s',
          }}
          onMouseEnter={(e) => (e.target.style.color = '#FF0000')}
          onMouseLeave={(e) => (e.target.style.color = '#fff')}
        />
      </Box>
    </>
  );
};

export default Footerofproducts;
