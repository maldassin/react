import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Dictionary() {
  const [word, setWord] = useState("");
  // useEffect(() => {
  //   fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/awesome`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setWord(data[0].meanings);
  //     });
  // }, []);
  return (
    <div className='flex h-screen items-center justify-center font-mono'>
      {/* // ANCHOR main section */}
      <div className='flex h-2/3 w-2/5 flex-col items-center justify-between rounded-2xl bg-gray-800 py-4 text-left transition ease-in hover:shadow hover:shadow-coolGray-400'>
        <div className='flex h-1/3 w-full flex-col justify-between p-2'>
          <div className='flex justify-center text-4xl font-semibold text-green-600'>
            dictionary
          </div>
          <div className='flex max-h-[35px] justify-around'>
            <h1 className='text-xl'>let's get the definition for</h1>
            <div className='flex min-h-[35px] max-w-[230px] justify-center overflow-hidden text-center'>
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
        <div className='my-2 flex h-2/3 w-full flex-col justify-evenly px-4 py-2 text-start text-lg text-green-500'>
          {word
            ? word.map((meaning) => {
                return (
                  <ul key={uuidv4()}>
                    <li className='text-gray-300'>{meaning.partOfSpeech}:</li>
                    <li>{" " + meaning.definitions[0].definition}</li>
                  </ul>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
}
