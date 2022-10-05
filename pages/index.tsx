import React from 'react';
import styled from 'styled-components';
import type { NextPage } from 'next';
import Checkbox from '../components/Checkbox';
import Spacer from '../components/Spacer';
import StyledCheckbox from '../components/StyledCheckbox';

const Home: NextPage = () => {
  const [checkedOne, setCheckedOne] = React.useState(false);
  const [checkedTwo, setCheckedTwo] = React.useState(false);
  const [checked3, setChecked3] = React.useState(false);

  const handleChangeOne = () => {
    setCheckedOne(!checkedOne);
  };

  const handleChangeTwo = () => {
    setCheckedTwo(!checkedTwo);
  };

  const handleChange3 = () => {
    setChecked3(!checked3);
  };

  return (
    <PageWrapper>
      <Title>Checkbox</Title>
      <Checkbox
        label="My label one"
        value={checkedOne}
        onChange={handleChangeOne}
      />
      <p>Is "My Value" checked? {checkedOne.toString()}</p>
      <Checkbox
        label="My label Two"
        value={checkedTwo}
        onChange={handleChangeTwo}
      />
      <p>Is "My Value" checked? {checkedTwo.toString()}</p>
      <Spacer size={200} />
      <StyledCheckbox
        label="My label Two"
        value={checked3}
        onChange={handleChange3}
      />
    </PageWrapper>
  );
};

const PageWrapper = styled.main``;

const Title = styled.h1`
  font-size: 2.5rem;
`;

export default Home;
