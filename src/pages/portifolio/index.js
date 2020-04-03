import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import axios from 'axios'

export default class Portifolio extends Component {

    state = {
        conteudo: {}
    }

    componentDidMount = () => {
        axios.get("http://localhost:3000/portfolio")
          .then(resposta => {
            this.setState({ conteudo: resposta.data })
          })
      }

    render(){
      const { conteudo } = this.state

      return(
      <>
      <Helmet>
          <title>Portifólio</title>
      </Helmet>
      <div className="page"> 
        <div className="conteudo"> 
          <div className="flex"> 
            <h1>{conteudo.titulo}</h1> 
            <div className="portfolio-list"> 
          
            {conteudo.imagens !== undefined && (
              <>
              {
                conteudo.imagens.map((item) => (
                  <img key = {item.id} src={item.foto}></img>
                ))
              }
              </>
            )}

            </div>
          </div> 
        </div> 
      </div>
      </>
      )
    }


}

