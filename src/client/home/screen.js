import React from "react";
import {
  Container,
  Button,
  VBox,
  BannerHeader,
  BasicSegment,
  Listview,
  ListviewItem as Item
} from "@ombiel/aek-lib";
import Club from "./clubs";
import ClubList from "./clubList";


export default class Screen extends React.Component {

  componentWillMount() {

  }

  componentDidMount() {

  }

  render() {

    return (
      <Container>
        <VBox>
          <BannerHeader theme="alt" key="header" data-flex={0}>Home</BannerHeader>
          <ClubList></ClubList>
        </VBox>
      </Container>
    );
  }
}
