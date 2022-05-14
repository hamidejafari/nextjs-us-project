import * as React from 'react';
import { Divider, Box, List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';

import SidebarItems from "./SidebarItems";

function BasicList(props) {
  const { user } = props;
  return (
    <Box className={"sidePanel"} sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem sx={{  display: { md: 'flex', xs: 'none' }, mb: '10px', }}>
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/images/userpl.webp" />
            </ListItemAvatar>
            <ListItemText primary={user?.name +" "+ (user?.family ? user.family : '')} />
          </ListItem>
          <Divider sx={{ display: { md: 'flex', xs: 'none' } }} />
          <SidebarItems user={user} />
        </List>
      </nav>
    </Box>
  );
}
export default BasicList;