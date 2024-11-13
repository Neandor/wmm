import React from 'react';
import { Typography } from '@mui/material';

const Question = ({ question }) => {
  return (
    <Typography variant="h4" component="h2" align="center" gutterBottom>
      {question}
    </Typography>
  );
};

export default Question;