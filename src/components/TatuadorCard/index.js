import React from "react";

const isSearched = searchTerm => item => item.estado.toLowerCase().includes(searchTerm.toLowerCase())

class TatuadorCard extends React.Component{
  state = {
    list: this.props.data,
    searchTerm: '',
  }

  onSearchChange = (event) =>{
    console.log(event.target.value)
    this.setState({searchTerm: event.target.value})
  }

  render(){
        const results = (data) => 
        Object.keys(data).reduce((result, key) => {
            (!~result.indexOf(data[key].estado)) &&
                result.push(data[key].estado);
            return result
        }, [])
        const estadosFiltrados = results(this.state.list);
        console.log(estadosFiltrados)
        return(
          <>
          <div className="p-2">
          <select onChange={this.onSearchChange} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
            <option value="">Selecione o estado que deseja um tatuador</option>
            {estadosFiltrados.map(item => <option>{item}</option>)}
          </select>
          </div>
          <div className="flex flex-wrap mb-4 md:w-1/1">
          {this.state.list.filter(isSearched(this.state.searchTerm)).map((tatuador) => 
            <div className="w-full md:w-1/2 lg:w-1/4 mt-8 p-2">
            <div className="mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="sm:items-center px-6 py-4">
              <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
                <p className="text-xl leading-tight">{tatuador.nome}</p>
                <p className="text-sm leading-tight text-gray-600"><strong>{tatuador.estado}</strong> - {tatuador.cidade}</p>
                <span className="text-sm leading-tight text-gray-600">WhatsApp: {tatuador.numero}</span>
                <div className="flex mt-2 justify-center sm:justify-start ">
                  {tatuador.instagram ? (
                  <a href={`https://www.instagram.com/${tatuador.instagram}`} target="_blank">
                    <button className="mr-2 text-orange-500 hover:text-white hover:bg-orange-500 border border-orange-500 text-xs font-semibold rounded-full px-4 py-1 leading-normal">
                      Instagram
                    </button>
                  </a>
                  ) : ('')
                  }

                  {tatuador.facebook ? (
                  <a href={`https://www.facebook.com/search/top/?q=${tatuador.facebook}`} target="_blank">
                    <button className="text-indigo-500 hover:text-white hover:bg-indigo-500 border border-indigo-500 text-xs font-semibold rounded-full px-4 py-1 leading-normal">
                      Facebook
                    </button>
                  </a>
                  ) : ('')
                  }
                </div>
              </div>
            </div>
            </div>
            </div>
          )}
               
          </div>  
          </>
        )
      }
 };

export default TatuadorCard;