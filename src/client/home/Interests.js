import React from "react";
import {
  Container,
  VBox,
  BannerHeader,
  BasicSegment,
  Listview,
  ListviewItem as Item,
  Button
} from "@ombiel/aek-lib";

export default class Interests extends React.Component {
    constructor(props) {
      super(props);
      this.state = {done: 0, tags: [], };
    }

    addToTags(x){
      this.state.tags.push(x)
      console.log(this.state.tags)
    }

  
    render() {
      
      return (
        <Listview>
          <div style={{margin:"50px 0"}}>
            <Button  onClick={() => this.addToTags("culture")} iconBox circular>Culture</Button>
            <Button  onClick={() => this.addToTags("Language")} iconBox circular>Language</Button>
            <Button  onClick={() => this.addToTags("Cougs")} iconBox circular>Cougs</Button>
            <Button  onClick={() => this.addToTags("Sports")} iconBox circular>Sports</Button>
            <Button  onClick={() => this.addToTags("Anime")} iconBox circular>Anime</Button>
            <Button  onClick={() => this.addToTags("Coloring")} iconBox circular>Coloring</Button>
            <Button  onClick={() => this.addToTags("3D printing")} iconBox circular>3D printing</Button>
            <Button  onClick={() => this.addToTags("Acrobatics")} iconBox circular>Acrobatics</Button>
            <Button  onClick={() => this.addToTags("Acting")} iconBox circular>Acting</Button>
            <Button  onClick={() => this.addToTags("Animation")} iconBox circular>Animation</Button>
            <Button onClick={() => this.addToTags("Baking")} iconBox circular>Baking</Button>
            <Button  onClick={() => this.addToTags("Collecting")} iconBox circular>Collecting</Button>
            <Button  onClick={() => this.addToTags("Coloring")} iconBox circular>Coloring</Button>
            <Button  onClick={() => this.addToTags("Computer programming")} iconBox circular>Computer programming</Button>
            <Button  onClick={() => this.addToTags("Cooking")} iconBox circular>Cooking</Button>
            <Button onClick={() => this.addToTags("Cosplaying")} iconBox circular>Cosplaying</Button>
            <Button  onClick={() => this.addToTags("Couponing")} iconBox circular>Couponing</Button>
            <Button  onClick={() => this.addToTags("Creative writing")} iconBox circular>Creative writing</Button>
            <Button  onClick={() => this.addToTags("Crocheting")} iconBox circular>Crocheting</Button>
            <Button  onClick={() => this.addToTags("Cross-stitch")} iconBox circular>Cross-stitch</Button>
            <Button onClick={() => this.addToTags("Crossword puzzles")} iconBox circular>Crossword puzzles</Button>
            <Button  onClick={() => this.addToTags("Cryptography")} iconBox circular>Cryptography</Button>
            <Button onClick={() => this.addToTags("Dance")} iconBox circular>Dance</Button>
            <Button  onClick={() => this.addToTags("Digital Arts")} iconBox circular>Digital Arts</Button>
            <Button  onClick={() => this.addToTags("Do it yourself")} iconBox circular>Do it yourself</Button>
            <Button  onClick={() => this.addToTags("Drama")} iconBox circular>Drama</Button>
            <Button  onClick={() => this.addToTags("Drawing")} iconBox circular>Drawing</Button>
            <Button onClick={() => this.addToTags("Electronics")} iconBox circular>Electronics</Button>
            <Button  onClick={() => this.addToTags("Glass Blowing")} iconBox circular>Glass Blowing</Button>
            <Button  onClick={() => this.addToTags("Machines")} iconBox circular>Machines</Button>
            <Button  onClick={() => this.addToTags("Herb Keeping")} iconBox circular>Herb Keeping</Button>
            <Button  onClick={() => this.addToTags("Homebrewing")} iconBox circular>Homebrewing</Button>
            <Button onClick={() => this.addToTags("Magic")} iconBox circular>Magic</Button>
            
            <center>
              <Button onClick={() => this.state.done = 1} variation="positive" iconBox circular>Finalize</Button>
            </center>
          </div>
        </Listview>
      );
  
    }
  
  }