import React, { Component } from "react";
import doggo from "../res/doggo.jpg";

class CContents extends Component {
  constructor() {
    super();
    this.state = {
      msg: "Witaj uzytkowniku. Kliknij przycisk aby poznac wiadomosc",
    };
  }
  changeMsg() {
    this.setState({
      msg: "Wlasnie jestes uczestnikiem kursu React, gratulacje!",
    });
    console.log("Przycisk zostal wcisniety");
  }
  render() {
    return (
      <div>
        <img src={doggo} />
        <h1>{this.state.msg}</h1>
        <button onClick={() => this.changeMsg()}>
          Kliknij, aby pokazac ukryta wiadomosc.
        </button>
      </div>
    );
  }
}

export default CContents;
