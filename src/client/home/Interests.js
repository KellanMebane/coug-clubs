import React from "react";
import {
  Listview,
  Button
} from "@ombiel/aek-lib";

export default class Interests extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: Array.from(this.props.tags), // tag list comes from parent, and get's modified here. (IF WE DON'T USE from(), IT'S ACTUALLY A SHALLOW COPY)
      masterTagList: [ // keeps the master list of tags (SHOULD COME FROM AN API OF SORTS)
        "Culture",
        "Language",
        "Cougs",
        "Sports",
        "Anime",
        "Coloring",
        "3D printing",
        "Acrobatics",
        "Acting",
        "Animation",
        "Baking",
        "Collecting",
        "Computer programming",
        "Cooking",
        "Cosplaying",
        "Couponing",
        "Creative writing",
        "Crocheting",
        "Cross-stitch",
        "Crossword puzzles",
        "Cryptography",
        "Dance",
        "Digital Arts",
        "Do it yourself",
        "Drama",
        "Drawing",
        "Electronics",
        "Glass Blowing",
        "Machines",
        "Herb Keeping",
        "Homebrewing",
        "Magic",
      ],
    };
  }

  // add a tag to the list of selected tags
  addToTags(tagToBeAdded) {
    var index = this.state.tags.indexOf(tagToBeAdded); // find index of the item in the current list
    if (index !== -1) // item already exists
      this.state.tags.splice(index, 1); // remove it (deselect)
    else
      this.state.tags.push(tagToBeAdded); // insert it
    this.setState({ tags: this.state.tags }); // update the ui
    this.props.onAdded(tagToBeAdded); // pass back the selected item
  }

  // Tells parent to switch to Clubs tab
  handleFinalize() {
    this.props.onFinalize();
  }

  // Clears tags in both here and in parent
  handleClear() {
    this.setState({ tags: [] });
    this.props.onClear();
  }

  // take tagData and return in HTML
  renderTags(tagData) {
    var selected = this.state.tags.indexOf(tagData) === -1 ? false : true; // find if selected

    var styling = selected ? { backgroundColor: '#ff9994', color: '#000000' } : null; // style if selected

    return (
      <Button style={styling} onClick={() => this.addToTags(tagData)} iconBox circular>{tagData}</Button>
    );
  }

  render() {
    var renderedListOfTags = this.state.masterTagList.map((data) => this.renderTags(data)); // how to render lists

    return (
      <div style={{ margin: "50px 0" }}>
        {renderedListOfTags}
        < center >
          <Button onClick={() => { this.handleClear(); }} variation="negative" iconBox circular>Clear</Button>
          <Button onClick={() => { this.handleFinalize(); }} variation="positive" iconBox circular>Finalize</Button>
        </center >
      </div >
    );
  }
}
