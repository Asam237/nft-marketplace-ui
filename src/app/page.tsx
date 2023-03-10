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
          <h1 className={`${atma.className} text-4xl lg:text-8xl text-white lg:w-9/12 text-center lg:text-left`}>Collect Your Rare Digital NFT Art</h1>
          <div className='flex flex-col lg:flex-row py-8'>
            <div>
              <p className='text-gray-200 py-4 lg:py-10 text-base lg:w-2/3 leading-7 text-center lg:text-left'>A credible and excellent marketplace for non-fungiable token.</p>
              <div className='flex justify-center lg:justify-start'>
                <Button>
                  Explore Now
                </Button>
              </div>
              <div className='w-full lg:w-8/12 mt-10 h-[35vh] flex justify-center lg:justify-start items-end'>
                <Image src={Img1} alt="image" className='h-3/4 w-auto border-gray-500 border-t border-l border-r px-10 pt-12 rounded-t-[200px]' />
              </div>
            </div>
            <div className='bg-[#e0eca8] w-full lg:w-64 xl:w-80 rounded-full hidden lg:flex items-center justify-center h-[500px]'>
              <Image src={Img2} alt="image" className='h-3/4 w-auto' />
            </div>
          </div>
        </div>
        <div className='w-full lg:w-1/4 h-full pb-8 lg:pb-0'>
          <div className='flex flex-col'>
            <div className='text-white'>
              <div className='border-gray-500 border w-full lg:w-64 xl:w-80 rounded-full hidden lg:flex items-center justify-center h-[400px]'>
                <Image src={Img3} alt="image" className='sm:h-1/2 xl:h-3/4 w-auto' />
              </div>
            </div>
            <div className='text-white'>
              <div className='w-full mt-10 h-[35vh] flex justify-center items-center'>
                <div className='flex border-gray-500 rounded-t-[200px] border-t border-l border-r  flex-col justify-end h-full items-center lg:w-64'>
                  <div className='flex flex-row'>
                    <div className='border-[#e0eca8] border-b border-r px-6 py-8 w-32'>
                      <div className='flex items-center justify-center flex-col'>
                        <h1 className={`${atma.className} text-4xl text-[#e0eca8]`}>10.5K</h1>
                        <p className='text-base text-white'>Art work</p>
                      </div>
                    </div>
                    <div className='border-[#e0eca8] border-b border-l px-6 py-8 w-32'>
                      <div className='flex items-center justify-center flex-col'>
                        <h1 className={`${atma.className} text-3xl text-[#e0eca8]`}>20K</h1>
                        <p className='text-base text-white'>Artist</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className='flex flex-row'>
                      <div className='border-[#e0eca8] border-t border-r px-6 py-8 w-32'>
                        <div className='flex items-center justify-center flex-col'>
                          <h1 className={`${atma.className} text-3xl text-[#e0eca8]`}>50K</h1>
                          <p className='text-base text-white'>Collections</p>
                        </div>
                      </div>
                      <div className='border-[#e0eca8] border-t border-l px-6 py-8 w-32'>
                        <div className='flex items-center justify-center flex-col'>
                          <h1 className={`${atma.className} text-3xl text-[#e0eca8]`}>90K</h1>
                          <p className='text-base text-white'>Total Sale</p>
                        </div>
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
