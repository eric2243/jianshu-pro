import React from "react";
import ReactDOM from "react-dom";
import JianshuIndex from "./JianshuIndex/JianshuIndex";

ReactDOM.render( <JianshuIndex/>, document.getElementById( "jianshu" ) );
if( module.hot ) {
	module.hot.accept();
};