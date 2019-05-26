import React from "react";
import "./App.css";
import Main from "./component/Main";
import Sidebar from "./component/Sidebar";

class App extends React.Component {
  render() {
    let urlList = [
      {
        name: `Github`,
        url: `https://github.com/naushad-madakiya`,
        color: `white`
      },
      {
        name: `Instagram`,
        url: `https://instagram.com/iamnaush`,
        color: `white`
      },
      {
        name: `Twitter`,
        url: `https://twitter.com/naushadmadakiya`,
        color: `white`
      }
    ];

    return (
      <div className="App">
        <Sidebar urlList={urlList} />
        <Main />
      </div>
    );
  }
}

export default App;
