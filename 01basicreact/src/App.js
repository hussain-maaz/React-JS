import Worldcup from "./Worldcup";
import Header from "./component/Header";
import Cheader  from "./component/Cheader"; 
import Channel from "./component/Channel";

function App() {
  return (
    <>
    <h1>its mi 1st React-Web-App</h1>
     <Header name="deCock" player="wicket">
      <p>this is the african trump-card team</p>
     </Header>
     <Header name="miller" player="finisher"></Header>
     <Header name="rabada" player="bowler"></Header>
     <Cheader name = "williamson" player="BatsMen"></Cheader>
     <Channel></Channel>
    </>
  );
}

export default App;
