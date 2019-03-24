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
  constructor(props) {
    super(props);

    this.state = {
      clubs: [],
    };

    this.initClubs();
  }

  componentWillMount() {

  }

  componentDidMount() {

  }

  initClubs() {
    var localclubs = [];
    for (var i = 0; i < 5; i += 1) {
      localclubs.push(new Club('Baseball Club', ['Sports', 'baseball', 'outdoors'], [], [], 'A club for fans of baseball!', 'https://securea.mlb.com/assets/images/7/9/8/263250798/cuts/770x308/cut.jpg'));
      localclubs.push(new Club('Football Club', ['Sports', 'football', 'outdoors', 'cougars'], [], [], 'A club for fans of football!', 'https://dailyevergreen.com/wp-content/uploads/2019/03/web-44-900x516.jpg'));
      localclubs.push(new Club('Anime Club', ['Anime', 'culture', 'language', 'media', 'japanese'], [], [], 'A club for fans of anime! We meet every Monday to watch the newest episode of Mob Psycho 100.', 'https://uploads.thealternativepress.com/uploads/photos/best_1b92506b3a679e890ff7_anime_club.jpg'));
    }

    this.state.clubs = localclubs;
  }

  renderItem(data) {

    if (this.props.tags) {
      if (this.props.tags.length > 0) {
        var checked = false;
        for (var i = 0; i < this.props.tags.length; i += 1) {
          if (data.tags.indexOf(this.props.tags[i]) !== -1) {
            checked = true;
            break;
          }
        }

        if (checked) {
          return (
            <Item thumbnail={data.picture} thumbContained thumbSize="big">
              <h4>{data.name}</h4>
              <p>{data.bio}</p>
            </Item>
          );
        }
        return (
          <div></div>
        );
      }
    }

    return (
      <Item thumbnail={data.picture} thumbContained thumbSize="big">
        <h4>{data.name}</h4>
        <p>{data.bio}</p>
      </Item>
    );
  }

  render() {
    var x = this.state.clubs.map((data) => this.renderItem(data));

    return (
      <Container>
        <BasicSegment>
          <Listview style={{ maxHeight: 400, overflow: 'auto' }}>
            {x}
          </Listview>
        </BasicSegment>
      </Container>
    );
  }
}
