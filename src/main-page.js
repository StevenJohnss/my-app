import Table from './Table'
import {FilterContext} from './filter-context';
import { useContext} from "react";

import {
  Link
} from "react-router-dom";

function MainPage() {
  // const filter = useContext(FilterContext);
  const [,,,,isTableA , setIsTableA] = useContext(FilterContext);
  return (
    <>
  

    <Table/>
    <Link 
      to={isTableA?"/TableB":"/"}><button className='btn btn-info ml-2'
      onClick={()=>setIsTableA(!isTableA)}>
      Go To {isTableA? "TableB":"TableA"}</button>
    </Link>
    
    
    
    </>
  );
}

export default MainPage;
