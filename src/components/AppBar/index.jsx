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
import LibraryAddIcon from '@mui/icons-material/LibraryAdd'
import Profile from './Menus/Profile'
import SearchIcon from '@mui/icons-material/Search'
import InputAdornment from '@mui/material/InputAdornment'
import CloseIcon from '@mui/icons-material/Close'
import { useState } from 'react'
function AppBar() {
  const [searchValue, setSearchValue] = useState('')

  return (
    <Box px={2} sx={{
      bgcolor: (theme) => (theme.palette.mode === 'light' ? "#8e44ad" : "#2c3e50"),
      width: '100%',
      height: (theme) => theme.trello.appBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      overflowX: 'auto'
    }}>
      <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
        <AppsIcon sx={{ color: "white" }}/>
        <Typography variant="span" sx={{ fontWeight: "bold", fontSize: "1.25rem", color: "white" }}>
          Trello
        </Typography>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
          <Workspaces />
          <Recent />
          <Button
            sx={{
              color: 'white',
              border: 'none',
              '&:hover': {
                border: 'none'
              }
            }}
            startIcon={<LibraryAddIcon />}
            variant="outlined">
            Create
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
        <TextField
          id="outlined-search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          size='small'
          label="Search ..."
          type="text"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: 'white' }}/>
              </InputAdornment>
            ),
            endAdornment: (
              searchValue &&
              <CloseIcon sx={{ color: 'white', cursor: 'pointer' }} fontSize='small'
                onClick={() => setSearchValue('')} />
            )
          }}
          sx={{
            minWidth: 120,
            maxWidth: 170,
            '& label': { color: 'white' },
            '& input': { color: 'white' },
            '& label.Mui-focused': { color: 'white' },
            '& .MuiOutlinedInput-root': {
              "& fieldset": { borderColor: "white" },
              "&:hover fieldset": { borderColor: "white" },
              "&.Mui-focused fieldset": { borderColor: "white" },
            }
          }}

        />
        <ModeSelect />
        <Tooltip title="Notification">
          <Badge color="error" variant="dot">
            <NotificationsNoneIcon sx={{ color: "white" }} />
          </Badge>
        </Tooltip>
        <Tooltip title="Help">
          <HelpOutlineIcon sx={{ color: "white" }} />
        </Tooltip>
        <Profile />
      </Box>
    </Box>
  )
}

export default AppBar
