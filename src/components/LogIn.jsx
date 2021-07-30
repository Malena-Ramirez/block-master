import React from 'react'
import { Form, Button, Container, Card } from 'react-bootstrap'
import { useForm } from '../hook/useForm'
import { useDispatch } from 'react-redux'
import { loginGoogle, loginEmailPassword } from '../action/action'
import { Link } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background: #352E6C;
    margin: 0 auto;
    padding: 0;
  }
`

const LogIn = () => {
  const dispatch = useDispatch()

  const [formValues, handleInputChange] = useForm({
    email: '',
    password: '',
  })

  const { email, password } = formValues

  const handleLogin = (e) => {
    e.preventDefault()
    dispatch(loginEmailPassword(email, password))
  }

  const handleLoginGoogle = () => {
    dispatch(loginGoogle())
  }

  return (
    <>
      <GlobalStyle />
      <Container className='mt-5'>
        <Card className='d-flex justify-content-center align-middle'>
          <Container className='mt-4 p-3'>
            <h1>Inicio de sesión</h1>
            <Form onSubmit={handleLogin}>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control
                  placeholder='Correo electrónico'
                  type='email'
                  name='email'
                  value={email}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicPassword'>
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  placeholder='Contraseña'
                  type='password'
                  name='password'
                  value={password}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Button variant='primary' type='submit'>
                Iniciar sesión
              </Button>
              <Container className='auth__social-networks d-flex justify-content-center mt-3'>
                <Container
                  className='google-btn d-flex justify-content-center'
                  onClick={handleLoginGoogle}
                >
                  <Container className='google-icon-wrapper d-flex justify-content-center'>
                    <img
                      className='google-icon'
                      src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
                      alt='googlebutton'
                    />
                  </Container>
                </Container>
              </Container>
              <div className='mt-3 d-flex justify-content-center'>
                <span>¿No estás registrado?</span>
                <Link className='text-dark' to='/auth/register'>
                  Registrarse
                </Link>
              </div>
            </Form>
          </Container>
        </Card>
      </Container>
    </>
  )
}

export default LogIn
