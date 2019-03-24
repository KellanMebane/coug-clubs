import React from "react";
import {
  Container,
  VBox,
  BannerHeader,
} from "@ombiel/aek-lib";
import ClubList from "./clubList";
import Interests from "./Interests";
import NavBar from "./NavBar";


export default class Screen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tags: [],
      tab: 0,
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
            tags: this.tags,
            tab: 1
          });

          console.log(this.state.tags);
        }}
      >
      </Interests>
    );
  }

  showTab(tab) {
    if (tab === 0) {
      return (
        <Interests
          onFinalize={(data) => {
            this.state.tags = data;
            this.setState({
              tags: this.state.tags,
              tab: 1
            });

            console.log(this.state.tags);
          }}
        >
        </Interests>
      );
    }

    if (tab === 1) {
      console.log(this.state.tags);
      return (
        <ClubList tags={this.state.tags}></ClubList>
      );
    }

    return (
      <div>hello</div>
    );
  }

  render() {

    var x = this.showTab(this.state.tab); //this.swap(this.state.swap);

    return (
      <Container>
        <VBox style={{ maxHeight: 400, overflow: 'auto' }}>
          <NavBar onCallBack={(data) => { this.setState({ tab: data }); }}></NavBar>
          {x}
        </VBox>
      </Container>
    );
  }
}
