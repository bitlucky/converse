import React, { useState } from "react";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import Message from './Message'
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState(["hello", "hye", "bob", "alice"]);

  console.log(input);
  console.log(messages);
  const sendMessage = (event) => {
    //all the logic to send a message goes here
    event.preventDefault();
    setMessages([...messages, input]);
    setInput("");
  };

  return (
    <div className="App-header">
      <form>
        <FormControl>
          <InputLabel htmlFor="my-input">Enter Your message </InputLabel>
          <Input
          
            value={input}
            onChange={(event) => setInput(event.target.value)}
            />
            <Button disabled = {!input} onClick={sendMessage} variant="contained" color = "primary" type="submit">Send Message</Button>
        </FormControl>

      
     
      </form>

     { 
      messages.map( message => (
        <Message text= {message}/> 
      ))
     }
    </div>
  );
}
export default App;
