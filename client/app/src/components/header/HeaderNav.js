import React, { useState } from 'react';
import { Typography, Link, Drawer, IconButton, ListItemText, ListItem } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

const StyledLink = styled(Link)({
  paddingRight: '10px'
});

function scrollTo(element) {
  setTimeout(() => {
    var location = document.querySelector(element).getBoundingClientRect();
    window.scrollTo(location);
  }, 100);
}

const HeaderNav = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [drawer, setDrawer] = useState(false);
  window.addEventListener('resize', handleWindowSizeChange);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  };
  const isMobile = width <= 500;
  if (isMobile) {
    function toggleDrawer() {
      const value = !drawer;
      setDrawer(value);
    }
    return (
      <div>
        <IconButton color="inherit" onClick={toggleDrawer}><MenuIcon></MenuIcon></IconButton>
        <Drawer anchor="left" open={drawer} onClose={toggleDrawer}>
          <ListItem button onClick={() => { scrollTo('#list') }}>
            <ListItemText primary="lista" />
          </ListItem>
          <ListItem button onClick={() => { scrollTo('#appFooter') }}>
            <ListItemText primary="sobre mim" />
          </ListItem>
          <ListItem button onClick={() => { scrollTo('#register') }}>
            <ListItemText primary="cadastro" />
          </ListItem>
        </Drawer>

      </div>
    );
  }
  return (<div className="Header-nav">
    <Typography display="inline">
      <StyledLink href="#" color="inherit" onClick={() => { scrollTo('#register') }}>
        cadastro
    </StyledLink>
      <StyledLink color="inherit">•</StyledLink>
      <StyledLink href="#" color="inherit" onClick={() => { scrollTo('#list') }}>
        lista
    </StyledLink>
      <StyledLink color="inherit">•</StyledLink>
      <StyledLink href="#" color="inherit" onClick={() => { scrollTo('#appFooter') }}>
        sobre mim
    </StyledLink>
    </Typography>
  </div>);
}

export default HeaderNav;