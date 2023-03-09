import Image from 'next/image'
import { Inter } from 'next/font/google'
import { AppLayout } from './layouts/app'
import { Button } from './components/button'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <AppLayout>
      <main>
        main
      </main>
    </AppLayout>
  )
}
