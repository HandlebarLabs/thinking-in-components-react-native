import React from 'react';
import Container from '../components/Container';
import Card from '../components/Card';
import { H2, P } from '../components/Text';
import { ButtonPrimary, ButtonContainer } from '../components/Button';
import AnswerRow from '../components/AnswerRow';
import data from '../data';

export default () => (
  <Container>
    <Card>
      <H2>{data.question}</H2>

      {data.answers.map(answer => (
        <AnswerRow
          key={answer.answer}
          answer={answer.answer}
          answerCount={answer.answerCount}
          totalCount={data.totalResponses}
        />
      ))}
    </Card>

    <ButtonContainer align="right">
      <ButtonPrimary>Continue</ButtonPrimary>
    </ButtonContainer>
  </Container>
);
