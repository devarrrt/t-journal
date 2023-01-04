import React from 'react';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';

import Header from './components/Header';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Follows from './pages/Follows';
import Rating from './pages/Rating';
import Messages from './pages/Messages';
import FullPostPage from './pages/FullPostPage';
import CreatePost from './pages/CreatePost'

import { theme } from './theme';

const App = () => {
  return (
    <Router>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/settings" element={<Settings />} />
          <Route path="/follows" element={<Follows />} />
          <Route path="/rating" element={<Rating />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/news/:id" element={<FullPostPage />} />
          <Route path="/write" element={<CreatePost />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </MuiThemeProvider>
    </Router>
  );
};

export default App;
