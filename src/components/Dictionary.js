import { useEffect, useState } from "react";

export default function Dictionary() {
  const [word, setWord] = useState("");
  useEffect(() => {
    console.log(word);
  });
  return (
    <div className='flex h-screen items-center justify-center p-6'>
      <div className='flex h-2/3 w-1/2 max-w-lg flex-col items-center justify-evenly overflow-hidden text-center shadow-2xl shadow-green-500'>
        <div className='flex'>
          <input
            className='rounded-full p-2 text-lg text-black outline-none'
            type='text'
            placeholder='Enter a word...'
            onChange={(input) => {
              setWord(input.target.value);
              console.log(word);
            }}
          />
        </div>
        <div className='flex h-1/4 max-w-lg'>
          <h1 className='max-w-lg flex-wrap overflow-hidden p-2 text-xl'>
            Let's get the definition for &nbsp;
            <span className='max-w-lg text-green-500'>{word}</span>
          </h1>
        </div>
      </div>
    </div>
  );
}
