import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hooks
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let char = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let num = "0123456789";

    if (numberAllowed) {
      str += num;
    }
    if (charAllowed) {
      str += char;
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 50);
    passwordRef.current?.focus();
    window.navigator.clipboard.writeText(passwordRef.current.value);
  }, [passwordRef])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, setPassword])


  return (
    <>
      <div
        className="w-full max-w-md mx-auto shadow-md rounded-lg
     px-4 my-8 text-orange-400 bg-gray-700"
      >
        <h1 className="text-4xl text-center text-white font-bold my-3 py-4">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 py-6">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-4 px-3 rounded-md"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button className="'outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 rounded-md cursor-pointer hover:bg-red-800
          transition duration-300 ease-in-out"
          onClick={copyPasswordToClipboard}>
            Copy
          </button>
        </div>
        <div className="flex flex-wrap justify-center text-sm gap-x-2 py-6">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label htmlFor="" className="font-bold">
              Length: {length}
            </label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput" className="font-bold">Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charInput" className="font-bold">Character</label>
          </div>
        </div>
      </div>
      <div className="px-4 py-6 my-6 text-red-500 font-bold text-center ">Made with Abdul Haseeb Imran</div>
    </>
  );
}

export default App;
