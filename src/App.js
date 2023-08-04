import './App.css';
import { Component} from 'react';

class App extends Component {
    state = {
    posts: [
      {
        id: 1,
        title: 'Título 1',
        body: 'Corpo 1'
      },
      {
        id: 1,
        title: 'Título 2',
        body: 'Corpo 2'
      },
      {
        id: 1,
        title: 'Título 3',
        body: 'Corpo 3'
      },
      {
        id: 1,
        title: 'Título 4',
        body: 'Corpo 4'
      }
    ]
  } 



render () {

const {posts} = this.state  //isso aqui é chamado de destructor 

  return (
    <div className="App">
      {posts.map((post) => ( //toda vez tem a arrowFunction afee
      <div key={post.id}>
        <h1>{post.title}</h1>
        <h3>{post.body}</h3>
      </div>

      ))}
    </div>

    
  );
}
}

export default App;
