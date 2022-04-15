import { Grid, IconButton } from '@mui/material'
import React from 'react'
import { Avatar, Box } from '@mui/material';
import { Typography } from '@mui/material';
import styled from '@emotion/styled';
import { Stack } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Link from 'next/link';
import { ListItemAvatar } from '@mui/material';
import PieChartIcon from '@mui/icons-material/PieChart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArticleIcon from '@mui/icons-material/Article';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/router'
import dashboardstyles from '../../styles/Dashboard.module.css'
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import ListItemIcon from '@mui/material/ListItemIcon';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const AccountStyle = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#eeeeee',
    borderRadius: '1em',
    padding: '15px 15px'
}));

const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
};

interface userItems {
    avatar: JSX.Element,
    name: string,
    id: string,
}
const items: userItems[] = [
    {
        avatar: <PieChartIcon />,
        name: 'Overview',
        id: 'overview'
    },
    {
        avatar: <AccountCircleIcon />,
        name: 'Profile',
        id: 'profile'
    },
    {
        avatar: <TravelExploreIcon />,
        name: 'Recruitment Portal',
        id: 'recruitmentportal'
    },
    {
        avatar: <ArticleIcon />,
        name: 'Intern Policy',
        id: 'internpolicy'
    },
]

type Anchor = 'top' | 'left' | 'bottom' | 'right';

const StudentDashBoard = ({ children }: { children: any }) => {
    const { pathname } = useRouter()
    const match = (path: string) => (path == pathname ? true : false);
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setState({ ...state, [anchor]: open });
            };

    const list = (anchor: Anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 300 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
            padding='10px'
        >
            <Stack spacing={3}>
                <div style={{ height: 50 }} />
                <AccountStyle>
                    <Avatar src="/images/logo/spoLogo.png" alt="photoURL" />
                    <Box sx={{ ml: 2 }}>
                        <h3 style={{ margin: 5 }}>Manas Gupta</h3>
                        <h4 style={{ margin: 5, fontWeight: 400 }}>Student</h4>
                    </Box>
                </AccountStyle>
                <List sx={style} component="nav" aria-label="mailbox folders">
                    {items.map((item) => (
                        <Link href={`/studentDashboard/${item.id}`} passHref={true} key={item.id}>
                            <ListItem sx={{ borderRadius: 5 }} button selected={match(`/studentDashboard/${item.id}`) ? true : false}>
                                <ListItemAvatar sx={{ color: match(`/studentDashboard/${item.id}`) ? 'blue' : '#9e9e9e' }}>
                                    {item.avatar}
                                </ListItemAvatar>
                                <ListItemText><h4 style={{ margin: 5, color: match(`/studentDashboard/${item.id}`) ? 'blue' : '#9e9e9e' }}>{item.name}</h4></ListItemText>
                            </ListItem>
                        </Link>
                    ))}
                    <Link href={`/login`} passHref={true} key='logout'>
                        <ListItem sx={{ borderRadius: 5 }} button>
                            <ListItemAvatar sx={{ color: '#9e9e9e' }}>
                                <LogoutIcon />
                            </ListItemAvatar>
                            <ListItemText><h4 style={{ margin: 5, color: '#9e9e9e' }}>Logout</h4></ListItemText>
                        </ListItem>
                    </Link>
                </List>
            </Stack>
        </Box>
    );

    return (
        <div>
            <Grid container direction="row" justify="flex-start" alignItems="stretch" spacing={0}>
                <Grid item xs={2} lg={2} md={2} sm={12}>
                    <div className={dashboardstyles.container} style={{ position: 'fixed', height: '100vh', padding: 20, borderRight: "#eeeeee 2px solid" }}>
                        <Stack spacing={3}>
                            <div style={{ height: 50 }} />
                            <AccountStyle>
                                <Avatar src="/images/logo/spoLogo.png" alt="photoURL" />
                                <Box sx={{ ml: 2 }}>
                                    <h3 style={{ margin: 5 }}>Manas Gupta</h3>
                                    <h4 style={{ margin: 5, fontWeight: 400 }}>Student</h4>
                                </Box>
                            </AccountStyle>
                            <List sx={style} component="nav" aria-label="mailbox folders">
                                {items.map((item) => (
                                    <Link href={`/studentDashboard/${item.id}`} passHref={true} key={item.id}>
                                        <ListItem sx={{ borderRadius: 5 }} button selected={match(`/studentDashboard/${item.id}`) ? true : false}>
                                            <ListItemAvatar sx={{ color: match(`/studentDashboard/${item.id}`) ? 'blue' : '#9e9e9e' }}>
                                                {item.avatar}
                                            </ListItemAvatar>
                                            <ListItemText><h4 style={{ margin: 5, color: match(`/studentDashboard/${item.id}`) ? 'blue' : '#9e9e9e' }}>{item.name}</h4></ListItemText>
                                        </ListItem>
                                    </Link>
                                ))}
                                <Link href={`/login`} passHref={true} key='logout'>
                                    <ListItem sx={{ borderRadius: 5 }} button>
                                        <ListItemAvatar sx={{ color: '#9e9e9e' }}>
                                            <LogoutIcon />
                                        </ListItemAvatar>
                                        <ListItemText><h4 style={{ margin: 5, color: '#9e9e9e' }}>Logout</h4></ListItemText>
                                    </ListItem>
                                </Link>
                            </List>
                        </Stack>
                    </div>
                    <div className={dashboardstyles.mobileContainer}>
                        <IconButton onClick={toggleDrawer('left', true)}><MenuIcon fontSize='large' /></IconButton>
                        <Drawer
                            anchor={'left'}
                            open={state['left']}
                            onClose={toggleDrawer('left', false)}
                        >
                            {list('left')}
                        </Drawer>
                    </div>
                </Grid>

                <Grid item xs={12} lg={10} md={12} sm={12}>
                    {children}
                </Grid>
            </Grid>

        </div>
    )
}

export default StudentDashBoard