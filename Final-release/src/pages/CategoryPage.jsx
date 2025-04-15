import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  CardMedia,
  CircularProgress,
  Box,
  Button
} from '@mui/material';

const CategoryPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://mocki.io/v1/411ee242-81cf-424e-9a8b-5601c75fb251')
      .then((res) => res.json())
      .then((data) => {
        setData(data.categories);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
        <CircularProgress sx={{ color: '#006A71' }} />
      </Box>
    );
  }

  return (
    <Box px={4} py={6} bgcolor="#f5f7fa" minHeight="100vh">
      <Typography
        variant="h3"
        align="center"
        fontWeight="bold"
        color="#004f52"
        gutterBottom
        sx={{ 
          mb: 6,
          position: 'relative',
          '&:after': {
            content: '""',
            display: 'block',
            width: '80px',
            height: '4px',
            backgroundColor: '#006A71',
            margin: '16px auto 0'
          }
        }}
      >
        Browse Categories
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {data.map((category) => (
          <Grid item xs={12} md={6} lg={4} key={category.id}>
            <Card
              sx={{
                backgroundColor: '#ffffff',
                boxShadow: '0 8px 16px rgba(0, 106, 113, 0.1)',
                borderRadius: 3,
                height: '100%',
                transition: '0.3s',
                borderLeft: '4px solid #006A71',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 12px 20px rgba(0, 106, 113, 0.2)',
                },
              }}
            >
              <CardContent>
                <Typography 
                  variant="h5" 
                  fontWeight="bold" 
                  color="#004f52" 
                  gutterBottom
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: 3
                  }}
                >
                  <Box 
                    component="span"
                    sx={{
                      width: '8px',
                      height: '30px',
                      bgcolor: '#006A71',
                      mr: 2,
                      borderRadius: '4px'
                    }}
                  />
                  {category.name}
                </Typography>

                <Grid container spacing={3}>
                  {category.subcategories.map((sub) => (
                    <Grid item xs={12} sm={6} key={sub.id}>
                      <Link to={`/subcategory/${sub.id}`} style={{ textDecoration: 'none' }}>
                        <Card
                          sx={{
                            backgroundColor: '#fff',
                            boxShadow: '0 4px 8px rgba(0, 106, 113, 0.1)',
                            borderRadius: 2,
                            transition: '0.3s',
                            position: 'relative',
                            overflow: 'hidden',
                            height: '100%', // تضمن تساوي الارتفاع
                            display: 'flex',
                            flexDirection: 'column',
                            '&:hover': {
                              transform: 'translateY(-3px)',
                              boxShadow: '0 6px 12px rgba(0, 106, 113, 0.15)',
                              '& .MuiCardMedia-root': {
                                transform: 'scale(1.05)'
                              }
                            },
                            '&:before': {
                              content: '""',
                              position: 'absolute',
                              bottom: 0,
                              left: 0,
                              width: '100%',
                              height: '4px',
                              backgroundColor: '#006A71',
                              transform: 'scaleX(0)',
                              transition: 'transform 0.3s ease'
                            },
                            '&:hover:before': {
                              transform: 'scaleX(1)'
                            }
                          }}
                        >
                          <Box sx={{ 
                            height: '140px',
                            overflow: 'hidden'
                          }}>
                            <CardMedia
                              component="img"
                              height="140"
                              image={
                                sub.products?.[0]?.image ||
                                'https://via.placeholder.com/150/006A71/ffffff?text=Image'
                              }
                              alt={sub.name}
                              sx={{
                                objectFit: 'cover',
                                width: '100%',
                                transition: 'transform 0.5s ease'
                              }}
                            />
                          </Box>
                          <CardContent sx={{ 
                            py: 2,
                            flexGrow: 1,
                            display: 'flex',
                            flexDirection: 'column'
                          }}>
                            <Typography 
                              align="center" 
                              variant="subtitle1" 
                              fontWeight="600" 
                              color="#004f52"
                              sx={{
                                transition: 'color 0.3s',
                                '&:hover': {
                                  color: '#006A71'
                                },
                                flexGrow: 1
                              }}
                            >
                              {sub.name}
                            </Typography>
                            <Box display="flex" justifyContent="center" mt={1}>
                              <Button
                                size="small"
                                sx={{
                                  color: '#006A71',
                                  fontWeight: 'bold',
                                  '&:hover': {
                                    backgroundColor: 'rgba(0, 106, 113, 0.1)'
                                  }
                                }}
                              >
                                View Products
                              </Button>
                            </Box>
                          </CardContent>
                        </Card>
                      </Link>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CategoryPage;