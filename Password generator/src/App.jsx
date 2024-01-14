import { useCallback, useEffect, useState ,useRef } from "react"

function App() {
  const [length,setLenght]=useState(8);
  const [Password , setPassword]=useState("");
  const [allowNumber,setAllowNumber]=useState(false);
  const [allowChars,setAllowChars]=useState(false);
  const passwordRef = useRef(null)

  const generatePassword = useCallback(()=>{
    let pass="";
    let num=0; 
    let AlphSource="QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
    let charSource="!@#$%^&*(){}|:<>?~";
    let numberSource="1234567890";
    let source=AlphSource;

    if(allowChars) source=AlphSource+charSource;
    if(allowNumber) source=AlphSource+numberSource;

    for(let i=1;i<=source.length;i++){
      num=Math.floor(Math.random()*source.length+1)
      pass +=source.charAt(num);
    }
    setPassword(pass);
  },[length,allowChars,allowNumber,setPassword])


  useEffect(()=>{
      generatePassword();
    },[length,allowChars,allowNumber,generatePassword])

  return (
    <div className="w-full grid place-items-center h-screen justify-center place-content-center bg-gradient-to-tl from-blue-500 to-pink-500">
        <div className="p-8 border-2 border-white rounded-xl gap-4 grid">
        <h1 className='text-white font-semibold text-3xl text-center my-8'>Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={Password}
            className="outline-none w-[350px] py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        <button
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>       
      </div>
      <div className='flex text-sm gap-x-2 pb-6'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range"
          min={8}
          max={50}
          onChange={(e)=>{setLenght(e.target.value)}}
          className='cursor-pointer'
          />
          <label className="text-white text-bold text-[18px]">Length: {length}</label>
        </div>
      </div>
      <div className="flex m-3 gap-x-2">
      <input
          type="checkbox"
          id="numberInput"
          defaultChecked={allowNumber}
          onChange={()=>{
            setAllowNumber((e)=>!e)
          }}
      />
      <label className="text-white p-2 rounded-md bg-blue-700 hover:scale-95 transition-all cursor-pointer" htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center m-3 gap-x-1">
          <input
              type="checkbox"
              id="characterInput"
              defaultChecked={allowChars}
              onChange={()=>{
                setAllowChars((e)=>!e)
              }}
          />
          <label className="text-white p-2 rounded-md bg-blue-700 hover:scale-95 transition-all cursor-pointer"  htmlFor="characterInput">Characters</label>
      </div>
        </div>
    </div>
    
  )
}
export default App
