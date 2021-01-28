import React from "react";
import styled from "styled-components";
import News from "./News";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0;
  height: 70vh;
  box-shadow: 0 0 0.75rem 0.1rem rgba(0, 0, 100, 0.5);
  margin: 1rem;
  padding: 1rem;
`;

class List extends React.Component {
  render() {
    const { list } = this.props;
    return (
      <Container>
        <h2>List</h2>
        {list.map(({ id, title }) => <News key={id} id={id} title={title} />)}
      </Container>
    );
  }
}

export default List;
