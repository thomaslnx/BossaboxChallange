import React, { Component } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { FaSearch, FaPlus, FaTimes } from 'react-icons/fa';
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';

import 'react-popupbox/dist/react-popupbox.css';
import {
  Container,
  FormContainer,
  InputContainer,
  List,
  LightBoxWrapper
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

  addTool = data => {
    const { toolname, link, tooldescription, tags } = data;
    const tagArray = tags.split(',');

    const listTags = tagArray.map(tag => tag.trim());

    const options = {
      headers: { 'Content-type': 'application/json' }
    };

    const tool = api.post(
      '/tools',
      {
        title: toolname,
        link,
        description: tooldescription,
        tags: listTags
      },
      options
    );

    console.log(tool);
  };

  lightBox() {
    this.content = (
      <LightBoxWrapper>
        <span>
          <FaPlus /> <p>Add New Tool</p>
        </span>
        <Form onSubmit={this.addTool}>
          <span>Tool Name</span>
          <Input name="toolname" id="toolname" />
          <span>Tool Link</span>
          <Input name="link" id="link" />
          <span>Tool Description</span>
          <Input multiline name="tooldescription" id="tooldescription" />
          <span>Tags</span>
          <Input name="tags" id="tags" />

          <button type="submit"> Add Tool</button>
        </Form>
      </LightBoxWrapper>
    );

    PopupboxManager.open({ content: this.content });
  }

  render() {
    const { toolsList } = this.state;
    return (
      <Container>
        <FormContainer>
          <form>
            <InputContainer>
              <FaSearch />
              <input className="search" type="text" placeholder="search" />

              <label htmlFor="searchtags">
                <input className="boxcheck" type="checkbox" id="searchtags" />
                <span>search in tags only </span>
              </label>
            </InputContainer>
          </form>

          <PopupboxContainer />

          <button type="button" onClick={this.handleSubmit}>
            <FaPlus /> Add
          </button>
        </FormContainer>

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
