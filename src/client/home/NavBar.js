import React from "react";
import { NavMenu, NavMenuItem, Divider } from "@ombiel/aek-lib";

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: -1 };
  }

  toggleClass(index) {
    this.setState({ activeIndex: index });
    this.feedBack(index);
  }

  feedBack(index) {
    this.props.onCallBack(index);
  }

  render() {

    return (
      <div>
        <Divider />
        <NavMenu theme="alt" inverted>
          <NavMenuItem className={this.state.activeIndex == 0 ? 'active' : null} onClick={this.toggleClass.bind(this, 0)} icon="marker" href="#" badge="1">Interest</NavMenuItem>
          <NavMenuItem className={this.state.activeIndex == 1 ? 'active' : null} onClick={this.toggleClass.bind(this, 1)} icon="rocket" href="#" badge="2">Clubs</NavMenuItem>
          <NavMenuItem className={this.state.activeIndex == 2 ? 'active' : null} onClick={this.toggleClass.bind(this, 2)} icon="calendar" href="#" badge="3">Calendar</NavMenuItem>
        </NavMenu>
      </div>
    );

  }

}