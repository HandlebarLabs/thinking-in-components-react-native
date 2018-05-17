import React from 'react';
import { View } from 'react-native';
import Container from '../components/Container';
import Card from '../components/Card';
import { H1, H2, P } from '../components/Text';
import { ButtonSecondary, ButtonContainer } from '../components/Button';
import ProgressBar from '../components/ProgressBar';

export default () => (
  <Container>
    <Card>
      <View style={{ alignItems: 'center' }}>
        <H2>Next Question in: </H2>
        <H1>6 Hours</H1>
      </View>

      <H2>spencer's stats:</H2>
      <ProgressBar percentage={8/12} />
      <P center><P bold>8</P> correct out of <P bold>12</P> answered</P>
    </Card>

    <ButtonContainer align="center">
      <ButtonSecondary border={false}>No thanks</ButtonSecondary>
    </ButtonContainer>
  </Container>
);
