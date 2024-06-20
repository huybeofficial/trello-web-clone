import { Box, Button } from '@mui/material'
import React from 'react'

function BoardContent() {
  return (
    <Box sx={{
      bgcolor: (theme) => (theme.palette.mode === 'light' ? "#9b59b6" : "#34495e"),
      width: '100%',
      height: (theme) => `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight})`,
      display: 'flex',
      alignItems: 'center'
    }}>
      Board Content
      <Button variant="contained" color="secondary">Contained</Button>
    </Box>
  )
}

export default BoardContent
