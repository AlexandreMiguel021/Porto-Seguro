import ContactButton from './ContactButton'
import './styles.scss'

const Contact = ({ margin, txtColor }) => (
  <article className='contact'>
    <address className='contact__address address'>
      <span className='address__title' style={{ color: txtColor }}>
        FALE CONOSCO AGORA MESMO:
      </span>
      <span className='address__number' style={{ color: txtColor }}>
        4020-6400
      </span>
      <ContactButton
        iconPath='/icons/whatsapp.svg'
        text='clique aqui para enviar uma mensagem'
        alt='Ícone whatsapp'
        txtAlign='left'
        margin={margin}
      />
      <ContactButton
        iconPath='/icons/phone.svg'
        text='clique aqui para ligar'
        alt='Ícone Telefone'
        txtAlign='center'
        margin={margin}
      />
      <span className='address__time' style={{ color: txtColor }}>
        Horário de Atendimento de 8h às 17h
      </span>
    </address>
  </article>
)

export default Contact
