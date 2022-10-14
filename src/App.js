import {FilterContextComp} from './filter-context';
import FilterComponent from './filter-component';
import MainPage from"./main-page"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  // const filter = useContext(FilterContext);
  return (
    <>
    <Router >
    <FilterContextComp>
    <Routes>
    <Route exact path="/" element={<FilterComponent name={"test1"}/>}/>
    <Route exact path="/TableB" element={<FilterComponent name={"test2"}/>}/>
    </Routes>
    <MainPage/>
    </FilterContextComp>
    </Router>
    
    
    </>
  );
}

export default App;
