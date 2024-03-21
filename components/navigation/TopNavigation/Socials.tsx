// import Image from 'next/image';
import Icon from '../icon';
import socialMedia from './data';

const Socials = () => {
  return (
    <main className='flex w-[20vw] justify-between items-center'>
      <span className="flex w-[12vw] justify-between items-center">
        {socialMedia.map((data) => {
          return (
              <Icon key={data.id} src={data.src} alt={data.alt} width={data.width} height={data.height} />
          )})}
      </span>
      <span className=' text-[6px] flex w-[5vw] justify-between items-center'>
        <span>Eng </span>
        <span>USD</span>
      </span>
    </main>
  )
}

export default Socials
