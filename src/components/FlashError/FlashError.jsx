import './styles.scss'

const FlashError = ({ errorMsg }) => (
  <div className='error'>
    <i className='bi bi-exclamation-triangle error__icon'></i>
    <span className='error__msg'>{errorMsg}</span>
  </div>
)

export default FlashError
