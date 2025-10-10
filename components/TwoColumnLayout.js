import React from 'react'
import { Grid, Typography, Button, TextField, Box, useTheme, Link } from '@mui/material'
export default function TwoColumnLayout() {
  return (
    <Grid 
      container 
      spacing={4} 
      sx={{ 
        minHeight: '100vh', 
        backgroundColor: '#FF7979', // The reddish-pink background
        alignItems: 'center', 
        p: { xs: 4, md: 8 }, 
      }}
    >
      {/* Left Column - Marketing Text */}
      <Grid 
          item xs={12} md={6} 
          sx={{ color: 'white', textAlign: { xs: 'center', md: 'left' } }} 
      >
        <Typography 
            variant='h3' 
            component='h1' 
            gutterBottom 
            sx={{ fontWeight: 700, mb: 2 }}
        >
          Learn to code by watching others
        </Typography>
        <Typography variant='body1'>
          See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.
        </Typography>
      </Grid>

      {/* Right Column - Promo Bar and Form */}
      <Grid item xs={12} md={6}>
        
        {/* Full Width Button (PROMO BAR) */}
        <Box
          sx={{
            p: 1.5,
            mb: 1,
            backgroundColor: '#5E54A4', // Dark purple color
            borderRadius: 1,
            textAlign: 'center',
            boxShadow: 3, 
          }}
        >
          <Typography variant='body2' sx={{ color: 'white', fontWeight: 600 }}>
            Try it free 7 days <span style={{ fontWeight: 400 }}>then $20/mo. thereafter</span>
          </Typography>
        </Box>

        {/* Outer Box for White Background (Wraps the form) */}
        <Box 
          sx={{ 
            backgroundColor: 'white', 
            p: 4, 
            borderRadius: 1, 
            boxShadow: 3 
          }}
        >
          {/* Contact Form - Inner Box */}
          <Box component='form' display='flex' flexDirection='column' gap={2}>
            
            {/* Form Inputs */}
            <TextField label='First Name' variant='outlined' fullWidth />
            <TextField label='Last Name' variant='outlined' fullWidth />
            <TextField label='Email Address' variant='outlined' fullWidth />
            <TextField label='Password' type='password' variant='outlined' fullWidth />

            {/* Submit Button Final Styling */}
            <Button 
              type='submit' 
              variant='contained' 
              fullWidth 
              sx={{ 
                  backgroundColor: '#38CC8B', // Green submit button color
                  '&:hover': { backgroundColor: '#77E2B3' },
                  textTransform: 'uppercase', 
                  p: 1.5 
              }}
            >
              CLAIM YOUR FREE TRIAL
            </Button>

            {/* Terms & Services notes */}
            <Typography variant='caption' color='text.secondary' sx={{ textAlign: 'center' }}>
              By submitting, you agree to the <span style={{ color: '#FF7979', fontWeight: 'bold' }}>Terms and Services</span>
            </Typography>

          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}