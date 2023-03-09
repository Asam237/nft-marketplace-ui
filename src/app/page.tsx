import Image from 'next/image'
import { Inter } from 'next/font/google'
import { AppLayout } from './layouts/app'
import { Button } from './components/button'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <AppLayout>
      <main className='flex flex-col lg:flex-row h-[90%] pt-16 px-4'>
        <div className='w-full lg:w-3/4 h-full'>
          <h1 className='text-4xl lg:text-8xl text-white'>Collect Your Rare Digital NFT Art</h1>
          <div className='flex flex-col lg:flex-row py-8'>
            <div>
              <p className='text-gray-200 py-4 lg:py-10 text-base lg:w-2/3 leading-7'>A credible and excellent marketplace for non-fungiable token.</p>
              <Button>
                Explore Now
              </Button>
              <div className='border-gray-300 border-t border-l border-r w-full lg:w-10/12 mt-10 h-[35vh] rounded-t-[200px]'>
                asam
              </div>
            </div>
            <div className='bg-red-500'>
              B
            </div>
          </div>
        </div>
        <div className='w-full lg:w-1/4 bg-green-400 h-full'>
          blog B
        </div>
      </main>
    </AppLayout>
  )
}
