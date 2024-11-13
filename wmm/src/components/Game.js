import React, { useState } from 'react';
import Question from './Question';
import Answer from './Answer';
import { Container, Grid, Box, Typography, Stepper, Step, StepLabel } from '@mui/material';


const questions = [
  {
    question: "Was bedeutet die Abkürzung DSGVO?",
    answers: ["Deutsche Sicherheits- und Geheimhaltungsverordnung", "Datenschutz-Grundverordnung", "Datenschutz-Gesetz für Unternehmen", "Digitale Sicherheitsverordnung"],
    correct: "Datenschutz-Grundverordnung"
  },
  {
    question: "In welchem Jahr trat die DSGVO in Kraft?",
    answers: ["2000", "2008", "2016", "2018"],
    correct: "2018"
  },
  {
    question: "Wer muss sich in der EU an die DSGVO halten?",
    answers: ["Nur große Unternehmen", "Nur Behörden", "Alle Unternehmen und Organisationen, die Daten verarbeiten", "Nur Unternehmen mit Sitz in Deutschland"],
    correct: "Alle Unternehmen und Organisationen, die Daten verarbeiten"
  },
  {
    question: "Welches Grundprinzip besagt, dass nur die nötigsten Daten erhoben werden dürfen?",
    answers: ["Datensparsamkeit", "Datensicherheit", "Datenportabilität", "Datenminimierung"],
    correct: "Datenminimierung"
  },
  {
    question: "Welches Recht erlaubt es Betroffenen, eine Kopie ihrer gespeicherten Daten zu erhalten?",
    answers: ["Recht auf Vergessenwerden", "Recht auf Transparenz", "Recht auf Datenübertragbarkeit", "Recht auf Richtigkeit"],
    correct: "Recht auf Datenübertragbarkeit"
  },
  {
    question: "Welches Recht erlaubt es einer Person, die Löschung ihrer Daten zu verlangen?",
    answers: ["Recht auf Sperrung", "Recht auf Vergessenwerden", "Recht auf Widerspruch", "Recht auf Korrektur"],
    correct: "Recht auf Vergessenwerden"
  },
  {
    question: "Wer ist für die Überwachung und Durchsetzung der DSGVO in Deutschland zuständig?",
    answers: ["Der Bundesnachrichtendienst", "Die Deutsche Datenschutzbehörde", "Der Bundesdatenschutzbeauftragte", "Das Europäische Gericht"],
    correct: "Der Bundesdatenschutzbeauftragte"
  },
  {
    question: "Wie lange hat ein Unternehmen Zeit, eine Datenschutzverletzung zu melden?",
    answers: ["72 Stunden", "48 Stunden", "7 Tage", "24 Stunden"],
    correct: "72 Stunden"
  },
  {
    question: "Welcher der folgenden Punkte zählt NICHT zu den Grundsätzen der DSGVO?",
    answers: ["Integrität und Vertraulichkeit", "Speicherbegrenzung", "Profitmaximierung", "Zweckbindung"],
    correct: "Profitmaximierung"
  },
  {
    question: "Was ist ein Verarbeitungsverzeichnis gemäß der DSGVO?",
    answers: ["Ein Plan zur Cyber-Sicherheit", "Ein Verzeichnis der Mitarbeiterdaten", "Ein Dokument, das alle Datenverarbeitungsprozesse beschreibt", "Ein Register aller Kunden"],
    correct: "Ein Dokument, das alle Datenverarbeitungsprozesse beschreibt"
  },
  {
    question: "Wer haftet im Falle eines DSGVO-Verstoßes?",
    answers: ["Nur der Datenschutzbeauftragte", "Das gesamte Unternehmen", "Die IT-Abteilung", "Der Kunde"],
    correct: "Das gesamte Unternehmen"
  },
  {
    question: "Welche der folgenden Strafen kann bei einem DSGVO-Verstoß verhängt werden?",
    answers: ["Bis zu 1 Million Euro", "Bis zu 4 % des Jahresumsatzes", "Bis zu 100.000 Euro", "Ein Bußgeld von 5 % des Umsatzes"],
    correct: "Bis zu 4 % des Jahresumsatzes"
  },
  {
    question: "Was bedeutet das Recht auf Widerspruch gemäß DSGVO?",
    answers: ["Daten müssen unverzüglich gelöscht werden", "Personen können der Verarbeitung ihrer Daten widersprechen", "Daten müssen nach einem Jahr gelöscht werden", "Personen können die Verarbeitung ihrer Daten jederzeit einsehen"],
    correct: "Personen können der Verarbeitung ihrer Daten widersprechen"
  },
  {
    question: "Welches Dokument ist notwendig, wenn ein Unternehmen persönliche Daten von Dritten verarbeitet?",
    answers: ["Datenschutzerklärung", "Vertrag zur Auftragsverarbeitung", "Vertraulichkeitsvereinbarung", "Haftungsausschluss"],
    correct: "Vertrag zur Auftragsverarbeitung"
  },
  {
    question: "In welchem Fall gilt die DSGVO auch außerhalb der EU?",
    answers: ["Wenn Daten von EU-Bürgern außerhalb der EU verarbeitet werden", "Nur, wenn die Firma eine EU-Niederlassung hat", "Nur, wenn die Firma in der Schweiz ist", "DSGVO gilt nur innerhalb der EU"],
    correct: "Wenn Daten von EU-Bürgern außerhalb der EU verarbeitet werden"
  },
];





const prizeAmounts = [
    "100 €",
    "200 €",
    "300 €",
    "500 €",
    "1.000 € (erste Sicherheitsstufe)",
    "2.000 €",
    "4.000 €",
    "8.000 €",
    "16.000 €",
    "32.000 € (zweite Sicherheitsstufe)",
    "64.000 €",
    "125.000 €",
    "500.000 €",
    "750.000 €",
    "1.000.000 €"
  ];
  
  const Game = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);
    const [isBlinking, setIsBlinking] = useState(false);
    const [gameOver, setGameOver] = useState(false);
  
    const handleAnswerSelect = (answer) => {
      const correctAnswer = questions[currentQuestionIndex].correct;
      setSelectedAnswer(answer);
      setIsCorrect(answer === correctAnswer);
      setIsBlinking(true);
  
      if (answer === correctAnswer) {
        setTimeout(() => {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
          setSelectedAnswer(null);
          setIsCorrect(null);
          setIsBlinking(false);
        }, 3000); // Wait for 3 seconds before moving to the next question
      } else {
        setTimeout(() => {
          setGameOver(true);
          setIsBlinking(false);
        }, 3000); // Wait for 3 seconds before ending the game
      }
    };
  
    const handleStepClick = (index) => {
      setCurrentQuestionIndex(index);
      setSelectedAnswer(null);
      setIsCorrect(null);
      setIsBlinking(false);
    };
  
    if (gameOver || currentQuestionIndex >= questions.length) {
      return (
        <Container>
          <Typography variant="h4" component="h1" gutterBottom>
            Game Over! You won: {prizeAmounts[currentQuestionIndex - 1]}
          </Typography>
        </Container>
      );
    }
  
    const labels = ['A', 'B', 'C', 'D'];
  
    return (
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Stepper
              orientation="vertical"
              activeStep={currentQuestionIndex}
              sx={{
                position: 'relative',
                left: '-350px', // Adjust this value as needed to move the stepper further left
                top: '10px',
                borderRadius: '8px', // Optional: Add rounded corners
              }}
            >
              {prizeAmounts.map((amount, index) => (
                <Step key={amount} sx={{ margin: '0px', padding: '0px' }} onClick={() => handleStepClick(index)}>
                  <StepLabel sx={{ margin: '0px', padding: '4px', cursor: 'pointer' }}>{amount}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box sx={{ position: 'relative', left: '-200px' }}>
              <Box my={4} display="flex" justifyContent="center">
                <Question question={questions[currentQuestionIndex].question} />
              </Box>
              <Grid container spacing={2} justifyContent="center">
                {questions[currentQuestionIndex].answers.map((answer, index) => (
                  <Grid item xs={12} sm={6} key={answer}>
                    <Answer
                      label={labels[index]}
                      answer={answer}
                      onSelect={handleAnswerSelect}
                      isSelected={selectedAnswer === answer}
                      isCorrect={isCorrect}
                      correctAnswer={questions[currentQuestionIndex].correct}
                      selectedAnswer={selectedAnswer}
                      isBlinking={isBlinking} // Pass isBlinking as a prop
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    );
  };
  
  export default Game;