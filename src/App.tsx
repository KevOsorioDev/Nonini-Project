// import './App.css'
import { Navbar, Carousel, FrontPageSectionsAnim, FrontPageCard, Footer} from './components'
import carouselData from './data/carouselItems'

import Lenis from '@studio-freight/lenis'

const lenis = new Lenis()

function raf(time: number) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Carousel slides={carouselData}/>
      <FrontPageSectionsAnim text='Lo más vendido del invierno'>
        <FrontPageCard
          cardText='Chaqueta de invierno'
          cardDescription='Mantente abrigado y a la moda con nuestra chaqueta de invierno.'
          // imgCard='https://images.unsplash.com/photo-1601758123927-8f0b1c2d3e4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80'
          linkCard='https://example.com/chaqueta-invierno'
        ></FrontPageCard>
      </FrontPageSectionsAnim>
      <Footer/>
    </>
  )
}

export default App;
