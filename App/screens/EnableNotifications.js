import React from 'react';
import Container from '../components/Container';
import Card from '../components/Card';
import { H1, P } from '../components/Text';
import { ButtonPrimary, ButtonSecondary, ButtonContainer } from '../components/Button';

export default () => (
  <Container>
    <Card>
      <H1>Get Notified?</H1>
      <P>
        Should we send you a push notification when the latest trivia question is up?
      </P>
    </Card>

    <ButtonContainer>
      <ButtonSecondary>No thanks</ButtonSecondary>
      <ButtonPrimary>Notify me!</ButtonPrimary>
    </ButtonContainer>
  </Container>
);
