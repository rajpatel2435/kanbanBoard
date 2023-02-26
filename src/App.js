
import './App.css';
import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Notes from './pages/Notes';
import Create from './pages/Create';
import { createTheme, ThemeProvider } from '@mui/material'
import { red } from '@mui/material/colors';
import Layout from './components/Layout';
import Sam from './pages/Sam'

function App() {

  const theme = createTheme({
    palette: {
      secondary: red
    }
  })
  return (
    <ThemeProvider theme={theme}>
      <Router >
        <Layout>
          <Routes>
            <Route path="/" element={<Notes />}>
            </Route>
            <Route path="/sam" element={<Sam />}>
            </Route>
            <Route path="/create" element={<Create />}>
            </Route>
          </Routes>
        </Layout>
      </Router >
    </ThemeProvider>
  );
}

export default App;



