import React from "react";
import ReactDom from "react-dom"
import SamuraiJsApp from "./App";


it('render without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(<SamuraiJsApp/>, div);
  ReactDom.unmountComponentAtNode(div);
});