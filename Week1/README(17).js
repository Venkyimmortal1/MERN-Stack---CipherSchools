# Lecture18-Adding-The-First-Component-Cipherschools
//App.js

import ToDoScreen from "./Screens/ToDoScreen";
import { Component } from "react";
class App extends Component {
render(){
  return(
    <ToDoScreen/>
  )
}
}
export default App;

//ToDoScreen.js

import { Component } from "react";
class ToDoScreen extends Component{
    render(){
        return(
            <h1 className="ui heading center">To Do List</h1>
        )
    }
}
export default ToDoScreen;

//Index.css
@import url(https://cdn.jsdelivr.net/npm/semantic-ui@2.5.0/dist/semantic.min.css);
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
.center{
  text-align: center;
}


