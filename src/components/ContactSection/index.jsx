import TitleSections from '../TitleSections'
import Form from '../Form'
import Contact from '../Contact'
import './styles.scss'

const ContactSection = () => (
  <section className='section-contact section'>
    <div className='container'>
      <TitleSections title='Quer saber mais?' />
      <div className='section-contact__info info'>
        <img className='info__img' src='icons/phone-call.svg' alt='ícone telefone' />
        <p className='info__p'>
          Ainda sobrou alguma dúvida sobre qual o melhor Plano para sua empresa? <br />
          Envie seus dados e deixe que a NS Benefícios entrará em contato assim que possível.
        </p>
      </div>
      <div className='section-contact__content'>
        <Form></Form>
        <hr className='section-contact__line' />
        <Contact />
      </div>
    </div>
  </section>
)

export default ContactSection
