# Lecture16-Understanding-JSX-Cipherschools
// Discussed about jsx and how jsx allows user to write html code inside a JS file/code, how code can only be written as one compartment.
// JSX:
// 1.looks and behaves LIKE HTML.
// 2.contains:
// a.HTML tags.
// b.React Components
// 3.Allows us to write JS code inside.

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
