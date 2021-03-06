import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Post from "./component/post/post";
import Postline from "./component/postLine/postLine";
import ToolBar from './component/toolbar/toolbar';
import Click from "./component/button/button";
import ShowProfile from "./component/profile/profile";

ReactDOM.render(
  <React.StrictMode>
    <ToolBar appTitle="POSTNET" />
    <Postline></Postline>
    {/* <Click/> */}
    {/* <ShowProfile imgProfileURL='URL for Image Profile' profileName='PIIIEEERRREE' profileID={2} profileMessage='ça se prononce gui' usrMood="Tout le monde s'appelle Pierre ici ?"/> */}
    {/* <ShowPost imgProfileURL='lol' profileName='lol' profileID={1} postTitle='lol' postMessage='lol' /> */}
  </React.StrictMode>,
  document.getElementById('root')
);
