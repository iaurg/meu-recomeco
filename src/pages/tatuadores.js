import React from 'react'
import axios from 'axios'
import TatuadorCard from '../components/TatuadorCard'
import Layout from '../components/layout'

class Tatuadores extends React.Component {
  state = {
    loading: true,
    error: false,
  }

  componentDidMount() {
    this.fetchTatuadores()
  }

  fetchTatuadores = () => {
    this.setState({ loading: true })
    axios
      .get(`https://api.sheety.co/779caed6-9268-4a2d-982c-c905f19a563f`)
      .then(response => {
        this.setState({
          loading: false,
          data: response.data,
        })
      })
      .catch(error => {
        this.setState({ loading: false, error })
      })
  }

  render() {
    return (
      <Layout>
        <div className="container mx-auto">
          <div className=" text-center py-4 lg:px-4 p-2">
            <div
              className="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
              role="alert"
            >
              <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">
                👀
              </span>
              <span className="font-semibold mr-2 text-left flex-auto">
                Precisamos de mais tatuadores{' '}
                <a href="" className="underline">
                  Inscreva-se
                </a>
              </span>
              <svg
                className="fill-current opacity-75 h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
              </svg>
            </div>
          </div>
          <div>
            {this.state.loading ? (
              <p className="text-center">Caaaaaaaaaaaaaaaarregando!</p>
            ) : (
              <TatuadorCard data={this.state.data} />
            )}
          </div>
        </div>
      </Layout>
    )
  }
}
export default Tatuadores
