// ** React Imports
import { Link } from "react-router-dom"

// ** Custom H
// ** Icons Imports
import { Facebook, Twitter, Mail, GitHub } from "react-feather"

// ** Custom Components
import InputPasswordToggle from "@components/input-password-toggle"

// ** Reactstrap Imports
import {
  Row,
  Col,
  CardTitle,
  CardText,
  Form,
  Label,
  Input,
  Button
} from "reactstrap"
import { useSkin } from "@hooks/useSkin"
// ** Styles
import "@styles/react/pages/page-authentication.scss"

const Register = () => {

  const { skin } = useSkin()
  const source = require('@src/assets/images/pages/logo.png').default


  return (
    <div className="auth-wrapper auth-cover">
      <Row className="auth-inner m-0">
        <Col className="d-none d-lg-flex align-items-center p-5" lg="8" sm="12" style={{background: skin, borderRight: '1px solid black'}}>
          <div className="w-100 d-lg-flex align-items-center justify-content-center px-5" style={{marginBottom: '100px'}}>
             <img className="img-fluid" src={source} alt="Login Cover" style={{height:'200px'}}/>
          </div>
        </Col>
        <Col
          className="d-flex align-items-center auth-bg px-2 p-lg-5"
          lg="4"
          sm="12"
        >
          <Col className="px-xl-2 mx-auto" xs="12" sm="8" md="6" lg="12">
            <CardTitle tag="h2" className="fw-bold mb-1">
              A aventura começa aqui 🚀
            </CardTitle>
            <CardText className="mb-2">
              Torne o gerenciamento do seu aplicativo fácil e divertido!
            </CardText>
            <Form
              className="auth-register-form mt-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="mb-1">
                <Label className="form-label" for="register-username">
                  Nome
                </Label>
                <Input
                  type="text"
                  id="register-username"
                  placeholder="Junior"
                  autoFocus
                />
              </div>
              <div className="mb-1">
                <Label className="form-label" for="register-email">
                  Email
                </Label>
                <Input
                  type="email"
                  id="register-email"
                  placeholder="teste@outlook.com"
                />
              </div>
              <div className="mb-1">
                <Label className="form-label" for="register-password">
                  Senha
                </Label>
                <InputPasswordToggle
                  className="input-group-merge"
                  id="register-password"
                />
              </div>
              <div className="form-check mb-1">
                <Input type="checkbox" id="terms" />
                <Label className="form-check-label" for="terms">
                  Eu aceito
                  <a
                    className="ms-25"
                    href="/"
                    onClick={(e) => e.preventDefault()}
                  >
                    os termos e politicas
                  </a>
                </Label>
              </div>
              <Button tag={Link} to="/" color="primary" block>
               Entrar
              </Button>
            </Form>
            <p className="text-center mt-2">
              <span className="me-25">Já tem uma conta?</span>
              <Link to="/login">
                <span>Entre</span>
              </Link>
            </p>
            <div className="divider my-2">
              <div className="divider-text">ou</div>
            </div>
            <div className="auth-footer-btn d-flex justify-content-center">
              <Button color="facebook">
                <Facebook size={14} />
              </Button>
              <Button color="twitter">
                <Twitter size={14} />
              </Button>
              <Button color="google">
                <Mail size={14} />
              </Button>
              <Button className="me-0" color="github">
                <GitHub size={14} />
              </Button>
            </div>
          </Col>
        </Col>
      </Row>
    </div>
  )
}

export default Register
