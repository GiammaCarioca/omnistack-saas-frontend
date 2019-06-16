import React from 'react';

import Button from '~/styles/components/Button';
import { Container, SignForm } from '../styles';

const SignIn = () => (
  <Container>
    <SignForm onSubmit={() => {}}>
      <h1>Boas vindas</h1>

      <span>E-Mail</span>
      <input
        type="email"
        name="email"
      />

      <span>Senha</span>
      <input
        type="password"
        name="password"
      />
      <Button size="big" type="submit">Entrar</Button>
    </SignForm>
  </Container>
);

export default SignIn;
