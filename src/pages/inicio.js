import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import ImageDestaque from '../assets/images/liberta.svg'

class Inicio extends React.Component {
  state = {
    loading: true,
    error: false,
  }

  render() {
    return (
      <Layout>
        <div className="container mx-auto flex flex-wrap">
          <div className="flex flex-col w-1/1 p-2 sm:w-1/2 justify-center lg:items-start overflow-y-hidden">
            <h1 className="my-4 text-3xl md:text-5xl text-green-800 font-bold leading-tight text-center md:text-left">
              Participe do recomeço de alguém
            </h1>
            <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle">
              Vamos ajudar pessoas que possuem marcas de um passado não muito
              bom.
            </p>

            <p className="text-blue-400 font-bold pb-8 lg:pb-6 text-center md:text-left fade-in">
              Faça parte do projeto:
            </p>
            <div className="flex w-full justify-center md:justify-start pb-24 lg:pb-0 fade-in">
              <a href="https://forms.gle/GFxu69ZA11RjBAna7" target="_blank">
                <button className="p-2 mr-2 border-teal-400 bg-teal-400 border rounded text-white">
                  Preciso ser tatuado
                </button>
              </a>
              <button className="p-2 border-indigo-400 bg-indigo-400 border rounded text-white">
                Sou tatuador
              </button>
            </div>
          </div>

          <div className="w-1/2 xl:w-1/2 hidden sm:block py-6 overflow-y-hidden">
            <img
              className="w-full sm:w-1/1 md:w-full mx-auto lg:mr-0 slide-in-bottom"
              src={ImageDestaque}
            />
          </div>

          <div className="w-full text-center p-4">
            <h2 className="text-4xl font-semibold text-teal-600">
              Sobre o projeto
            </h2>
            <p className="text-lg text-left mt-5 mb-5">
              Esse projeto consiste em fazer tatuagens totalmente gratuitas em
              pessoas que têm marcas de um passado não muito bom em suas
              vidas... Se você for uma dessas pessoas ou conhece alguém que
              possa interessar faça parte do projeto! Vamos recomeçar!!
            </p>
            {/* <Link to="/tatuadores">
              <button className="p-2 mr-2 border-blue-400 bg-blue-600 border rounded text-white">
                Tatuadores Participantes
              </button>
            </Link> */}
          </div>
        </div>
      </Layout>
    )
  }
}
export default Inicio
