import logo from './logo.svg';
import React, { Component } from 'react';
class Subject extends Component{
  render (){
    return (
      <header>
      <h1>{this.props.title}</h1>
      {this.props.sub}
    </header>

    )
  }

}

class TOC extends Component {
  render (){
    return (
      <nav>
      <ol>
        <li>
          <a href="1.html">HTML</a>
        </li>
  
        <li>
          <a href="2.html">CSS</a>
        </li>
  
        <li> 
          <a href="3.html">JavaScript</a>
        </li>
      </ol>
      </nav>
    )
  }
}

class Content extends Component {
  render (){
    return (
      <article>
      <h2>{this.props.title}</h2>
      {this.props.sub}
    </article>
    )
  }
}


function App() {
  return (
    <div className="App">
    
    <Subject title="React" sub="Hello, React"></Subject>
    
    <TOC></TOC>
    <Content title="Welcome" sub="Aloha, React"></Content>
    <Content title="Repeat" sub="with same format"></Content>


    </div>
  );
}

export default App;
