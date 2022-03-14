import './styles.scss'
const DetailsHospital = ({ details }) => {
  const { detail, address, phone } = details

  return (
    <div className='details'>
      <p className='details__p'>{detail}</p>
      <hr className='details__line' />
      <address className='address'>
        <dl className='address__dl'>
          <i className='bi bi-geo-alt address__icon'></i>
          <dt className='address__title'>Endereço:</dt>
          <dd className='address__info'>{address}</dd>
        </dl>
        <dl className='address__dl'>
          <i className='bi bi-telephone address__icon'></i>
          <dt className='address__title'>Telefone:</dt>
          <dd className='address__info'>{phone}</dd>
        </dl>
      </address>
    </div>
  )
}

export default DetailsHospital
