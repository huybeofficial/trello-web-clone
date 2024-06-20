import Box from '@mui/material/Box'
import DashboardIcon from '@mui/icons-material/Dashboard'
import Chip from '@mui/material/Chip'
import SortIcon from '@mui/icons-material/Sort'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
const BOARD_STYLE = {
  border: 'none',
  borderRadius: "5px",
  backgroundColor: 'transparent',
  px: "5px",
  color: "white",
  '.MuiSvgIcon-root': { color: "white" },
  '&:hover': { bgcolor: "primary.50" }
}

function BoardBar() {
  return (
    <Box sx={{
      bgcolor: (theme) => (theme.palette.mode === 'light' ? "#9b59b6" : "#34495e"),
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      px: 2,
      overflowX: 'auto',
      borderBottom: '1px solid white'
    }}>
      <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
        <Chip
          clickable
          icon={<DashboardIcon />}
          label="HuybeNoop"
          sx={BOARD_STYLE}

        />
        <Chip
          clickable
          icon={<SortIcon />}
          label="Board"
          sx={BOARD_STYLE}


        />
        <Chip
          clickable
          icon={<AddToDriveIcon />}
          label="Google Drive"
          sx={BOARD_STYLE}


        />
        <Chip
          clickable
          icon={<BoltIcon />}
          label="Automatic"
          sx={BOARD_STYLE}


        />
        <Chip
          clickable
          icon={<FilterListIcon />}
          label="Filter"
          sx={BOARD_STYLE}


        />
      </Box>
      <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
        <Button
          sx={{
            color: 'white',
            borderColor: 'white',
            '&:hover': { borderColor: 'white' }
          }}
         variant="outlined"
          startIcon={<PersonAddIcon />}>
        Invite
        </Button>
        <AvatarGroup max={4}
          sx={{
            gap: 0.85,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              fontSize: '0.85rem',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              '&:first-of-type': { bgcolor: "#a4b0be" },
            }
          }}>
          <Tooltip title="Tran Huy (huybe)">
            <Avatar alt="Tran Huy" src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/448560606_993176872268915_5088384414997815306_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=LiB-BjxaUMUQ7kNvgGLT-Be&_nc_ht=scontent.fhan17-1.fna&oh=00_AYDnru765fD2NbvkRnpLbOv8M-hsBenj3wKIXvC1OubB7g&oe=6679FF2F" />
          </Tooltip>
          <Tooltip title="Mèo méo meo (mewmew)">
            <Avatar alt="Mèo méo meo" src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/345857846_1200284580569328_8820718658275609580_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=IkQdYf1nwEEQ7kNvgFQjw3c&_nc_ht=scontent.fhan17-1.fna&oh=00_AYB5zXYq2ZqMh5-PtQBNIiv5uekM3wH2G8FreAMzA1P2Hg&oe=667A0EA7" />
          </Tooltip>
          <Tooltip title="Đoàn Hằng (cowtee)">
            <Avatar alt="cowtee" src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/171695367_1150414962120120_262054088560843748_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=TpM53VeLxpgQ7kNvgGWCbK_&_nc_ht=scontent.fhan17-1.fna&oh=00_AYBIyEIlMWgqMmvdKjLzAftZNBryar7acVvVzUU2sQ915w&oe=667A0585" />
          </Tooltip>
          <Tooltip title="Chó gâu gâu (tuan)">
            <Avatar alt="cho" src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/448380865_444398354979874_8205645431972547922_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=M-0FkMSkH_cQ7kNvgGOFNv_&_nc_ht=scontent.fhan17-1.fna&oh=00_AYAufV-JETkqnw_O6IG4U22ZrjE9gkAAKFCLLL0TQ4mPIw&oe=667A1CFA" />
          </Tooltip>
          <Tooltip title="Đoàn Hằng (cowtee)">
            <Avatar alt="cowtee" src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/171695367_1150414962120120_262054088560843748_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=TpM53VeLxpgQ7kNvgGWCbK_&_nc_ht=scontent.fhan17-1.fna&oh=00_AYBIyEIlMWgqMmvdKjLzAftZNBryar7acVvVzUU2sQ915w&oe=667A0585" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
