import React from 'react';

import Container from 'components/Container';

import * as S from './styles';
import { FooterProps } from 'types/api';

const Footer = ({ title }: FooterProps) => (
  <S.Wrapper>
    <Container>
      <div dangerouslySetInnerHTML={{ __html: title }} />
    </Container>
  </S.Wrapper>
);

export default Footer;
