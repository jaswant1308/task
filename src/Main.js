import React from "react";
import { render } from "react-dom";
import styled from "styled-components";
import NewsAccumulator from "./NewsAccumulator";
import List from "./List";

const Container = styled.div`
  display: flex;
`;

const initialList = [
  { id: 1, title: "Data 1", added: false },
  { id: 2, title: "Data 2", added: false },
  { id: 3, title: "Data 3", added: false },
  { id: 4, title: "Data 4", added: false },
  { id: 5, title: "Data 5", added: false },
  { id: 6, title: "Data 6", added: false },
  { id: 7, title: "Data 7", added: false }
];

class Main extends React.Component {
  state = {
    list: initialList,
    addedList: []
  };

  handleDropNews = id => {
    this.setState(state => ({
      addedList: state.addedList.concat([
        state.list.find(news => news.id === id)
      ])
    }));
  };

  render() {
    const { list, addedList } = this.state;
    return (
      <>
      <Container>
        <NewsAccumulator
          list={addedList}
          setNewsToAccumulator={this.handleDropNews}
        />
        <List list={list} />
      </Container>
      </>
    );
  }
}

export default Main;
