import './styles.scss'
const ContactButton = ({ iconPath, text, alt, txtAlign, margin }) => (
  <div className='btn' role='button' style={{ margin: margin }}>
    <a className='btn__link' href='/'>
      <img className='btn__img' src={iconPath} alt={alt} />
      <span className='btn__text' style={{ textAlign: txtAlign }}>
        {text}
      </span>
    </a>
  </div>
)

export default ContactButton
