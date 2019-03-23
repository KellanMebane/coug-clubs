import React from "react";
import Interests from "./Interests";

import {
  Container,
  VBox,
  BannerHeader,
  BasicSegment,
  Listview,
  ListviewItem as Item
} from "@ombiel/aek-lib";


export default class Screen extends React.Component {

  componentDidMount() {

  }

  render() {

    return (
      <Container>
        <Interests/>
      </Container>
    );

  }

}
