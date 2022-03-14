import './styles.scss'
import FadeIn from 'react-fade-in/lib/FadeIn'
import useClicked from '../../../hooks/useClicked'
import DetailsHospital from '../DetailsHospital'
import useWindowSize from '../../../hooks/useWindowSize'

const CardHospitals = ({ details, setDetails, handleShowDetails, showDetails }) => {
  const { clicked, handleClick } = useClicked()
  const { size } = useWindowSize()
  const { name, image } = details

  const handleDropDown = () => {
    handleShowDetails(!showDetails)
    handleClick()
    setDetails(details)
  }

  return (
    <li className='card-item'>
      <div>
        <img className='card-item__img' src={image} alt={image} />
        <h3 className='card-item__title'>{name}</h3>
        <div className='card-item__btn' role='button' onClick={handleDropDown}>
          <i className={clicked ? 'fa-solid fa-angle-up' : 'fa-solid fa-angle-down'}></i>
        </div>
        {clicked && size < 1024.98 && (
          <FadeIn transitionDuration={600}>
            <DetailsHospital details={details} />
          </FadeIn>
        )}
      </div>
    </li>
  )
}

export default CardHospitals
