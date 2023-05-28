
import { Inter } from 'next/font/google';
import { useTheme } from 'next-themes';
import React from 'react';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const {theme, setTheme} = useTheme();

  return (
    <main>
      <span>

        <span onClick={()=>setTheme("light")} >Light</span>| {" "}
        <span onClick={()=>setTheme("dark")} >Dark</span>| ({theme})
      </span>
      <h2 className="text-3xl">Next Durk Theme Light Theme Option</h2>
    </main>
  )
}
