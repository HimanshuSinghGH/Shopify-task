import React, {useState} from 'react' ;
import {Container, Button} from 'reactstrap' ;

import Card from '../components/Card' ;

function Homepage() {
  const [prompt, setPrompt] = useState("") ;
  const [outputList, setOutputList] = useState([]) ;

  async function getResult(promptInput) {
      const data = {
     prompt: promptInput,
     temperature: 0.5,
     max_tokens: 64,
     top_p: 1.0,
     frequency_penalty: 0.0,
     presence_penalty: 0.0,
    };

    const resp = await fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
       Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
     },
     body: JSON.stringify(data),
   }).then((response) => response.json())
  .then((actualData) => {return(actualData.choices[0].text)})
  .catch((err) => {
   console.log(err.message);
  }); ;

   return resp ;
  }

  async function onClickHandler() {
    // console.log(prompt) ;
    const resData = await getResult(prompt) ;
    // console.log("API KEY");
    // console.log(process.env.REACT_APP_OPENAI_API_KEY) ;
    // const resData="This is a dummy response data" ;
    var outputObj = {
      prompt:prompt,
      response:resData,
    }
    // console.log("Inside clickHandler") ;
    // console.log(outputObj) ;
    setOutputList([outputObj, ...outputList]) ;
    setPrompt("") ;
    // console.log(outputList) ;
  }

  return (
    <Container style={{marginTop:50}}>
      <h1>Fun with AI</h1>
      <h5 style={{marginTop:30}}>Enter Prompt</h5>
      <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" value={prompt} onChange={event => setPrompt(event.target.value)}></textarea>
      <Button onClick={onClickHandler}color="primary" style={{marginTop:10, float:'right'}}>Submit</Button>

      <div style={{marginTop:100}}>
      {
          outputList.map((item) => {
            return <Card result={item}/>
          })
        }
      </div>
    </Container>
  )} ;

export default Homepage ;
