import { useState, createContext } from "react";

export const FilterContext = createContext();

 export function FilterContextComp(props) {
  let isTaleA_val= window.location.pathname==="/"
  const [isTableA,setIsTableA]=useState(isTaleA_val)
  const [filter, setfilter] = useState({});
  const [boxfilter, setBoxfilter] = useState({});

  return (
    <FilterContext.Provider value={[filter, setfilter,boxfilter, setBoxfilter ,isTableA, setIsTableA]}>
     {props.children}
    </FilterContext.Provider>
  );
}