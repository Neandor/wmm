import React from 'react';
import Game from './components/Game';
import { AppBar, Toolbar, Typography } from '@mui/material';

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Wer wird Datenschutzkoordinator:in?
          </Typography>
        </Toolbar>
      </AppBar>
      <Game />
    </div>
  );
}

export default App;