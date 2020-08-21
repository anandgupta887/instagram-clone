import React, { useState } from "react";
import "./App.css";
import Post from "./Post";

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
      </div>
      <h1>hello world</h1>

      <Post
        username="anand"
        caption="good morning"
        imageUrl="https://i.morioh.com/200623/6c839150.jpg"
      />
      <Post
        username="anand"
        caption="good morning"
        imageUrl="https://i.morioh.com/200623/6c839150.jpg"
      />
      <Post
        username="anand"
        caption="good morning"
        imageUrl="https://i.morioh.com/200623/6c839150.jpg"
      />
    </div>
  );
}

export default App;
