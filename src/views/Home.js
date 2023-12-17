import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  CardLink
} from "reactstrap"

import tokenImg from '../assets/images/pages/token.webp'
import fansImg from '../assets/images/pages/fans.webp'
import povoImg from '../assets/images/pages/povo.webp'

const Home = () => {

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Bem-vindo à goBlockchain! 🚀</CardTitle>
        </CardHeader>
        <CardBody>
          <CardText>Explore a abordagem mais simples, segura e escalável para a tokenização de ativos.</CardText>
          <CardText>
            Se você busca aprimorar seus conhecimentos em blockchain, tokenização e muito mais, confira nossos cursos!{" "}
            <CardLink
              href="https://education.goblockchain.io/"
              target="_blank"
            >
              <strong>CLIQUE AQUI</strong>
            </CardLink>{" "}
            para descobrir promoções imperdíveis, projetadas para enriquecer a sua compreensão dessas tecnologias inovadoras.         
          </CardText>
        </CardBody>
      </Card>

      <div style={{display:'flex', gap:'40px', justifyContent: 'space-around', width:'100%'}}>
        <Card style={{width:'320px', borderRadius:'30px'}}>
          <img src={tokenImg} alt="token"/>
          <CardHeader>
            <CardTitle>Sua própria moeda rendendo benefícios aos seus apoiadores mais fiéis.</CardTitle>
          </CardHeader>
        </Card>
        <Card style={{width:'320px', borderRadius:'30px'}}>
          <img src={fansImg} alt="fans" />
           <CardHeader>
            <CardTitle>Seja uma banda, um time ou um restaurante recompense seus fãs.</CardTitle>
          </CardHeader>
        </Card>
       <Card style={{width:'320px', borderRadius:'30px'}}>
          <img src={povoImg} alt="povo" />
           <CardHeader>
            <CardTitle>Empodere sua comunidade e conecte sua causa com marcas relevantes.</CardTitle>
          </CardHeader>
        </Card>
      </div>

    </div>
  )
}

export default Home
