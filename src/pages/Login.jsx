import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { Button, Container, Form, InputGroup } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const cookies = new Cookies();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const url = 'https://bimbelzinda.my.id/be/public/api/login';

  const loginHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    try {
      const response = await axios.post(url, formData);
      cookies.set('token', response.data.token, {
        maxAge: 1800,
        secure: true,
        sameSite: 'strict',
      });
      cookies.set('name', response.data.user.name, {
        maxAge: 1800,
        secure: true,
        sameSite: 'strict',
      });
      navigate('/dashboard/data_siswa/index');
      Swal.fire({
        icon: 'success',
        title: 'Login Successfully',
        text: 'You have successfully logged in.',
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Login Error',
        text: 'Something Went Wrong!',
      });
      setError('Login failed. Please check your email and password.');
    }
  };

  return (
    <Container className="col-lg-6 col-md-9 mt-5">
      <div className="card p-5">
        <div className="d-flex justify-content-center mb-3">
          <img src="./logo.png" style={{ width: '64px' }} />
        </div>

        <Form onSubmit={loginHandler}>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <InputGroup>
              <Form.Control
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <InputGroup.Text
                onClick={togglePasswordVisibility}
                style={{ cursor: 'pointer' }}
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </InputGroup.Text>
            </InputGroup>
          </Form.Group>
          {error && <p className="text-danger">{error}</p>}
          <Button
            className="btn btn-primary btn-lg btn-block rounded-1 me-2 mb-xs-0 mb-2"
            type="submit"
          >
            Masuk
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Login;
