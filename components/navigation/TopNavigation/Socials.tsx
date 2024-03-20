// import Image from 'next/image';
import Icon from './icon';

const Socials = () => {
  return (
    <main className='flex w-[20vw] justify-between items-center'>

      <span className="flex w-[12vw] justify-between items-center">
        <Icon src='/Twitter.png' alt="Follow Our Twitter Page" width={6} height={6} />
        <Icon src='/Facebook.png' alt="Follow Our Facebook Page" width={6} height={6} />
        <Icon src='/Vector.png' alt="Follow Our Pinterest Page" width={6} height={6} />
        <Icon src='/Vector (1).png' alt="Follow Our Twitter Page" width={6} height={6} />
        <Icon src='/Vector (2).png' alt="Follow Our Youtube Page" width={6} height={6} />
        <Icon src='/Vector (5).png' alt="Follow Our Instagram Page" width={6} height={6} />
      </span>

      <span className=' text-[6px] flex w-[5vw] justify-between items-center'>
        <span>Eng </span>
        <span>USD</span>
      </span>
    </main>
  )
}

export default Socials
