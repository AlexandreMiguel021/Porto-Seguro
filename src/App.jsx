import ContactSection from './components/ContactSection'
import Header from './components/Header'
import HospitalsSection from './components/HospitalsSection'
import Navbar from './components/Navbar'
import './styles/globals.css'

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <HospitalsSection />
      <ContactSection />
    </>
  )
}

export default App
