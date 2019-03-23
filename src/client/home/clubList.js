import React from "react";
import {
  Container,
  Button,
  BasicSegment,
  Listview,
  ListviewItem as Item
} from "@ombiel/aek-lib";
import Club from "./clubs";


export default class ClubList extends React.Component {
  constructor() {
    super();

    this.state = {
      clubs: [],
      tags: ['sports', 'outdoors'],
    };

    this.initClubs();
  }

  componentWillMount() {

  }

  componentDidMount() {

  }

  initClubs() {
    var localclubs = [];
    for (var i = 0; i < 5; i++) {
      localclubs.push(new Club('Baseball Club', ['sports', 'baseball', 'outdoors'], [], [], 'A club for fans of baseball!', 'https://securea.mlb.com/assets/images/7/9/8/263250798/cuts/770x308/cut.jpg'));
      localclubs.push(new Club('Football Club', ['sports', 'football', 'outdoors', 'cougars'], [], [], 'A club for fans of football!', 'https://dailyevergreen.com/wp-content/uploads/2019/03/web-44-900x516.jpg'));
      localclubs.push(new Club('Anime Club', ['culture', 'language', 'media', 'japanese'], [], [], 'A club for fans of anime! We meet every Monday to watch the newest episode of Mob Psycho 100.', 'https://uploads.thealternativepress.com/uploads/photos/best_1b92506b3a679e890ff7_anime_club.jpg'));
    }

    this.state.clubs = localclubs;
  }

  renderItem(data) {
    return (
      <Item thumbnail={data.picture} thumbContained thumbSize="big">
        <h4>{data.name}</h4>
        <p>{data.bio}</p>
      </Item>
    );
  }

  renderTags(data) {
    return (
      <Button>{data}</Button>
    );
  }



  render() {
    var x = this.state.clubs.map((data) => this.renderItem(data));
    var y = this.state.tags.map((data) => this.renderTags(data));

    return (
      <Container>
        <BasicSegment>
          <Listview>
            {y}
          </Listview>

          <Listview style={{ maxHeight: 400, overflow: 'auto' }}>
            {x}
          </Listview>
        </BasicSegment>
      </Container>
    );
  }
}
