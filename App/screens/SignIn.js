import React from 'react';
import { Text } from 'react-native';
import Container from '../components/Container';
import Card from '../components/Card';
import { H1, P } from '../components/Text';
import TextInput from '../components/TextInput';
import { ButtonPrimary, ButtonContainer } from '../components/Button';

export default () => (
  <Container>
    <Card>
      <H1>Trivia!</H1>
      <P>Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb.</P>
      <TextInput />
    </Card>

    <ButtonContainer align="center">
      <ButtonPrimary>Join!</ButtonPrimary>
    </ButtonContainer>
  </Container>
);
