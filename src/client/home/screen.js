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
      tags: [], // parent and child hold onto this
      tab: 0, // selected tab
    };
  }

  // conditionally renders the body as 1 of 3 components
  showTab(tab) {
    // Interests Tab
    if (tab === 0) {
      return (
        <Interests
          tags={this.state.tags}

          onAdded={(data) => {
            var index = this.state.tags.indexOf(data); // find index of the item in the current list
            if (index !== -1) // item already exists
              this.state.tags.splice(index, 1); // remove it (deselect)
            else
              this.state.tags.push(data); // insert it
            this.setState({ // save changes
              tags: this.state.tags
            });
          }}

          onFinalize={() => {
            this.setState({
              tab: 1
            });
          }}

          onClear={() => { this.setState({ tags: [] }) }}
        >
        </Interests>
      );
    }

    // ClubList Tab
    if (tab === 1) {
      console.log(this.state.tags);
      return (
        <ClubList tags={this.state.tags}></ClubList>
      );
    }

    // Calendar Tab
    return (
      <div>hello</div>
    );
  }

  render() {

    var tabToShow = this.showTab(this.state.tab); // Decides which tabs will be shown

    return (
      <Container>
        <VBox>
          <NavBar onCallBack={(data) => { this.setState({ tab: data }); }}></NavBar>
          {tabToShow}
        </VBox>
      </Container>
    );
  }
}
