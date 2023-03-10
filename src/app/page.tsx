import Image from 'next/image'
import { Atma } from 'next/font/google'
import { AppLayout } from './layouts/app'
import { Button } from './components/button'
import Img1 from "../../public/img1.png";
import Img2 from "../../public/img2.png";
import Img3 from "../../public/img3.png";

const atma = Atma({ subsets: ['latin'], weight: "400" })

export default function Home() {
  return (
    <AppLayout>
      <main className='flex flex-col lg:flex-row h-[90%] pt-16 px-4'>
        <div className='w-full lg:w-3/4 h-full'>
          <h1 className={`${atma.className} text-4xl lg:text-8xl text-white lg:w-9/12`}>Collect Your Rare Digital NFT Art</h1>
          <div className='flex flex-col lg:flex-row py-8'>
            <div>
              <p className='text-gray-200 py-4 lg:py-10 text-base lg:w-2/3 leading-7'>A credible and excellent marketplace for non-fungiable token.</p>
              <Button>
                Explore Now
              </Button>
              <div className='border-gray-500 border-t border-l border-r w-full lg:w-8/12 mt-10 h-[35vh] rounded-t-[200px] flex justify-center items-end'>
                <Image src={Img1} alt="image" className='h-3/4 w-auto mt-20' />
              </div>
            </div>
            <div className='bg-[#e0eca8] w-full lg:w-80 rounded-full hidden lg:flex items-center justify-center h-[500px]'>
              <Image src={Img2} alt="image" className='h-3/4 w-auto' />
            </div>
          </div>
        </div>
        <div className='w-full lg:w-1/4 h-full'>
          <div className='flex flex-col'>
            <div className='text-white'>
              <div className='border-gray-500 border w-full lg:w-80 rounded-full hidden lg:flex items-center justify-center h-[400px]'>
                <Image src={Img3} alt="image" className='h-3/4 w-auto' />
              </div>
            </div>
            <div className='text-white'>
              <div className='border-gray-500 border-t border-l border-r w-full mt-10 h-[35vh] rounded-t-[200px] flex justify-center items-center'>
                <div className='flex flex-col justify-end h-full items-center p-2 w-full'>
                  <div className='flex flex-row'>
                    <div className='border-[#e0eca8] border-b border-r p-8'>
                      <h1 className={`${atma.className} text-3xl`}>10.5K</h1>
                      <p>Art work</p>
                    </div>
                    <div className='border-[#e0eca8] border-b border-l p-8'>
                      <h1 className={`${atma.className} text-3xl`}>10.5K</h1>
                      <p>Art work</p>
                    </div>
                  </div>
                  <div>
                    <div className='flex flex-row'>
                      <div className='border-[#e0eca8] border-t border-r p-8'>
                        <h1 className={`${atma.className} text-3xl`}>10.5K</h1>
                        <p>Art work</p>
                      </div>
                      <div className='border-[#e0eca8] border-t border-l p-8'>
                        <h1 className={`${atma.className} text-3xl`}>10.5K</h1>
                        <p>Art work</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </AppLayout>
  )
}
