
import { useContext, useEffect ,useState} from "react";
import {FilterContext} from './filter-context';

const arr=[
  {columnA:"test1",columnB:"test2",columnC:"test3"},
  {columnA:"test2",columnB:"test2",columnC:"test3"},
  {columnA:"test3",columnB:"test2",columnC:"test3"},
  {columnA:"test4",columnB:"test2",columnC:"test3"}
  ]
const arr2=[
  {columnA:"test1",columnB:"test2",columnC:"test3",columnD:"test3",columnE:"test3"},
  {columnA:"test2",columnB:"test2",columnC:"test3",columnD:"test3",columnE:"test3"},
  {columnA:"test3",columnB:"test2",columnC:"test3",columnD:"test3",columnE:"test3"},
  {columnA:"test4",columnB:"test2",columnC:"test3",columnD:"test3",columnE:"test3"}
  ]
function Table() {
  const [filter,,boxfilter,,isTableA] = useContext(FilterContext);

  const [filterdArr, setFilterdArr] =useState(arr)
  useEffect( ()=>{
    if(isTableA) setFilterdArr(arr)
    else setFilterdArr(arr2)

    if(filter.filterA!=="" && filter.filterA )  setFilterdArr( (prev) => prev.filter( data=> data.columnA.includes(filter.filterA)))
    if(filter.filterB!=="" && filter.filterB)  setFilterdArr( (prev) => prev.filter(data=>data.columnB.includes(filter.filterB)))
    if(filter.filterC!==""&& filter.filterC)  setFilterdArr( (prev) => prev.filter(data=>data.columnC.includes(filter.filterC)))
    if(!isTableA){
      if(filter.filterD!==""&&filter.filterD)  setFilterdArr( (prev) => prev.filter(data=>data.columnD.includes(filter.filterD)))
      if(filter.filterE!==""&&filter.filterE)  setFilterdArr( (prev) => prev.filter(data=>data.columnE.includes(filter.filterE)))
    }
  },[filter,isTableA])


  return (
    <table className="table table-striped">
  <thead>
    <tr>
     { (boxfilter.filterA ||  boxfilter.filterA==null) && <th scope="col">#</th> }
     { (boxfilter.filterB ||  boxfilter.filterB==null) &&  <th scope="col">First</th> }
     { (boxfilter.filterC ||  boxfilter?.filterC==null) && <th scope="col">Last</th> }
     { (boxfilter.filterD ||  boxfilter.filterD==null) && !isTableA&& <th scope="col">columnD</th> }
     { (boxfilter.filterE ||  boxfilter.filterE==null) && !isTableA && <th scope="col">columnE</th> }
    </tr>
  </thead>
  <tbody>
    {filterdArr.map(t=> (
      <tr key={t.columnA}>
      { (boxfilter.filterA ||  boxfilter.filterA==null) &&  <th scope="row">{t.columnA}</th>}
      { (boxfilter.filterB ||  boxfilter.filterB==null) &&  <td>{t.columnB}</td> }
      { (boxfilter.filterC ||  boxfilter.filterC==null) &&  <td>{t.columnC}</td> }
      { (boxfilter.filterD ||  boxfilter.filterD==null) && !isTableA &&  <td>{t.columnD}</td> }
      {( boxfilter.filterE ||  boxfilter.filterE==null) && !isTableA &&  <td>{t.columnE}</td> }

    </tr>
    ) )}
  </tbody>
</table>
  );
}

export default Table;
