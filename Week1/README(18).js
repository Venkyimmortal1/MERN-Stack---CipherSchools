// Lecture19-Listening-To-Events-Cipherschools

import { Component } from "react";
class ToDoScreen extends Component{
    state={ 
        taskcount:0,
    }
    render(){
        return(
            <>
            <div className="screen">
            <h1 className="ui heading center">To Do List</h1>
            <button onClick={(e) => {
                this.setState({
                    ...this.state, 
                    taskcount:this.state.taskcount + 1,
                });
                console.log(this.state.taskcount);
            }}
             className="ui secondary button">Add Task</button>
             <p>The number of tasks are: {this.state.taskcount}</p>
            </div>
            </>
        )
    }
}
export default ToDoScreen;


//CSS Code

// @import url(https://cdn.jsdelivr.net/npm/semantic-ui@2.5.0/dist/semantic.min.css);
// body {
//   margin: 0;
//   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
//     'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
//     sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
// }

// code {
//   font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
//     monospace;
// }
// .center{
//   text-align: center;
// }
// .screen{
//   padding: 5vh 10%;
// }
