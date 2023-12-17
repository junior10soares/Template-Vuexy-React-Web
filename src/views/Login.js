import { Link } from "react-router-dom"
import { Facebook, Twitter, Mail, GitHub } from "react-feather"
import InputPasswordToggle from "@components/input-password-toggle"
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
import "@styles/react/pages/page-authentication.scss"
import { useSkin } from "@hooks/useSkin"

const Login = () => {

    const { skin } = useSkin()

   const source = require('@src/assets/images/pages/logo.png').default

  return (
    <div className="auth-wrapper auth-cover">
      <Row className="auth-inner m-0">
        <Col className="d-none d-lg-flex align-items-center p-5" lg="8" sm="12" style={{background: skin, borderRight: '1px solid black'}}>
          <div className="w-100 d-lg-flex align-items-center justify-content-center px-5">
            <img className="img-fluid" src={source} alt="Login Cover" style={{height:'200px'}}/>
          </div>
        </Col>
        <Col
          className="d-flex align-items-center auth-bg px-2 p-lg-5"
          lg="4"
          sm="12"
        >
          <Col className="px-xl-2 mx-auto" sm="8" md="6" lg="12" >
            <CardTitle tag="h2" className="fw-bold mb-1">
              Bem vindo a goBlockchain! 👋
            </CardTitle>
            <CardText className="mb-2">
              Por favor coloque seu email e senha
            </CardText>
            <Form
              className="auth-login-form mt-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="mb-1">
                <Label className="form-label" for="login-email">
                  Email
                </Label>
                <Input
                  type="email"
                  id="login-email"
                  placeholder="teste@outlook.com"
                  autoFocus
                />
              </div>
              <div className="mb-1">
                <div className="d-flex justify-content-between">
                  <Label className="form-label" for="login-password">
                    Senha
                  </Label>
                  <Link to="/forgot-password">
                    <small>Esqueceu a senha?</small>
                  </Link>
                </div>
                <InputPasswordToggle
                  className="input-group-merge"
                  id="login-password"
                />
              </div>
              <div className="form-check mb-1">
                <Input type="checkbox" id="remember-me" />
                <Label className="form-check-label" for="remember-me">
                  Salvar 
                </Label>
              </div>
              <Button tag={Link} to="/" color="primary" block>
                Entrar
              </Button>
            </Form>
            <p className="text-center mt-2">
              <span className="me-25">Novo na plataforma?</span>
              <Link to="/register">
                <span>Criar conta</span>
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

export default Login
