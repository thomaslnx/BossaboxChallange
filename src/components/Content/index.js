import React, { Component } from 'react';
import { FaSearch, FaPlus, FaTimes } from 'react-icons/fa';
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';

import 'react-popupbox/dist/react-popupbox.css';
import {
  Container,
  Form,
  Button,
  Label,
  InputContainer,
  List,
  LightBoxWrapper,
  ToolsForm
} from './styles';

import api from '../../services/api';

export default class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toolsList: []
    };
  }

  async componentDidMount() {
    const { toolsList } = this.state;

    const response = await api.get('/tools');

    this.setState({
      toolsList: [...toolsList, response.data]
    });
  }

  handleSubmit = async e => {
    e.preventDefault();
    this.lightBox();
  };

  addTool = async e => {
    e.preventDefault();
    window.alert('Ferramenta Adicionada com Sucesso!');
  };

  lightBox() {
    this.content = (
      <LightBoxWrapper>
        <span>
          <FaPlus /> <p>Add New Tool</p>
        </span>
        <ToolsForm onSubmit={this.addTool}>
          <Label for="toolname">Tool Name</Label>
          <input type="text" id="toolname" />
          <Label for="link">Tool Link</Label>
          <input type="text" id="link" />
          <Label for="tooldescription">Tool Description</Label>
          <textarea type="text" id="tooldescription" />
          <Label for="tags">Tags</Label>
          <input type="text" id="tags" />

          <button type="submit"> Add Tool</button>
        </ToolsForm>
      </LightBoxWrapper>
    );

    PopupboxManager.open({ content: this.content });
  }

  render() {
    const { toolsList } = this.state;
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <PopupboxContainer />
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
