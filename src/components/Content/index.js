import React, { Component } from 'react';
import { FaSearch, FaPlus } from 'react-icons/fa';
import { Container, Form, Button, Label, InputContainer, List } from './styles';

import api from '../../services/api';

export default class Content extends Component {
  state = {
    toolsList: []
  };

  handleSubmit = async e => {
    e.preventDefault();

    const response = await api.get('/tools');
    const { toolsList } = this.state;

    const toolsSet = response.data.map(obj => {
      return {
        name: obj.title,
        description: obj.description
      };
    });

    this.setState({
      toolsList: [...toolsList, toolsSet]
    });

    console.log(toolsSet);
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
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

        <List>
          <h1> Lista de repositorios.</h1>
        </List>
      </Container>
    );
  }
}
