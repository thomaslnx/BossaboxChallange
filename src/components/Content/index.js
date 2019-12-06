import React, { Component } from 'react';
import { FaSearch, FaPlus, FaTimes } from 'react-icons/fa';

import { Container, Form, Button, Label, InputContainer, List } from './styles';

import api from '../../services/api';

export default class Content extends Component {
  state = {
    toolsList: []
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { toolsList } = this.state;

    const response = await api.get('/tools');

    this.setState({
      toolsList: [...toolsList, response.data]
    });
  };

  render() {
    const { toolsList } = this.state;
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
          {toolsList.map((tools, index) => (
            <ul key={index}>
              {tools.map(item => (
                <li key={item.id}>
                  <span className="title">
                    <a href={item.link}>{item.title}</a>
                    <span>
                      <FaTimes /> remove
                    </span>
                  </span>
                  <span className="description">{item.description}</span>
                </li>
              ))}
            </ul>
          ))}
        </List>
      </Container>
    );
  }
}
