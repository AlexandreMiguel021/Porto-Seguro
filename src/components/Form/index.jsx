import ReCAPTCHA from 'react-google-recaptcha'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { formValidation } from './validation'
import { useState } from 'react'
import { txt } from '../../constants/placeholders'
import './styles.scss'
import useWindowSize from '../../hooks/useWindowSize'

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formValidation),
  })

  const [isValidCaptcha, setIsValidCaptcha] = useState(null)
  const { mobileSize } = useWindowSize()

  const sendData = data => {
    handleCaptcha()
    if (isValidCaptcha) {
      console.log(data) // dados do formulario
      reset()
      setIsValidCaptcha(true)
    }
    return
  }

  const handleCaptcha = token => {
    if (token) {
      setIsValidCaptcha(true)
    } else {
      setIsValidCaptcha(false)
    }
  }

  return (
    <form className='form' onSubmit={handleSubmit(sendData)}>
      <fieldset>
        <legend>Informe os dados</legend>

        <div className='form-group'>
          <label className='form-group__label'>Nome:</label>
          <span className='form-group__err-msg'>{errors.name?.message}</span>
          <input
            className='form-group__input'
            placeholder={mobileSize ? txt.name.mobile : txt.name.desktop}
            type='text'
            name='name'
            {...register('name')}
          />
        </div>

        <div className='form-group'>
          <label className='form-group__label'>Telefone:</label>
          <span className='form-group__err-msg'>{errors.phone?.message}</span>
          <input
            className='form-group__input'
            placeholder={mobileSize ? txt.phone.mobile : txt.phone.desktop}
            type='number'
            name='phone'
            {...register('phone')}
          />
        </div>

        <div className='form-group'>
          <label className='form-group__label'>E-mail</label>
          <span className='form-group__err-msg'>{errors.email?.message}</span>
          <input
            className='form-group__input'
            placeholder={mobileSize ? txt.email.mobile : txt.email.desktop}
            type='text'
            name='email'
            {...register('email')}
          />
        </div>
        {!isValidCaptcha && isValidCaptcha !== null && (
          <span className='form__err-msg-captcha'>Por favor, confirme que você não é um robô</span>
        )}
        <div className='form__recaptcha'>
          <ReCAPTCHA
            className='recapcha'
            sitekey='6LeO9tAeAAAAABaKq6RfiDCt1oL1-FNGuC0phOtG'
            onChange={handleCaptcha}></ReCAPTCHA>
        </div>

        <button className='form__btn' type='submit'>
          Enviar contato
        </button>
      </fieldset>
    </form>
  )
}

export default Form
