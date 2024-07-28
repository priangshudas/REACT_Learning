import { useCallback, useEffect, useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
function App() {
  //Cilboard copy popup using react toastiy
  const notify = () => toast("😎 Password Copied to Clipboard!");

  //useState to manage states
  const [password, setPassword] = useState();
  const [length, setLength] = useState(8);
  const [numsinc, setNumsinc] = useState(false);
  const [charinc, setCharinc] = useState(false);

  //function to genarate password with dependency of length,numsinc and charinc
  //also this function useses useCallback and dependencies for chaching and optimizing
  const passwordGen = useCallback(() => {
    let password = "";

    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let nums = "0123456789";
    let char = "~!@#$%^&*_+=-;:<>,.?/";

    if (numsinc) {
      str += nums;
    }
    if (charinc) {
      str += char;
    }

    for (let i = 1; i <= length; i++) {
      password += str.charAt(Math.floor(Math.random() * str.length));
    }
    setPassword(password);
  }, [length, numsinc, charinc, setPassword]);

  //useEffect to call passwordGen function when dependencies change
  useEffect(() => {
    passwordGen();
  }, [passwordGen, length, numsinc, charinc]);

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  //useRef hook
  const passwordRef = useRef(null);

  return (
    <div
      id="main"
      className="w-full h-screen flex flex-col justify-between items-center bg-gradient-to-r from-violet-500 to-fuchsia-500"
    >
      <ToastContainer />
      <div
        id="outer-div"
        className="w-3/5 max-sm:w-5/6  h-3/5 max-sm:h-2/5 bg-white/30 rounded-lg backdrop-blur shadow-2xl flex flex-col justify-center items-center gap-12"
      >
        <h1 id="h1" className="text-2xl font-semibold">
          Password Genarator
        </h1>
        <div id="inner-1" className=" w-11/12 flex items-center justify-center">
          <input
            className="w-4/6 border-none px-5 py-3 font-medium text-lg outline-none rounded-l-xl shadow-lg"
            type="text"
            readOnly={true}
            value={password}
            placeholder="Password"
            ref={passwordRef}
          />
          <button
            onClick={() => {
              copyToClipboard();
              notify();
            }}
            className="px-5 py-3 bg-gradient-to-r from-sky-500 to-indigo-500 font-medium text-lg rounded-r-xl shadow-lg hover:text-blue-50"
          >
            Copy
          </button>
        </div>
        <div
          id="inner-2"
          className=" w-11/12 flex items-center justify-center gap-5 max-sm:flex-col"
        >
          <div id="range">
            <input
              type="range"
              id="length"
              className="font-medium text-lg mr-1 cursor-move"
              min="8"
              max="30"
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor="length" className="font-medium text-lg">
              Length {length}
            </label>
          </div>
          <div id="numbers">
            <input
              type="checkbox"
              name="numbers"
              id="numbers"
              className="font-medium text-lg mr-1"
              onChange={() => {
                setNumsinc((prev) => !prev);
              }}
            />
            <label htmlFor="numbers" className="font-medium text-lg">
              Numbers Included
            </label>
          </div>
          <div id="characters">
            <input
              type="checkbox"
              name="characters"
              id="characters"
              className="font-medium text-lg mr-1"
              onChange={() => {
                setCharinc((prev) => !prev);
              }}
            />
            <label htmlFor="characters" className="font-medium text-lg">
              Characters Included
            </label>
          </div>
        </div>
      </div>
      <h1 className="mb-5">Made by Prianghsu with ❤️</h1>
    </div>
  );
}

export default App;
