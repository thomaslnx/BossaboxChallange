import React, { Component } from 'react';
import { FaSearch, FaPlus, FaTimes } from 'react-icons/fa';
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';

import 'react-popupbox/dist/react-popupbox.css';
import { Container, Form, Button, Label, InputContainer, List } from './styles';

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

  lightBox() {
    const lightboxWrapper = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontColor: 'green',
      width: '500px',
      height: '400px',
      padding: '30px 0',
      background: '#FCD7D6'
    };

    const title = {
      fontSize: '20px',
      color: 'green',
      position: 'relative',
      right: '170px',
      marginBottom: '30px'
    };

    const content = {
      display: 'flex',
      flexDirection: 'column'
    };

    const input = {
      width: '400px',
      height: '25px',
      border: '1px solid',
      borderRadius: '4px',
      marginBottom: '20px'
    };

    const button = {
      width: '70px',
      height: '20px',
      border: '1px solid',
      borderRadius: '4px',
      position: 'relative',
      left: '330px',
      fontSize: '16px'
    };

    this.content = (
      <div style={lightboxWrapper}>
        <span style={title}>Add New Tool</span>
        <form style={content}>
          <Label for="toolname">Tool Name</Label>
          <input style={input} type="text" id="toolname" />
          <Label for="link">Tool Link</Label>
          <input style={input} type="text" id="link" />
          <Label for="tooldescription">Tool Description</Label>
          <input style={input} type="text" id="tooldescription" />
          <Label for="tags">Tags</Label>
          <input style={input} type="text" id="tags" />

          <button style={button} type="submit">
            Add Tool
          </button>
        </form>
      </div>
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
