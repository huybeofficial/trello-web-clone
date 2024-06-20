// import { Box, TextField, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import ModeSelect from '../ModeSelect'
import AppsIcon from '@mui/icons-material/Apps'
import Workspaces from './Menus/Workspaces'
import Recent from './Menus/Recent'
import Button from '@mui/material/Button'
import Badge from '@mui/material/Badge'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import Tooltip from '@mui/material/Tooltip'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import Profile from './Menus/Profile'
function AppBar() {
  return (
    <Box px={2} sx={{
      // backgroundColor: 'primary.light',
      width: '100%',
      height: (theme) => theme.trello.appBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      overflowX: 'auto'
    }}>
      <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
        <AppsIcon sx={{ color: "primary.main" }}/>
        <Typography variant="span" sx={{ fontWeight: "bold", fontSize: "1.25rem", color: "primary.main" }}>
          Trello
        </Typography>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
          <Workspaces />
          <Recent />
          <Button variant="outlined">Create</Button>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
        <TextField id="outlined-search" size='small' label="Search ..." type="search" sx={{ minWidth: 120 }} />
        <ModeSelect />
        <Tooltip title="Notification">
          <Badge color="secondary" variant="dot">
            <NotificationsNoneIcon sx={{ color: "primary.main" }} />
          </Badge>
        </Tooltip>
        <Tooltip title="Help">
          <HelpOutlineIcon sx={{ color: "primary.main" }} />
        </Tooltip>
        <Profile />
      </Box>
    </Box>
  )
}

export default AppBar
