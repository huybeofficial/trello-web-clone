import { Box, Button } from '@mui/material'
import React from 'react'

function BoardContent() {
  return (
    <Box sx={{
      backgroundColor: 'primary.main',
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
