import { Button, Typography } from '@mui/material';
import './App.css';
import QuizApp from './component/quizapp';
import {Box} from '@mui/material';
import { useEffect, useState } from 'react';


function App() {
const [startQuiz,setStartQuiz] = useState(false)




const playQuiz = () => {
  setStartQuiz(true)
 


}








  


  return (
    <Box>
      {startQuiz?
      
      <Box>
        <Box 
        sx={{display:"flex",justifyContent:"center"}}
        >
        
        </Box>
       <Box> 
        <QuizApp/>
        </Box>
      </Box>
        :
      <Box
      sx={{height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"}}
      ><Button
      onClick = {()=>{playQuiz()}}
      variant = "outlined"
      >Start Quiz</Button></Box>
      },
      
    
    </Box>
  )
}
export default App;
