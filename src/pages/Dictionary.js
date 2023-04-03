import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Dictionary() {
  const [word, setWord] = useState("");
  useEffect(() => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/awesome`)
      .then((response) => response.json())
      .then((data) => {
        setWord(data[0].meanings);
      });
  }, []);
  return (
    <div className='flex h-screen items-center justify-center'>
      {/* // ANCHOR main section */}
      <div className='flex h-2/3 w-1/2 max-w-xl flex-col items-center justify-between rounded-2xl bg-gray-800 p-4 text-left transition ease-in hover:shadow hover:shadow-coolGray-400'>
        <div className='flex h-1/3 w-full flex-col justify-between p-2'>
          <div className='flex justify-center bg-gradient-to-r from-black via-green-100 to-white bg-clip-text text-4xl font-bold text-transparent'>
            Dictionary
          </div>
          <div className='flex max-h-[35px] justify-around'>
            <h1 className='text-xl'>Let's get the definition for</h1>
            <div className='flex min-h-[35px] w-[230px] justify-center overflow-hidden text-center'>
              <input
                className='mb-1 w-full border-b-2 border-gray-500 bg-gray-800 text-lg text-green-500 outline-none'
                type='text'
                placeholder='Enter a word...'
                onChange={(input) => {
                  // setWord(input.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <div className='my-2 flex h-2/3 w-full flex-col justify-evenly rounded-lg border-2 border-green-500 px-6 py-2 text-start text-lg text-green-500'>
          {word
            ? word.map((meaning) => {
                return (
                  <ul key={uuidv4()}>
                    <li>
                      {meaning.partOfSpeech}:
                      {" " + meaning.definitions[0].definition}
                    </li>
                  </ul>
                );
              })
            : null
            }
        </div>
      </div>
    </div>
  );
}
