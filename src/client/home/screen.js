import React from "react";
import Interests from "./Interests";

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
<<<<<<< HEAD
        <Interests/>
=======
        <VBox>
          <BannerHeader theme="alt" key="header" data-flex={0}>Home</BannerHeader>
          <ClubList></ClubList>
        </VBox>
>>>>>>> 109debb257a551ce656854219147c6df30a610bf
      </Container>
    );
  }
}
