import React, { Component } from 'react';
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

  addTool = async e => {
    e.preventDefault();
    window.alert('Ferramenta Adicionada com Sucesso!');

    console.log(e);

    const options = {
      headers: { 'Content-type': 'application/json' }
    };

    // const tool = await api.post('/tools', {
    //   id: {e.target.toolname},
    //   title: ,
    //   link: ,
    //   description: ,
    //   tags: [],
    // }, options)
  };

  lightBox() {
    this.content = (
      <LightBoxWrapper>
        <span>
          <FaPlus /> <p>Add New Tool</p>
        </span>
        <form onSubmit={this.addTool}>
          <span>Tool Name</span>
          <input type="text" id="toolname" />
          <span>Tool Link</span>
          <input type="text" id="link" />
          <span>Tool Description</span>
          <textarea type="text" id="tooldescription" />
          <span>Tags</span>
          <input type="text" id="tags" />

          <button type="submit"> Add Tool</button>
        </form>
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
