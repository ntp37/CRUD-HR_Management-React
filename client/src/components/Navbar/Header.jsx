import { useState } from 'react'
import { NotificationsOutlined, InboxOutlined, Menu } from '@mui/icons-material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Avatar, Drawer } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import NavItem from './NavItem';

export default function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false)
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const customBreakpoint = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280
      }
    }
  })

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <div className="header flex flex-1 p-3 lg:bg-blue-50 bg-blue-600 items-center justify-between lg:justify-end sticky">
        <div className='flex lg:hidden gap-3'>
          <button type='button' onClick={() => setMobileOpen(true)}>
            <Menu className="sm:ml-5 text-blue-50" sx={{ fontSize: {xs: 24, sm: 28} }} />
          </button>
          <h1 className="flex items-center text-sm sm:text-2xl text-blue-50 font-semibold">HR Admin V1.0</h1>
        </div>
        <div className="lg:text-slate-600 text-blue-50 flex gap-2 sm:gap-4">
          <InboxOutlined className="" sx={{ fontSize: {xs: 24, sm: 28} }} />
          <NotificationsOutlined className="" sx={{ fontSize: {xs: 24, sm: 28} }} />
          <Avatar className="" sx={{ bgcolor: deepOrange[500], width: {xs: 24, sm: 28}, height: {xs: 24, sm: 28}, fontSize: {xs: 14, sm: 16} }}>N</Avatar>
        </div>
      </div>
      <nav className='modal'>
        <ThemeProvider theme={customBreakpoint}>
          <Drawer
            container={container}
            variant='temporary'
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{keepMounted: true}}
            sx={{display: {xs: 'block', lg: 'none'}, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240, bgcolor:'#2563EB', opacity: '100' }}}><NavItem />
          </Drawer>
        </ThemeProvider>
      </nav>
    </>
  );
}
