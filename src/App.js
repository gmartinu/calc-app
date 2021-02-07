import React, { useState, useEffect } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  makeStyles, 
  IconButton, 
  withStyles,
  Paper,
  Box,
  Grid,
  TextField,
  Button
} from '@material-ui/core';
import { GitHub } from '@material-ui/icons';

// 29444B
// 63A3A2
// BFD6E1
// FBFCFC

const useStyles = makeStyles(theme => ({
  toolbar: {
    backgroundColor: "#63A3A2"
  }, 
  title:{
    marginLeft: theme.spacing(1)
  },
  content:{
    height: `calc(100% - 64px)`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  plus:{
    height: "100%"
  },
  plusContainer:{
    height: 44 * 3 //Triplo do tamanho (44) da grid comum com o botão
  }
}))

const MainPaper = withStyles({
  root:{
    backgroundColor: "#BFD6E1"
  }
})(Paper);

const LabelPaper = withStyles({
  root:{
    backgroundColor: "#29444B",
    paddingTop: 15
  }
})(Paper);

const Btn = withStyles({
  root:{
    width: '100%'
  }
})(Button);

const App = () => {
  const classes = useStyles();
  const [hist, setHist] = useState("")
  const [label, setLabel] = useState("")
  const [value, setValue] = useState(0);

  useEffect(() => {
    window.addEventListener('keydown', (event) => {
      let key = String(event.key)
      if(
        key === "1" || key === "2" || key === "3" || 
        key === "3" || key === "4" || key === "5" || 
        key === "6" || key === "7" || key === "8" || 
        key === "9" || key === "0" || key === "-" || 
        key === "=" || key === "/" || key === "*" ||
        key === "+" || key === "Enter"
      ){
        handleClick(key)
      }else return;
    });
  }, [])

  const handleClick = (text) => {
    switch (text) {
      case "1":
      case "2": 
      case "3": 
      case "4": 
      case "5": 
      case "6": 
      case "7": 
      case "8": 
      case "9": 
      case "0":
        setLabel(_v => (`${_v}${text}`))
        break;
      default:
        break;
    }
  }

  const handleClear = () => {
    setLabel(_v => (''));
    setHist(_v => (''));
    setValue(_v => (0));
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <IconButton 
            onClick={() => window.open("https://github.com/gmartinu")} 
            edge="start" 
            className={classes.menuButton} 
            color="inherit" 
            aria-label="menu"
          >
            <GitHub />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Calculadora Exemplo
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.content}>
        <Grid container className={classes.content}>
          <Grid item xs={3}>
            <MainPaper>
              <Box p={1}>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <LabelPaper>
                      <TextField disabled value={label} fullWidth id="standard-basic" />
                    </LabelPaper>
                  </Grid>
                  <Grid item xs={3}>
                    <Btn 
                      variant="contained"
                      onClick={() => handleClear()}
                    >
                      <b>C</b>
                    </Btn>
                  </Grid>
                  <Grid item xs={3}>
                    <Btn 
                      variant="contained" 
                      onClick={() => handleClick('/')}
                    >
                      <b>/</b>
                    </Btn>
                  </Grid>
                  <Grid item xs={3}>
                    <Btn 
                      variant="contained" 
                      onClick={() => handleClick('*')}
                    >
                      <b>x</b>
                    </Btn>
                  </Grid>
                  <Grid item xs={3}>
                    <Btn 
                      variant="contained" 
                      onClick={() => handleClick('-')}
                    >
                      <b>-</b>
                    </Btn>
                  </Grid>
                  <Grid item xs={9}>
                    <Grid container spacing={1}>
                      <Grid item xs={4}>
                        <Btn 
                          variant="contained" 
                          onClick={() => handleClick('1')}
                        >
                          <b>1</b>
                        </Btn>
                      </Grid>
                      <Grid item xs={4}>
                        <Btn 
                          variant="contained" 
                          onClick={() => handleClick('2')}
                        >
                          <b>2</b>
                        </Btn>
                      </Grid>
                      <Grid item xs={4}>
                        <Btn 
                          variant="contained" 
                          onClick={() => handleClick('3')}
                        >
                          <b>3</b>
                        </Btn>
                      </Grid>
                      <Grid item xs={4}>
                        <Btn 
                          variant="contained" 
                          onClick={() => handleClick('4')}
                        >
                          <b>4</b>
                        </Btn>
                      </Grid>
                      <Grid item xs={4}>
                        <Btn 
                          variant="contained" 
                          onClick={() => handleClick('5')}
                        >
                          <b>5</b>
                        </Btn>
                      </Grid>
                      <Grid item xs={4}>
                        <Btn 
                          variant="contained" 
                          onClick={() => handleClick('>')}
                        >
                          <b>6</b>
                        </Btn>
                      </Grid>
                      <Grid item xs={4}>
                        <Btn 
                          variant="contained" 
                          onClick={() => handleClick('7')}
                        >
                          <b>7</b>
                        </Btn>
                      </Grid>
                      <Grid item xs={4}>
                        <Btn 
                          variant="contained" 
                          onClick={() => handleClick('8')}
                        >
                          <b>8</b>
                        </Btn>
                      </Grid>
                      <Grid item xs={4}>
                        <Btn 
                          variant="contained" 
                          onClick={() => handleClick('9')}
                        >
                          <b>9</b>
                        </Btn>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={3} className={classes.plusContainer}>
                    <Btn 
                      variant="contained" 
                      onClick={() => handleClick('+')} className={classes.plus}
                    >
                      <b>+</b>
                    </Btn>
                  </Grid>
                  <Grid item xs={9}>
                    <Btn 
                      variant="contained" 
                      onClick={() => handleClick('0')}
                    >
                      <b>0</b>
                    </Btn>
                  </Grid>
                  <Grid item xs={3}>
                    <Btn 
                      variant="contained" 
                      onClick={() => handleClick('=')}
                    >
                      <b>=</b>
                    </Btn>
                  </Grid>
                </Grid>
              </Box>
            </MainPaper>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default App;