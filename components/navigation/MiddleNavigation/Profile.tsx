import Icon from '../icon';
import ProfileIcon from './data'

const NavProfile = () => {
  return (
    <div className='flex w-[10vw] justify-between items-center'>
      {ProfileIcon.map((data) => {
        return (
          <Icon key={data.id} src={data.src} alt={data.alt} width={data.width} height={data.height}/>
        )
      })}
    </div>
  )
}

export default NavProfile
