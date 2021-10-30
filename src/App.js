import logo from './logo.svg';
import './App.css';
import AppLogo from './components/AppLogo';
import Body from './components/Body';
import DocumentationLink from './components/DocumentationLink';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppLogo logo={logo}/>
        
        <Body/>

        <DocumentationLink/>
      </header>
    </div>
  );
}

export default App;
