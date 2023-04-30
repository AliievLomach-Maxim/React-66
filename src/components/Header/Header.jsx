import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, NavLink, useNavigate } from 'react-router-dom'
import { getNewsThunk } from '../../store/news/thunk'
import { logOut } from '../../store/auth/slice'
import { dellToken } from '../../services/auth-service'
import {
	AppBar,
	Box,
	Button,
	Container,
	IconButton,
	Menu,
	MenuItem,
	Toolbar,
	Typography,
} from '@mui/material'

import AdbIcon from '@mui/icons-material/Adb'
import MenuIcon from '@mui/icons-material/Menu'
// import { useEffect } from 'react'
// import { getProfileThunk } from '../../store/auth/thunk'

const pages = ['Home', 'News', 'Todo', 'Products']

const Header = ({ showModal }) => {
	const { profile, access_token } = useSelector((state) => state.auth)
	const navigate = useNavigate()
	const [anchorElNav, setAnchorElNav] = useState(null)
	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget)
	}

	const handleCloseNavMenu = (page) => {
		setAnchorElNav(null)
		page === 'Home' ? navigate('/') : navigate(`${page.toLowerCase()}`)
	}

	const handleLogin = () => {
		navigate('/login')
	}
	const dispatch = useDispatch()

	const handleLogOut = () => {
		dispatch(logOut())
		dellToken()
	}

	// useEffect(() => {
	// 	console.log('object')
	// 	access_token && dispatch(getProfileThunk())
	// }, [access_token, dispatch])

	return (
		<AppBar position='static'>
			<Container maxWidth='xl'>
				<Toolbar disableGutters>
					<AdbIcon
						sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
					/>
					<Typography
						variant='h6'
						noWrap
						component='a'
						href='/'
						sx={{
							mr: 2,
							display: { xs: 'none', md: 'flex' },
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none',
						}}
					>
						LOGO
					</Typography>

					<Box
						sx={{
							flexGrow: 1,
							display: { xs: 'flex', md: 'none' },
						}}
					>
						<IconButton
							size='large'
							aria-label='account of current user'
							aria-controls='menu-appbar'
							aria-haspopup='true'
							onClick={handleOpenNavMenu}
							color='inherit'
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id='menu-appbar'
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: 'block', md: 'none' },
							}}
						>
							{pages.map((page) => (
								<MenuItem
									key={page}
									onClick={handleCloseNavMenu}
								>
									<Typography textAlign='center'>
										{page}
									</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<AdbIcon
						sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
					/>
					<Typography
						variant='h5'
						noWrap
						component='a'
						href=''
						sx={{
							mr: 2,
							display: { xs: 'flex', md: 'none' },
							flexGrow: 1,
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none',
						}}
					>
						LOGO
					</Typography>
					<Box
						sx={{
							flexGrow: 1,
							display: { xs: 'none', md: 'flex' },
						}}
					>
						{pages.map((page) => (
							<Button
								role='link'
								key={page}
								onClick={() => handleCloseNavMenu(page)}
								sx={{
									my: 2,
									color: 'white',
									display: 'block',
								}}
							>
								{page}
							</Button>
						))}

						<Button
							role='link'
							sx={{
								my: 2,
								color: 'white',
								display: 'block',
							}}
							onClick={profile ? handleLogOut : handleLogin}
						>
							{profile ? 'LogOut' : 'LogIn'}
						</Button>
					</Box>

					{/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
				</Toolbar>
			</Container>
		</AppBar>
		// 	<nav className='navbar bg-dark mb-3 navbar-expand-lg'>
		// 		<div className='container-fluid'>
		// 			<span className='navbar-brand mb-0 h1 text-success'>
		// 				Navbar
		// 			</span>
		// 			<div
		// 				className='collapse navbar-collapse'
		// 				id='navbarNavAltMarkup'
		// 			>
		// 				<div className='navbar-nav'>
		// 					<NavLink
		// 						className='nav-link text-white '
		// 						aria-current='page'
		// 						to='/'
		// 					>
		// 						Home
		// 					</NavLink>
		// 					{/* {access_token && (
		// 						<> */}
		// 					<NavLink className='nav-link text-white' to='/news'>
		// 						News
		// 					</NavLink>
		// 					<NavLink className='nav-link text-white' to='/todo'>
		// 						Todo
		// 					</NavLink>
		// 					<NavLink className='nav-link text-white' to='/products'>
		// 						Products
		// 					</NavLink>
		// 					{/* </>
		// 					)} */}
		// 				</div>
		// 			</div>
		// 			<Button variant='outlined' onClick={showModal}>
		// 				Open Modal
		// 			</Button>
		// 			{/* <button className='btn btn-outline-success' onClick={showModal}>
		// 			</button> */}
		// 			{profile && <div className='text-white'>{profile.name}</div>}

		// 			<Button
		// 				variant='outlined'
		// 				onClick={profile ? handleLogOut : handleLogin}
		// 			>
		// 				{profile ? 'LogOut' : 'LogIn'}
		// 			</Button>
		// 			{/* <button
		// 				className='btn btn-outline-success'
		// 				onClick={profile ? handleLogOut : handleLogin}
		// 			>
		// 				{profile ? 'LogOut' : 'LogIn'}
		// 			</button> */}

		// 			<Button
		// 				variant='outlined'
		// 				onClick={() => {
		// 					dispatch(getNewsThunk())
		// 				}}
		// 			>
		// 				thunk
		// 			</Button>
		// 			{/* <button
		// 				className='btn btn-outline-success'
		// 				onClick={() => {
		// 					dispatch(getNewsThunk())
		// 				}}
		// 			>
		// 				thunk
		// 			</button> */}
		// 		</div>
		// 	</nav>
	)
}

export default Header
