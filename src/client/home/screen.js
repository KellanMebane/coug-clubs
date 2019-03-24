import React from "react";
import {
  Container,
  VBox,
  BannerHeader,
} from "@ombiel/aek-lib";
import ClubList from "./clubList";
import Interests from "./Interests";


export default class Screen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tags: [],
      swap: false,
    };
  }

  componentWillMount() {

  }

  componentDidMount() {

  }

  swap(boo) {
    if (boo) {
      return (
        <ClubList tags={this.state.tags}></ClubList>
      );
    }
    return (
      <Interests
        onFinalize={(data) => {
          this.state.tags = data;
          this.setState({
            tags: this.tags
          });

          console.log(this.state.tags);
        }}
      >
      </Interests>
    );
  }

  render() {

    //var x = this.swap(this.state.swap);

    return (
      <Container>
        <VBox style={{ maxHeight: 400, overflow: 'auto' }}>
          <BannerHeader theme="alt" key="header" data-flex={0}>Home</BannerHeader>
          {/*{x}*/}
        </VBox>
      </Container>
    );
  }
}
