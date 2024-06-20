import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import React from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import Divider from '@mui/material/Divider'
import AddCardIcon from '@mui/icons-material/AddCard'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import ArchiveIcon from '@mui/icons-material/Archive'
import { Tooltip } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import AttachmentIcon from '@mui/icons-material/Attachment'
import GroupIcon from '@mui/icons-material/Group'

const COLUMN_HEADER_HEIGHT = "50px"
const COLUMN_FOOTER_HEIGHT = "56px"
const COLUMN_CONTENT_HEIGHT = `calc(100% - ${COLUMN_HEADER_HEIGHT} - ${COLUMN_FOOTER_HEIGHT})`

function BoardContent() {

  const [anchorEl, setAnchorEl] = React.useState(null)
  const id = React.useId(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box sx={{
      bgcolor: (theme) => (theme.palette.mode === 'light' ? "#9b59b6" : "#34495e"),
      width: '100%',
      height: (theme) => theme.trello.boardContentHeight,
      p: '10px 0'
    }}>
      <Box sx={{
        bgcolor: 'inherit',
        width: "100%",
        height: "100%",
        display: 'flex',
        overflowX: 'auto',
        overflowY: 'hidden',
        "&::-webkit-scrollbar-track": { m: 2 }
      }}>
        <Box
          sx={{
            height: 'fit-content',
            width: '300px',
            bgcolor: (theme) => (theme.palette.mode === 'light' ? "#F1F2F4" : "#101204"),
            ml: 2,
            borderRadius: "5px",
            maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})`
          }}>
          <Box sx={{
            p: 2,
            height: COLUMN_HEADER_HEIGHT,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',

          }}>
            <Typography
              variant='h6'
              sx={{
                fontWeight: 'bold',
                cursor: 'pointer',
                fontSize: '1rem',
              }} >
              Column Title
            </Typography>
            <IconButton
              aria-label="more"
              id={`long-button-${id}`}
              aria-controls={open ? `long-menu-${id}` : undefined}
              aria-expanded={open ? 'true' : undefined}
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreHorizIcon />
            </IconButton>
            <Menu
              id={`long-menu-${id}`}
              MenuListProps={{
                'aria-labelledby': `long-button-${id}`
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}

            >
              <MenuItem>
                <ListItemIcon>
                  <AddCardIcon />
                </ListItemIcon>
                Add a card
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <DeleteOutlineIcon />
                </ListItemIcon>
                Remove this card
              </MenuItem>
              <Divider />
              <MenuItem>
                <ListItemIcon>
                  <ArchiveIcon />
                </ListItemIcon>
                Archive this card
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            maxHeight: (theme) => `calc(
          ${theme.trello.boardContentHeight} 
          - ${theme.spacing(5)} 
          - ${COLUMN_HEADER_HEIGHT} 
          - ${COLUMN_FOOTER_HEIGHT})`,
            overflowY: 'auto',
            overflowX: 'hidden',
            p: '0 5px',
            m: '0 5px',
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#b2bec3",
              borderRadius: '4px'
            },
            "&::-webkit-scrollbar-thumb:hover": {
              backgroundColor: "#b0acb1",
            },
          }}>
            <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.1) !important',
              overflow: 'unset'
            }}>
              <CardMedia
                sx={{ height: 140 }}
                image="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/448723359_855627229936309_950896795513817100_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=oklkExPQGUwQ7kNvgGBKwNA&_nc_ht=scontent.fhan17-1.fna&oh=00_AYAwy2xPl6do9OugmKxDqMl8KxGYlgnidXvO8SPVhiNu7Q&oe=667A4B99"
                title="green iguana"
              />
              <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                <Typography>
                  [Web_Công nợ KH] Tiền căn trái
                </Typography>
              </CardContent>
              <CardActions>
                <Tooltip title="Staff">
                  <Button size="small" startIcon={<GroupIcon />}>2</Button>
                </Tooltip>
                <Tooltip title="Comments">
                  <Button size="small" startIcon={<ChatBubbleOutlineIcon />}>2</Button>
                </Tooltip>
                <Tooltip title="Attachments">
                  <Button size="small" startIcon={<AttachmentIcon />}>2</Button>
                </Tooltip>
              </CardActions>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.1) !important',
              overflow: 'unset'

            }}>
              <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                <Typography>
                  New card
                </Typography>
              </CardContent>
            </Card>
          </Box>
          <Box sx={{
            p: 2,
            height: COLUMN_FOOTER_HEIGHT,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
            <Button startIcon={<AddIcon />}>
              Add a card
            </Button>
            <Tooltip>
              <DragHandleIcon sx={{ cursor: 'pointer' }} />
            </Tooltip>
          </Box>
        </Box>
        <Box
          sx={{
            height: 'fit-content',
            width: '300px',
            bgcolor: (theme) => (theme.palette.mode === 'light' ? "#F1F2F4" : "#101204"),
            ml: 2,
            borderRadius: "5px",
            maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})`
          }}>
          <Box sx={{
            p: 2,
            height: COLUMN_HEADER_HEIGHT,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'

          }}>
            <Typography
              variant='h6'
              sx={{
                fontWeight: 'bold',
                cursor: 'pointer',
                fontSize: '1rem'
              }} >
              Column Title
            </Typography>
            <IconButton
              aria-label="more"
              id={`long-button-${id}`}
              aria-controls={open ? `long-menu-${id}` : undefined}
              aria-expanded={open ? 'true' : undefined}
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreHorizIcon />
            </IconButton>
            <Menu
              id={`long-menu-${id}`}
              MenuListProps={{
                'aria-labelledby': `long-button-${id}`
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}

            >
              <MenuItem>
                <ListItemIcon>
                  <AddCardIcon />
                </ListItemIcon>
                Add a card
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <DeleteOutlineIcon />
                </ListItemIcon>
                Remove this card
              </MenuItem>
              <Divider />
              <MenuItem>
                <ListItemIcon>
                  <ArchiveIcon />
                </ListItemIcon>
                Archive this card
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            maxHeight: (theme) => `calc(
          ${theme.trello.boardContentHeight} 
          - ${theme.spacing(5)} 
          - ${COLUMN_HEADER_HEIGHT} 
          - ${COLUMN_FOOTER_HEIGHT})`,
            overflowY: 'auto',
            overflowX: 'hidden',
            p: '0 5px',
            m: '0 5px',
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#b2bec3",
              borderRadius: '4px'
            },
            "&::-webkit-scrollbar-thumb:hover": {
              backgroundColor: "#b0acb1"
            }
          }}>
            <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.1) !important',
              overflow: 'unset'
            }}>
              <CardMedia
                sx={{ height: 140 }}
                image="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/448723359_855627229936309_950896795513817100_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=oklkExPQGUwQ7kNvgGBKwNA&_nc_ht=scontent.fhan17-1.fna&oh=00_AYAwy2xPl6do9OugmKxDqMl8KxGYlgnidXvO8SPVhiNu7Q&oe=667A4B99"
                title="green iguana"
              />
              <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                <Typography>
                  [Web_Công nợ KH] Tiền căn trái
                </Typography>
              </CardContent>
              <CardActions>
                <Tooltip title="Staff">
                  <Button size="small" startIcon={<GroupIcon />}>2</Button>
                </Tooltip>
                <Tooltip title="Comments">
                  <Button size="small" startIcon={<ChatBubbleOutlineIcon />}>2</Button>
                </Tooltip>
                <Tooltip title="Attachments">
                  <Button size="small" startIcon={<AttachmentIcon />}>2</Button>
                </Tooltip>
              </CardActions>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.1) !important',
              overflow: 'unset'

            }}>
              <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                <Typography>
                  New card
                </Typography>
              </CardContent>
            </Card>
          </Box>
          <Box sx={{
            p: 2,
            height: COLUMN_FOOTER_HEIGHT,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <Button startIcon={<AddIcon />}>
              Add a card
            </Button>
            <Tooltip>
              <DragHandleIcon sx={{ cursor: 'pointer' }} />
            </Tooltip>
          </Box>
        </Box>
        <Box
          sx={{
            height: 'fit-content',
            width: '300px',
            bgcolor: (theme) => (theme.palette.mode === 'light' ? "#F1F2F4" : "#101204"),
            ml: 2,
            borderRadius: "5px",
            maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})`
          }}>
          <Box sx={{
            p: 2,
            height: COLUMN_HEADER_HEIGHT,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'

          }}>
            <Typography
              variant='h6'
              sx={{
                fontWeight: 'bold',
                cursor: 'pointer',
                fontSize: '1rem'
              }} >
              Column Title
            </Typography>
            <IconButton
              aria-label="more"
              id={`long-button-${id}`}
              aria-controls={open ? `long-menu-${id}` : undefined}
              aria-expanded={open ? 'true' : undefined}
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreHorizIcon />
            </IconButton>
            <Menu
              id={`long-menu-${id}`}
              MenuListProps={{
                'aria-labelledby': `long-button-${id}`
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}

            >
              <MenuItem>
                <ListItemIcon>
                  <AddCardIcon />
                </ListItemIcon>
                Add a card
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <DeleteOutlineIcon />
                </ListItemIcon>
                Remove this card
              </MenuItem>
              <Divider />
              <MenuItem>
                <ListItemIcon>
                  <ArchiveIcon />
                </ListItemIcon>
                Archive this card
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            maxHeight: (theme) => `calc(
          ${theme.trello.boardContentHeight} 
          - ${theme.spacing(5)} 
          - ${COLUMN_HEADER_HEIGHT} 
          - ${COLUMN_FOOTER_HEIGHT})`,
            overflowY: 'auto',
            overflowX: 'hidden',
            p: '0 5px',
            m: '0 5px',
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#b2bec3",
              borderRadius: '4px'
            },
            "&::-webkit-scrollbar-thumb:hover": {
              backgroundColor: "#b0acb1"
            }
          }}>
            <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.1) !important',
              overflow: 'unset'
            }}>
              <CardMedia
                sx={{ height: 140 }}
                image="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/448723359_855627229936309_950896795513817100_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=oklkExPQGUwQ7kNvgGBKwNA&_nc_ht=scontent.fhan17-1.fna&oh=00_AYAwy2xPl6do9OugmKxDqMl8KxGYlgnidXvO8SPVhiNu7Q&oe=667A4B99"
                title="green iguana"
              />
              <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                <Typography>
                  [Web_Công nợ KH] Tiền căn trái
                </Typography>
              </CardContent>
              <CardActions>
                <Tooltip title="Staff">
                  <Button size="small" startIcon={<GroupIcon />}>2</Button>
                </Tooltip>
                <Tooltip title="Comments">
                  <Button size="small" startIcon={<ChatBubbleOutlineIcon />}>2</Button>
                </Tooltip>
                <Tooltip title="Attachments">
                  <Button size="small" startIcon={<AttachmentIcon />}>2</Button>
                </Tooltip>
              </CardActions>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.1) !important',
              overflow: 'unset'

            }}>
              <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                <Typography>
                  New card
                </Typography>
              </CardContent>
            </Card>
          </Box>
          <Box sx={{
            p: 2,
            height: COLUMN_FOOTER_HEIGHT,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <Button startIcon={<AddIcon />}>
              Add a card
            </Button>
            <Tooltip>
              <DragHandleIcon sx={{ cursor: 'pointer' }} />
            </Tooltip>
          </Box>
        </Box>
        <Box
          sx={{
            height: 'fit-content',
            width: '300px',
            bgcolor: (theme) => (theme.palette.mode === 'light' ? "#F1F2F4" : "#101204"),
            ml: 2,
            borderRadius: "5px",
            maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})`
          }}>
          <Box sx={{
            p: 2,
            height: COLUMN_HEADER_HEIGHT,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'

          }}>
            <Typography
              variant='h6'
              sx={{
                fontWeight: 'bold',
                cursor: 'pointer',
                fontSize: '1rem'
              }} >
              Column Title
            </Typography>
            <IconButton
              aria-label="more"
              id={`long-button-${id}`}
              aria-controls={open ? `long-menu-${id}` : undefined}
              aria-expanded={open ? 'true' : undefined}
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreHorizIcon />
            </IconButton>
            <Menu
              id={`long-menu-${id}`}
              MenuListProps={{
                'aria-labelledby': `long-button-${id}`
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}

            >
              <MenuItem>
                <ListItemIcon>
                  <AddCardIcon />
                </ListItemIcon>
                Add a card
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <DeleteOutlineIcon />
                </ListItemIcon>
                Remove this card
              </MenuItem>
              <Divider />
              <MenuItem>
                <ListItemIcon>
                  <ArchiveIcon />
                </ListItemIcon>
                Archive this card
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            maxHeight: (theme) => `calc(
          ${theme.trello.boardContentHeight} 
          - ${theme.spacing(5)} 
          - ${COLUMN_HEADER_HEIGHT} 
          - ${COLUMN_FOOTER_HEIGHT})`,
            overflowY: 'auto',
            overflowX: 'hidden',
            p: '0 5px',
            m: '0 5px',
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#b2bec3",
              borderRadius: '4px'
            },
            "&::-webkit-scrollbar-thumb:hover": {
              backgroundColor: "#b0acb1"
            }
          }}>
            <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.1) !important',
              overflow: 'unset'
            }}>
              <CardMedia
                sx={{ height: 140 }}
                image="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/448723359_855627229936309_950896795513817100_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=oklkExPQGUwQ7kNvgGBKwNA&_nc_ht=scontent.fhan17-1.fna&oh=00_AYAwy2xPl6do9OugmKxDqMl8KxGYlgnidXvO8SPVhiNu7Q&oe=667A4B99"
                title="green iguana"
              />
              <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                <Typography>
                  [Web_Công nợ KH] Tiền căn trái
                </Typography>
              </CardContent>
              <CardActions>
                <Tooltip title="Staff">
                  <Button size="small" startIcon={<GroupIcon />}>2</Button>
                </Tooltip>
                <Tooltip title="Comments">
                  <Button size="small" startIcon={<ChatBubbleOutlineIcon />}>2</Button>
                </Tooltip>
                <Tooltip title="Attachments">
                  <Button size="small" startIcon={<AttachmentIcon />}>2</Button>
                </Tooltip>
              </CardActions>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.1) !important',
              overflow: 'unset'

            }}>
              <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                <Typography>
                  New card
                </Typography>
              </CardContent>
            </Card>
          </Box>
          <Box sx={{
            p: 2,
            height: COLUMN_FOOTER_HEIGHT,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <Button startIcon={<AddIcon />}>
              Add a card
            </Button>
            <Tooltip>
              <DragHandleIcon sx={{ cursor: 'pointer' }} />
            </Tooltip>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default BoardContent
