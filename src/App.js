import './App.css';
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import Comments from "./components/Comments/Comments";

function App() {
  return (<>
        <div className={'up'}>
          <div className={'userStyle'}>
            <Users/>
            <div className={'postStyle'}>
              <Posts/>
            </div>
          </div>
        </div>
        <div className={'commentStyle'}>
          <Comments/>
        </div>
      </>
  );
}

export default App;
