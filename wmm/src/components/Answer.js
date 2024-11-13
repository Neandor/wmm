import React from 'react';
import { Button } from '@mui/material';

const Answer = ({ label, answer, onSelect, isSelected, isCorrect, correctAnswer, selectedAnswer, isBlinking }) => {
  const getBackgroundColor = () => {
    if (isSelected) {
      return isCorrect ? 'green' : 'red';
    }
    if (selectedAnswer !== null && answer === correctAnswer) {
      return 'green';
    }
    return '#000066'; // dark blue color
  };

  const getAnimation = () => {
    if (isBlinking && (isSelected || answer === correctAnswer)) {
      return 'blink 1s infinite';
    }
    return 'none';
  };

  return (
    <Button
      variant="contained"
      fullWidth
      onClick={() => !isBlinking && onSelect(answer)}
      sx={{
        backgroundColor: getBackgroundColor(),
        color: 'white',
        borderRadius: '20px', // rounded corners
        margin: '10px 0',
        animation: getAnimation(),
        fontSize: '1rem',
        height: '60px', // Fixed height for all buttons
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '@keyframes blink': {
          '0%': { opacity: 1 },
          '25%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        '&:hover': {
          backgroundColor: !isBlinking ? '#6699ff' : getBackgroundColor(), // slightly darker blue on hover if not blinking
        },
        pointerEvents: isBlinking ? 'none' : 'auto', // disable clicking during blinking
      }}
    >
      {label}) {answer}
    </Button>
  );
};

export default Answer;