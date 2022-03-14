import TitleSections from '../TitleSections'
import CardHospitals from './CardHospitals'
import useFetch from '../../hooks/useFetch'
import { useState } from 'react'
import DetailsHospital from './DetailsHospital'
import './styles.scss'
import FlashError from '../FlashError/FlashError'
import useWindowSize from '../../hooks/useWindowSize'
import { Loading } from '../Loading/Loading'
import FadeIn from 'react-fade-in/lib/FadeIn'

const HospitalsSection = () => {
  const URL = '/api/v1/hospital'
  const [showDetails, setShowDetails] = useState(false)
  const { size } = useWindowSize()
  const { isFetching, err, data: hospitals } = useFetch(URL)
  const [details, setDetails] = useState({})
  const handleShowDetails = bool => setShowDetails(bool)

  return (
    <section className='section-hospitals section'>
      <div className='container'>
        <TitleSections title='Hospitais em destaque' />
        <p className='section-hospitals__p'>
          Contando com os melhores hospitais do Rio de Janeiro, o plano Ouro dispõe para você as
          redes mais referenciadas com diversos benefícios para que você tenha um atendimento
          totalmente personalizado.
        </p>
        {isFetching && <Loading />}
        {!err ? (
          <ul className='section-hospitals__cards'>
            {hospitals.slice(0, 3).map(hospital => (
              <CardHospitals
                showDetails={showDetails}
                handleShowDetails={bool => handleShowDetails(bool)}
                key={hospital.id}
                details={hospital}
                setDetails={setDetails}
              />
            ))}
          </ul>
        ) : (
          <FlashError errorMsg='Ocorrer um erro interno e não foi possível obter resultados para hospitais em destaque.' />
        )}

        {showDetails && size > 1024.98 && (
          <FadeIn transitionDuration={800}>
            <DetailsHospital details={details}></DetailsHospital>
          </FadeIn>
        )}
      </div>
    </section>
  )
}

export default HospitalsSection
