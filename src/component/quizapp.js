
import { useEffect, useState } from 'react';
import { Grid,Box,Typography, Button, Chip } from '@mui/material';


function QuizApp (prop) {

let {results} = prop



    const [questions, setQuestions] = useState([
        {
          question: "Html Stands For _______________________",
          options: [
            "Hyper Text Makeup Language",
            "html",
            "Case Cading Style Sheet",
            "Hypertext markup language",
          ],
          correctAns: "Hypertext markup language",
        },
        {
          question: "Css Stands For _______________________",
          options: [
            "Casecading Style Sheet",
            "Java",
            "Ram",
            "Hypertext markup language",
          ],
          correctAns: "Casecading Style Sheet",
        },
        {
          question: "Js Stands For _______________________",
          options: ["Java Style", "Java Script", "Script", "Script Src"],
          correctAns: "Java Script",
        },
        {
          question: "Dom Stands For _______________________",
          options: ["Document Object Model", "html", "Css", "Java"],
          correctAns: "Document Object Model",
        },
        {
          question: "Ram Stands For _______________________",
          options: ["Read Only Memory", "Dom", "Random Acccess Memory", "For Pc"],
          correctAns: "Random Acccess Memory",
        },
        {
          question: "Rom Stands For _______________________",
          options: [
            "Hyper Text Markup Language",
            "html",
            "HTml",
            "Read Only Memory",
          ],
          correctAns: "Read Only Memory",
        },
      ]);
    
    const [indexNumber,setIndexNumber] = useState(0)
    const [score,setScore] = useState(0)
    const [showResult,setShowResult] = useState(false)
    const [seconds,setSeconds] = useState(30)
    
    
    let option = questions[indexNumber].options.map((e)=>{
            return e
    })
    
    const changeQuestion = (cv,ca) =>{
      
      if(cv === ca) {
        setScore(score+1)
      }
    
      if(indexNumber + 1 === questions.length){
        
        setShowResult(true)
      }
    
      else{
      
      setIndexNumber(indexNumber+1)
    
    }
        
    }
    
  
useEffect(()=>{
 let timeOut = setTimeout(() => {
    setSeconds(seconds-1)
  }, 500);

  if(!seconds){
    clearTimeout(timeOut)
    setShowResult(true)

  }
  else if(showResult){
    clearTimeout(timeOut)
  }

})



    
    const playAgain  = () => {
      setIndexNumber(0)
      setScore(0)
      setShowResult(false)
      setSeconds(30)
      
    }

    let percentage = (score/questions.length)*100
    percentage = percentage.toFixed(2)
    
      return (
        <div className="App">
    
    {showResult&&indexNumber+1==questions.length?<Box
          sx={{marginTop:"20px"}}>
                <Typography variant = "h6"
                sx={{marginTop:"10px"}}
                >
                  Your Score is {score} 
                  
                  </Typography>
                  <Typography variant = "h6"
                sx={{marginTop:"10px"}}
                >
                  You have completed all {indexNumber+1} question 
                  
                  </Typography>
                  <Typography variant = "h6"
                sx={{marginTop:"10px"}}
                >
                  You have completed all questions in {30-seconds} seconds
                  
                  </Typography>
                  
                  <Typography variant = "h6"
                sx={{marginTop:"10px"}}
                >
                  Your percentage is <Chip
                  label ={percentage + '%'} 
                  variant = "outlined"
                  sx={{background:"lightBlue"}}
                  > </Chip>
                  
                  </Typography>
          </Box>  
          :
          showResult ?

                   <Box>
                  <Typography
                  sx={{marginTop:"10px"}}
                  variant = "h6">
                  Your Time is Finished 
                  </Typography>
                  <Typography sx={{marginTop:"10px"}} variant="h6">
                  You have completed {indexNumber} questions
                  </Typography>
                  <Typography variant = "h6"
                sx={{marginTop:"10px"}}
                >
                  Your percentage is <Chip
                  label ={percentage + '%'} 
                  variant = "outlined"
                  sx={{background:"lightBlue"}}
                  > </Chip>
                  
                  </Typography>

                <Button 
                variant='outlined'
                sx={{marginTop:"50px"}}
                onClick = {()=>playAgain()}
                >
                      Play Again
                </Button>
                </Box>
      
                :
    
              <Box>
                  <Grid container>
                  <Grid item md={12} sm={12} xs={12}>
                <Box>
                  {seconds}
                </Box>
                <Box>
                  
                  <Typography
                  sx={{
                      textAlign:"left"        
                }}
                  
                  variant = "h6">
                      {indexNumber+1} / {questions.length}
                  </Typography>
                  
                </Box>
                </Grid>
                </Grid>
    
    
                  <Typography 
                   variant = "h6"
                   >
                        {questions[indexNumber].question}
                  </Typography>
                  <Grid container>
                  
                      {option.map((e,i)=>{
                        return <Grid key={i} item md={6} sm={6} xs = {12}>
                               <Box 
                               sx= {{marginTop:"40px"}}
                               >
                               <Chip key={i} variant = "standard"
                               label = {e}
                               
                               onClick = {()=>{
                                  changeQuestion(e,questions[indexNumber].correctAns)
                               }}
                               
                               >
                                 
                               </Chip>
                               </Box>
                        </Grid>
                        
                      })}
    
    </Grid>
              </Box>
    
    }
            
    
        </div>
      );
}



export default QuizApp