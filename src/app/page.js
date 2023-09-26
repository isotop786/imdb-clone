import Image from 'next/image'
import Results from '@/components/Results';
import axios from 'axios';

export const metadata = {
  title:'IMDb Clone',
  description:"IMDb clone website with Next.js and TailwindCSS",
  keyworkd:"Next.js, Tailwind CSS"
}

const API_KEY = process.env.API_KEY



async function getData(){
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      // Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZWMxZjA1NjU3ZTkyZTEyMTk0M2IwYmE0YTJjM2I2ZCIsInN1YiI6IjY1MTFiMjMzZTFmYWVkMDBhZTMxMjFkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5S_0DVqDA_8QK8pwr1bwsHxKeZEVvLi-3Y0HESl_iOM'
      Authorization: 'aec1f05657e92e121943b0ba4a2c3b6d'
    }
  };
  const res = await fetch('https://api.themoviedb.org/3/fetchTrending/movie/week?language=en-US?api_key=aec1f05657e92e121943b0ba4a2c3b6d')
  // const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  return res.json()
}

export default async function Home() {

  // const genre = searchParams.genre || "fetchTrending";
  
  const data = await getData();
  console.log(data)

return(
  <div>
    {data.length > 0 && data.map((item)=>(
      <div key={item.id}>{item.title}</div>
    ))}
  </div>
)
}
