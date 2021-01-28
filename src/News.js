import React from "react";
import { DragSource } from "react-dnd";
import styled from "styled-components";

const Container = styled.div`
  align-self: center;
  box-shadow: inset 0 0 2rem rgba(0, 0, 100, 0.3);
  margin: 0.5rem;
  padding: 0.5rem;
  &:hover {
    background-color: ${p =>
      p.isDragging ? "rgba(100, 0, 0, 0.5)" : "rgba(0, 0, 100, 0.5)"};
  }
`;

const enhance = DragSource(
  "NEWS_ITEM",
  {
    beginDrag: props => props
  },
  (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  })
);
class News extends React.PureComponent {
  render() {
    const { title, isDragging, connectDragSource } = this.props;
    return connectDragSource(
      <div style={{ display: "flex" }}>
        <Container isDragging={isDragging}>{title}</Container>
      </div>
    );
  }
}

export default enhance(News);
