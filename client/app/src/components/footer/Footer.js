import React from 'react';
import './Footer.css';
import { Typography, Container, Box } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

const StyledTypography = styled(Typography)({
  paddingTop: '20px'
});

const Footer = () => {
  return (
    <footer className="Footer" id="appFooter">
      <Container align="center">
        <Box pt={7} pb={7}>
          <StyledTypography variant="body1">
            Guilherme Corintho Pereira Araujo
          </StyledTypography>
          <StyledTypography variant="body1">
            guilhermecorintho@gmail.com
          </StyledTypography>
          <StyledTypography variant="body1">
            (31) 9 8467-1798
          </StyledTypography>
          <StyledTypography variant="body1">
            Belo Horizonte - MG
          </StyledTypography>
        </Box>
      </Container>
    </footer>
  )
}

export default Footer;