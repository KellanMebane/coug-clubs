import React from "react";
import {
  Container,
  BasicSegment,
  Listview,
  ListviewItem as Item
} from "@ombiel/aek-lib";
import Club from "./clubs";


export default class ClubList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clubs: [], // local list of clubs
    };

    this.initClubs(); // this is just to fill the list of clubs, realistically would come from a database
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

  // render a club based on the data given
  renderClub(data) {
    if (this.props.tags) { // checks if tag lists exists
      if (this.props.tags.length > 0) { // if it's empty, we'll display all clubs
        var checked = false;
        for (var i = 0; i < this.props.tags.length; i += 1) { // if any of the tags matches the club's tags, render the club.
          if (data.tags.indexOf(this.props.tags[i]) !== -1) {
            checked = true;
            break;
          }
        }

        if (checked) { // render the club
          return (
            <Item thumbnail={data.picture} thumbContained thumbSize="big">
              <h4>{data.name}</h4>
              <p>{data.bio}</p>
            </Item>
          );
        }
        return (null); // don't render the club
      }
    }

    // in this case we render all clubs
    return (
      <Item thumbnail={data.picture} thumbContained thumbSize="big">
        <h4>{data.name}</h4>
        <p>{data.bio}</p>
      </Item>
    );
  }

  render() {
    var renderedListOfClubs = this.state.clubs.map((data) => this.renderClub(data));

    return (
      <Container>
        <BasicSegment>
          <Listview style={{ maxHeight: 400, overflow: 'auto' }}>
            {renderedListOfClubs}
          </Listview>
        </BasicSegment>
      </Container>
    );
  }
}
