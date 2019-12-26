import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 32px;

  form {
    margin: 0 0 0 -15px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 400px;
    font-family: 'Source Sans Pro', sans-serif;
  }

  button {
    svg {
      height: 13px;
      margin-top: 2px;
      margin-right: 2px;
    }

    display: flex;
    flex-direction: row;
    justify-content: center;
    font-size: 16px;
    background: #fcd7d6;
    border: 1px solid #fcc6c5;
    color: #f95e5a;
    border-radius: 5px;

    width: 100px;
    height: 30px;
  }
`;

export const InputContainer = styled.div`
  display: flex;

  label {
    input {
      margin: 12px 10px;
    }
  }

  svg {
    position: relative;
    top: 10px;
    left: 25px;
  }

  input.search {
    width: 200px;
    padding: 5px 30px;
    border: 1px solid #dedce1;
    border-radius: 5px;
    font-size: 20px;
  }
`;

export const List = styled.ul`
  margin-top: 20px;

  ul {
    list-style: none;
  }

  li {
    display: flex;
    flex-direction: column;
    background: #feefee;
    border: 1px solid #fcc6c5;
    border-radius: 5px;
    padding: 10px 15px;
    margin-bottom: 20px;

    span {
      margin-bottom: 10px;

      &.title {
        display: flex;
        align-items: center;
        justify-content: space-between;

        svg {
          position: relative;
          top: 3px;
        }
      }

      a {
        text-decoration: none;
        font-weight: 600;
        font-size: 18px;
    }

  }
`;

export const PopupboxContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LightBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-color: green;
  width: 500px;
  height: 500px;
  padding: 30px 30px;
  background: #fcaeac;

  span {
    display: flex;
    flex-direction: row;
    font-size: 20px;
    font-weight: bold;
    font-color: #170c3a;
    position: relative;
    right: 130px;
    margin-bottom: 30px;

    svg {
      position: relative;
      top: 2px;
      height: 15px;
    }

    p {
      margin-left: 30px;
      font-family: 'PT Mono', monospace;
    }
  }
`;

export const ToolsForm = styled.form`
  display: flex;
  flex-direction: column;
  font-family: 'Source Sans Pro', sans-serif;

  input {
    width: 400px;
    height: 25px;
    background: f5f4f6;
    border: 1px solid #ebeaed;
    border-radius: 4px;
    margin-top: 5px;
    margin-bottom: 20px;
    padding: 0 10px;
  }

  textarea {
    background: f5f4f6;
    height: 90px;
    border: 1px solid #ebeaed;
    border-radius: 4px;
    margin-top: 5px;
    margin-bottom: 20px;
    padding: 0 10px;
    resize: none;
  }

  button {
    font-size: 16px;
    background: #fcc6c5;
    border: 1px solid #fcc6c5;
    color: #f95e5a;
    border-radius: 5px;

    width: 120px;
    height: 30px;
    position: relative;
    top: 10px;
    left: 280px;
  }
`;
