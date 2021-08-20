import React, { Component } from 'react';
import styled, { createGlobalStyle } from "styled-components/macro"
import addbtn from './assets/add.svg'
import carImg from './assets/car.svg'
import rmvbtn from './assets/remove.svg'

const AddImg = styled.img`
  cursor: pointer;
  border-radius: 50px;
`
const BoxList = styled.div`
  flex-wrap: wrap;
`

const BoxTitle = styled.div`
`
const ContainerTitle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 5rem;
`
const Card = styled.div`
  border: solid rgb(232 232 232) 2px;
  width: 13rem;
  height: 8rem;
  border-radius: 10px;
  margin: 10px;
  text-align: center;
  `
const BuyBox = styled.div`
  border: solid rgb(232 232 232) 2px;
  width: 35rem;
  height: 40rem;
  overflow-y: scroll;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  `
const ContainerBuy = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${carImg});
`

const BoxCard = styled.div`
  max-width: 1080px;
  display: flex;
  flex-wrap: wrap;
  height: 80vh;
`

const HeaderCard = styled.div`
  border-bottom: solid rgb(232 232 232) 2px;
  background-color: rgb(245 245 245);
  height: 2.2rem;
  border-radius: 6px 6px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const HeaderCardBuy = styled.div`
  color:#ffff;
  border-bottom: solid #5bc0de 5px;
  background-color: #5bc0de;
  display: flex;
  justify-content: space-between;
  height: 2rem;
  align-items: center;
`
const ParagraphBuy = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const Container = styled.div`
`

const ItemTitle = styled.h1`
`

const Paragraph = styled.p`
  font-weight: bold;
`

const ContainerMain = styled.div`
  display: flex;
  height: 50rem;
`

const Calc = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const CardBuy = styled.div`
  height: 80px;
  width: 515px;
  background-color: #fff;
  border: solid #5bc0de 2px;
  margin-bottom: 1rem;
`

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`

class App extends Component {
  state = {
    buy: [],
    car: [
      {
        modelo: 'Jetta',
        montadora: 'Volkswagen',
        preco: 144000,
        tipo: "SUV",
        id: 1,
      },
      {
        modelo: 'GT R Pro',
        montadora: 'Mercedes',
        preco: 2200000,
        tipo: "Sedan",
        id: 2,
      },
      {
        modelo: '911 Turbo S Cabriolet',
        montadora: 'Porche',
        preco: 1500000,
        tipo: "SUV",
        id: 3,
      },
      {
        modelo: 'G 63',
        montadora: 'Mercedes',
        preco: 1680000,
        tipo: "Sedan",
        id: 4,
      },
      {
        modelo: 'Range Rover SV Autobiography',
        montadora: 'Land Rover',
        preco: 1400000,
        tipo: "SUV",
        id: 5,
      },
      {
        modelo: 'Range Rover Evoque',
        montadora: 'Land Rover',
        preco: 400000,
        tipo: "Sedan",
        id: 6,
      },
      {
        modelo: 'R8 Performance',
        montadora: 'Audi',
        preco: 1380000,
        tipo: "SUV",
        id: 7,
      },
      {
        modelo: 'S 63',
        montadora: 'Mercedes',
        preco: 1340000,
        tipo: "SUV",
        id: 8,
      },
      {
        modelo: 'Panamera Turbo S E-Hybrid',
        montadora: 'Porsche',
        preco: 1140000,
        tipo: "SUV",
        id: 9,
      },
      {
        modelo: 'Taycan Turbo S',
        montadora: 'Porsche',
        preco: 1080000,
        tipo: "SUV",
        id: 10,
      },
      {
        modelo: 'Cayenne Coupe E-Hybrid Turbo S',
        montadora: 'Porsche',
        preco: 1042000,
        tipo: "Sedan",
        id: 11,
      },
      {
        modelo: 'M8 Competition',
        montadora: 'BMW',
        preco: 1137000,
        tipo: "SUV",
        id: 12,
      },
      {
        modelo: 'RS 7 Sportback',
        montadora: 'Audi',
        preco: 980000,
        tipo: "SUV",
        id: 13,
      },
      {
        modelo: 'Cayman GT4',
        montadora: 'Porsche',
        preco: 860000,
        tipo: "SUV",
        id: 14,
      },
      {
        modelo: 'Corolla 2021',
        montadora: 'Toyota',
        preco: 140000,
        tipo: "SUV",
        id: 15,
      },
      {
        modelo: 'Civic Sport',
        montadora: 'Honda',
        preco: 130000,
        tipo: "Sedan",
        id: 16,
      },
      {
        modelo: 'Evija',
        montadora: 'Lotus Cars',
        preco: 2100000,
        tipo: "SUV",
        id: 17,
      },
      {
        modelo: 'Venom F5',
        montadora: 'Hennessey',
        preco: 2.00000,
        tipo: "SUV",
        id: 18,
      },
      {
        modelo: 'Elva',
        montadora: 'McLaren',
        preco: 1700000,
        tipo: "Sedan",
        id: 19,
      },
      {
        modelo: 'Monza SP',
        montadora: 'Ferrari',
        preco: 2000000,
        tipo: "SUV",
        id: 20,
      }
    ]
  }

  handleRmv = (id) => {
    const { buy } = this.state
    this.setState({
      buy: buy.filter((item) => item.id !== id)
    })
  }

  handleAdd = (id) => {
    const { buy, car } = this.state
    const teste = car.find((item) => item.id === id)
    this.setState({
      buy: buy.concat(teste)
    })
  }

  render() {
    return (
      <Container>
        <GlobalStyle />
        <ContainerTitle>
          <BoxTitle>
            <ItemTitle>Loja de Carros!</ItemTitle>
          </BoxTitle>
        </ContainerTitle>
        <ContainerMain>
          <BoxCard>
            {this.state.car.map((item, index) => (
              <BoxList key={index}>
                <Card>
                  <HeaderCard>
                    <Paragraph>{item.modelo}</Paragraph>
                    <AddImg onClick={() => this.handleAdd(item.id)} src={addbtn} alt='' />
                  </HeaderCard>
                  <Paragraph> Montadira: {item.montadora}</Paragraph>
                  <Paragraph>Preço: {item.preco}</Paragraph>
                  <Paragraph>Tipo: {item.tipo}</Paragraph>
                </Card>
              </BoxList>
            ))}
          </BoxCard>
          <ContainerBuy>
            <BuyBox>
              {this.state.buy.map((item, id) => (
                <CardBuy style={{ background: '' }}>
                  <HeaderCardBuy>
                    <ParagraphBuy>{item.modelo}</ParagraphBuy>
                    <AddImg onClick={() => this.handleRmv(item.id)} src={rmvbtn} alt='' />
                  </HeaderCardBuy>
                  <ParagraphBuy>
                    <Paragraph>Tipo: {item.tipo}</Paragraph>
                    <Paragraph>Preço: {item.preco}</Paragraph>
                  </ParagraphBuy>
                </CardBuy>
              ))}
            </BuyBox>
            <Calc>
              <Paragraph>Total :</Paragraph>
              <Paragraph> {this.state.buy.reduce((a, b) => a + b.preco, 0).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} </Paragraph>
            </Calc>
          </ContainerBuy>
        </ContainerMain>
      </Container>
    )
  }
}

export default App;
