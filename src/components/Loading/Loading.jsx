import ReactLoading from 'react-loading'
import './styles.scss'

export const Loading = () => (
  <div className='loading'>
    <ReactLoading type='balls' color='#f7b53d' height={64} width={64} />
  </div>
)
