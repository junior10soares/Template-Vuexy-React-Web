// ** React Imports
import { Link } from "react-router-dom"

// ** Icons Imports
import { ChevronLeft } from "react-feather"

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

const ForgotPassword = () => {

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
          <Col className="px-xl-2 mx-auto" sm="8" md="6" lg="12">
            <CardTitle tag="h2" className="fw-bold mb-1">
             Perdeu a senha? 🔒
            </CardTitle>
            <CardText className="mb-2">
             Digite seu e-mail e enviaremos instruções para redefinir seu senha
            </CardText>
            <Form
              className="auth-forgot-password-form mt-2"
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
              <Button color="primary" block>
               Enviar 
              </Button>
            </Form>
            <p className="text-center mt-2">
              <Link to="/login">
                <ChevronLeft className="rotate-rtl me-25" size={14} />
                <span className="align-middle">Voltar para login</span>
              </Link>
            </p>
          </Col>
        </Col>
      </Row>
    </div>
  )
}

export default ForgotPassword
