import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Form = styled.form`
  margin: 32px 0 0 -15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-width: 100%;
  font-family: 'Source Sans Pro', sans-serif;

  svg {
    position: relative;
    top: 10px;
    left: 25px;
  }

  input.search {
    width: 300px;
    padding: 5px 30px;
    border: 1px solid #dedce1;
    border-radius: 5px;
    font-size: 20px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;

  input.boxcheck {
    margin: 5px 5px 0 10px;
  }
`;

export const Button = styled.button`
  svg {
    position: relative;
    left: -5px;
    top: 1px;
  }

  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 16px;
  background: #fcd7d6;
  border: 1px solid #fcc6c5;
  color: #f95e5a;
  border-radius: 5px;

  width: 120px;
  height: 30px;
`;
