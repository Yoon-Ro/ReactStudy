import './App.css';
import { useState } from 'react';

function Modal(){
  return (
    <div className="modal">
    <h4>Title</h4>
    <p>Date</p>
    <p>Information</p>
    </div>
  )
}

function App() {

  let [title, setTitle] = useState(['Vancouver', 'Ottawa', 'Toronto']);
  let [like, setLike] = useState(0);




  return (
    <div className="page-background">
    <div className="App">
      <nav className="black-nav">
        <h4>Yoon Ro's Blog</h4>
      </nav>

      <button>Alphabetical Order</button>
      <button onClick={()=>{
        let copy = [...title];
        copy[0] = 'upated title';
        setTitle(copy);
      }}>
          edit
        </button>
      <div className="list">
        <h4 >{ title[0] } 
          <span onClick={()=>{ setLike(like+1)}}>
            Like ❤
          </span>
          {like}
        </h4>
        <p>Published in 17 Feb</p>
      </div>
      <div className="list">
        <h4>{ title[1] }</h4>
        <p>Published in 17 Feb</p>
      </div>
      <div className="list">
        <h4>{ title[2] }</h4>
        <p>Published in 17 Feb</p>
      </div>

      <Modal></Modal>

    </div>
    </div>
  );
}

export default App;
