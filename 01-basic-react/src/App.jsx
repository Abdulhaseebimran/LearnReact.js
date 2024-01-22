import Chai  from "./chai"

function App() {
  const username = "Abdul Haseeb";
  const learnReact = "Chai aur code by Hitesh Choudhary"
  return (
    <>  
    <h1>Chai aur React with vite | {username}</h1>
    <p>{learnReact}</p>
    <Chai/> 
    </>
  )
}

export default App

  //{username} => we call this vaiable is evaluated expression
