import React from 'react';
import { FaSearch, FaPlus } from 'react-icons/fa';
import { Container, Form, Button, Label, InputContainer } from './styles';

export default function Content() {
  return (
    <Container>
      <Form onSubmit={() => {}}>
        <InputContainer>
          <FaSearch />
          <input className="search" type="text" placeholder="search" />

          <Label for="searchtags">
            <input className="boxcheck" type="checkbox" id="searchtags" />
            <p>search in tags only </p>
          </Label>
        </InputContainer>

        <Button>
          <FaPlus /> Add
        </Button>
      </Form>
    </Container>
  );
}
