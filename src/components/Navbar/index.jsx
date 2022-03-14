import './styles.scss'
import useClicked from '../../hooks/useClicked'
import { MenuItems } from '../../constants/menuItems'
import Contact from '../Contact'
import useWindowSize from '../../hooks/useWindowSize'

const Navbar = () => {
  const { clicked, handleClick } = useClicked()
  const { size } = useWindowSize()

  return (
    <nav className='navbar'>
      <div className='container'>
        <div className='logos'>
          <img
            className='logos__logo-norte-sul'
            src='/images/logo-norte-sul.png'
            alt='logo norte a sul'
          />
          <img
            className='logos__logo-porto-seguro'
            src='/images/logo-porto-seguro.png'
            alt='logo porto seguro'
          />
        </div>
        <div className='navbar__mobile-icon' onClick={handleClick}>
          <i className={clicked ? 'bi bi-x icon' : 'bi bi-list icon'}></i>
        </div>
        <ul className={clicked && size < 1024.98 ? 'navbar__list--active' : 'navbar__list'}>
          {MenuItems.map((item, index) => (
            <li className='navbar__items' key={index}>
              <a className='navbar__links' href={item.url}>
                {item.title}
              </a>
            </li>
          ))}
          {clicked && size < 1024.98 && (
            <div className='navbar__contact'>
              <Contact margin='0' txtColor='#fff' />
            </div>
          )}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
