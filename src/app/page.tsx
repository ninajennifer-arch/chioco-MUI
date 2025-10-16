import React from 'react';
import { Box, Typography } from '@mui/material'; 

const LandingPage = () => {
  const inputStyle = {
    // Style applied to all inputs for padding, border, etc.
    width: '100%', 
    padding: '15px 20px',
    borderRadius: '6px',
    border: '1px solid #DEDEDE',
    fontSize: '1rem',
    boxSizing: 'border-box',
    // Removed marginBottom from here to control spacing better in the form structure
  };
  
  return (
    <Box
      className="landing-page-container"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center',
        padding: '20px',
        backgroundColor: '#EB7E7EFF', 
        fontFamily: 'Railway, sans-serif',
      }}
    >
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0, 
          
          backgroundColor: '#eb7e7eff', 
          backgroundImage: `url('/images/bg-intro-desktop.png')`, 
          backgroundRepeat: 'repeat',
          opacity: 0.8, 
        }}
      />
        
      <Box
        className="content-wrapper" 
        sx={{ 
          zIndex: 1, 
          position: 'relative', 
          display: 'flex',
          alignItems: 'center', 
          gap: { xs: 5, md: 3 }, 
          maxWidth: '1100px', 
          width: '100%',
          flexDirection: { xs: 'column', md: 'row' }, 
          paddingY: { xs: 5, md: 0 },
        }}
      >
        
        <Box
          className="text-section"
          sx={{
            flex: 1, 
            color: 'white',
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Typography 
            variant="h1" 
            className="main-heading"
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              lineHeight: 1.1,
              marginBottom: '20px',
              fontWeight: 700,
            }}
          >
            Learn to code by watching others
          </Typography>
          <Typography 
            variant="body1" 
            className="sub-text"
            sx={{
              fontSize: '1rem',
              opacity: 0.8,
            }}
          >
            See how experienced developers solve problems in real-time. 
            Watching scripted tutorials is great, but understanding how 
            developers think is invaluable.
          </Typography>
        </Box>
        
        <Box
          className="form-section"
          sx={{
            flex: 1, 
          }}
        >
            
          <Box
            className="header-cta-button"
            sx={{
              backgroundColor: '#5D54A3', 
              color: 'white',
              textAlign: 'center',
              padding: '15px 20px',
              borderRadius: '8px',
              marginBottom: '25px',
              boxShadow: '0 8px 0 rgba(0, 0, 0, 0.2)', 
            }}
          >
            Try it free 7 days then $20/mo. thereafter
          </Box>

          <Box
            className="signup-form-box"
            component="div"
            sx={{
              backgroundColor: 'white',
              padding: '40px',
              borderRadius: '8px',
              boxShadow: '0 8px 0 rgba(0, 0, 0, 0.2)', 
            }}
          >
            <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {/* Correct Two-Column Layout for First Name / Last Name */}
              <div style={{ display: 'flex', gap: '15px' }}>
                <input type="text" placeholder="First Name" name="firstName" style={inputStyle} />
                <input type="text" placeholder="Last Name" name="lastName" style={inputStyle} />
              </div>
              
              {/* Correct Full-Width Stacked Layout for Email / Password */}
              <input type="email" placeholder="Email Address" name="email" style={inputStyle} />
              <input type="password" placeholder="Password" name="password" style={inputStyle} />
              
              <button 
                type="submit" 
                className="main-trial-cta"
                style={{
                  width: '100%',
                  backgroundColor: '#38CC8B', 
                  color: 'white',
                  padding: '15px 20px',
                  borderRadius: '6px',
                  border: 'none',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  letterSpacing: '1px',
                  cursor: 'pointer',
                  boxShadow: '0 4px 0 rgba(0, 0, 0, 0.1)',
                  marginTop: '5px',
                }}
              >
                CLAIM YOUR FREE TRIAL
              </button>
            </form>
            
            <Typography 
              variant="caption" 
              className="terms-link"
              sx={{
                fontSize: '0.7rem',
                color: '#BAB7D4', 
                textAlign: 'center',
                marginTop: '15px',
                display: 'block',
              }}
            >
              By clicking the button, you are agreeing to our 
              <a href="#" style={{ color: '#EB7E7EFF', fontWeight: 700, textDecoration: 'none', marginLeft: '3px' }}>Terms and Services</a>
            </Typography>
          </Box>
          
        </Box>
      </Box>
    </Box>
  );
};

export default LandingPage;