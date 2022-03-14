import './styles.scss'
const Header = () => (
  <header className='header'>
    <div className='header__illustrative-img'></div>
    <div className='container'>
      <hgroup className='header__hgroup hgroup'>
        <h1 className='hgroup__title'>
          Conforto e qualidade para levar bem-estar com alto padrão de atendimento a seus
          funcionários.
        </h1>
        <h2 className='hgroup__subtitle'>Conheça o plano Ouro da Porto Seguro Saúde.</h2>
      </hgroup>
      <div className='header__content content'>
        <p className='content__p'>A partir de</p>
        <div className='content__price price'>
          <span className='price__currency'>R$</span>
          <span className='price__int'>255</span>
          <span className='price__decimal'>,65*</span>
        </div>
        <a className='content__btn' href='/'>
          Ver mais
        </a>
      </div>
      <span className='header__info'>
        *Valor referente ao plano Ouro Copar Q (ANS: 481.277/18-8) de 3 à 9 vidas, com 20% de
        copart. com faixa etária entre 0 e 18 anos. Sem IOF. <br /> Promoção válida até 30 de abril
        de 2021.
      </span>
    </div>
  </header>
)

export default Header
