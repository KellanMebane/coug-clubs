import React from "react";
import NavBar from "./NavBar";

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
  constructor(props){
    super(props);
    this.state = {test: -1}
  }

  componentWillMount() {

  }

  componentDidMount() {

  }
  
  render() {

    return (
      <Container>
        <NavBar onCallBack={(data)=>{this.setState({test: data}); console.log(data)}}/>
      </Container>
    );
  }
}
