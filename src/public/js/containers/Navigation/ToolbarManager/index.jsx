import React, { Component } from "react";
import Toolbar from "../../../components/Toolbar";
import AudioControls from "../../../components/AudioControls";

export default class ToolbarManager extends Component {
  render() {
    return (
      <div className="toolbar-bottom">
        {/* <Toolbar /> */}
        <AudioControls />
      </div>
    );
  }
}
