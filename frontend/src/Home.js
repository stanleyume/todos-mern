import React, {Component} from 'react';
import Layout from './Layout';

class Home extends Component{
  constructor(props){
    super(props);
    this.state = {
      todos:['one', 'two', 'three'],
    }
    // this.new_todo = React.createRef();
  };

  add = ()=>{
    this.state.todos.push(this.refs.new_todo.value); // returns the new length of the array
    this.setState({todos: this.state.todos});
    console.log(this.state.todos);
  };

  delete = (i)=>{
    var todos = this.state.todos;
    var arr = todos.splice(i, 1);
    this.setState({todos: todos});
    console.log(this.state.todos);
  };

  render(){
    return (<Layout>
            <textarea ref="new_todo"></textarea>
            <button onClick={this.add}>Save</button>
            <hr/>
          { this.state.todos.map((val, i)=>{
            return (<div key={i} index={i}><div>{val}</div>
            <button>Edit</button><button onClick={()=>{this.delete(i)}}>Delete</button>
            <hr/></div>)
          }) }

      </Layout>);
  }
}

export default Home;
