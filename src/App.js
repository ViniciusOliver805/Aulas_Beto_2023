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
          id: 2,
          title: 'Título 2',
          body: 'Corpo 2'
        },
        {
          id: 3,
          title: 'Título 3',
          body: 'Corpo 3'
        },
        {
          id: 4,
          title: 'Título 4',
          body: 'Corpo 4'
        },
      ],
  }; 

componentDidMount(){      //funções ciclo de vida
 this.loadPosts()
}

loadPosts = async () => {
  const postsResponse = fetch("https://jsonplaceholder.typicode.com/posts")
  const photosResponse = fetch("https://jsonplaceholder.typicode.com/photos")

  const[posts, photos] = await Promise.all([postsResponse, photosResponse]) //captura dos dados
  
  const postsJson = await posts.json() // conversao dos dados
  const photosJson = await photos.json() // conversao dos dados

  const photosAndPosts = postsJson.map((post, index) => { //criamos um array
    return {
      ...post,
      cover: photosJson[index].url,
    }
  })

  this.setState({ posts: photosAndPosts }) //atualizar o estado da aplicação 
}

render () {

const {posts} = this.state  //isso aqui é chamado de destructor 

  return (
    <section className='container'>
      <div className="posts">
        {posts.map((post) => ( //toda vez tem a arrowFunction afee
        <div key={post.id} className='post'>
          <img src={post.cover} alt="" />
          <div className='text'>
            <h1>{post.title}</h1>
            <h3>{post.body}</h3>
          </div>         
         
        </div>

        ))}
      </div>
    </section>
    
  );
}
}

export default App;
