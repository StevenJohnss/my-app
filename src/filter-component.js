import { useState, useContext, useEffect } from "react";

import {FilterContext} from './filter-context';
function FilterComponent(props) {
  const [filter, setfilter,boxfilter,setBoxfilter,isTableA,setIsTableA] = useContext(FilterContext);
  const [myfilter,setMyFilter]=useState({})
  const [myboxfilter,setMyBoxfilter]=useState({})
  const [saveLocally,setSaveLocally]=useState(false)

  useEffect(()=>{

    if(localStorage.getItem('filter')){
     let filterObj = JSON.parse(localStorage.getItem('filter'))
     console.log(filterObj)
     setfilter(filterObj)
     setMyFilter(filterObj)
     setSaveLocally(true)
     if(filterObj?.filterD)setIsTableA(false)
    }

    if(isTableA){
      setMyFilter({filterA:"",filterB:"",filterC:"",})
      setMyBoxfilter({filterA:true,filterB:true,filterC:true,})
    }else{
      setMyFilter({filterA:"",filterB:"",filterC:"",filterD:"",filterE:""})
      setMyBoxfilter({filterA:true,filterB:true,filterC:true,filterD:true,filterE:true})
    }
    
  },[setfilter,setIsTableA, isTableA])

 const onSave =(event)=>{
  console.log(myfilter,filter,myboxfilter,boxfilter)
  if(event.target.title==='box'){
    setBoxfilter({...myboxfilter})
  }else{
    if(saveLocally){
      localStorage.setItem("filter",JSON.stringify(myfilter))
      setfilter({...myfilter})
    }else{
      localStorage.removeItem("filter")
      setfilter({...myfilter})
    }
    
  }
 }

  return (
   <>
    <button type="button" className="btn btn-primary mx-2 " data-toggle="modal" data-target="#exampleModal">
      Launch filter modal
    </button>
    
  
    <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
      
  <div className="form-group">
   
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="filterA" value={myfilter.filterA} onChange={(e)=> setMyFilter({...myfilter,filterA: e.target.value })}/>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="filterB" value={myfilter.filterB} onChange={(e)=> setMyFilter({...myfilter,filterB: e.target.value })}/>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="filterC" value={myfilter.filterC} onChange={(e)=> setMyFilter({...myfilter,filterC: e.target.value })}/>
   {!isTableA && 
   <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="filterD" value={myfilter.filterD} onChange={(e)=> setMyFilter({...myfilter,filterD: e.target.value })}/>
   }

   {!isTableA &&<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="filterE" value={myfilter.filterE} onChange={(e)=> setMyFilter({...myfilter,filterE: e.target.value })}/>}
  </div>
  
  <div className="form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck0"
    checked={saveLocally} onChange={()=> setSaveLocally(!saveLocally)} />
    <label className="form-check-label" htmlFor="exampleCheck0">Save for later</label>
  </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={onSave}>Save changes</button>
          </div>
        </div>
      </div>
    </div>

    &nbsp;
    <>
    <button type="button" className="btn btn-primary mx-2 my-2" data-toggle="modal" data-target="#exampleModal2">
      Launch Check box modal 
    </button>
    
  
    <div className="modal fade" id="exampleModal2" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
      
  <div className="form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" checked={myboxfilter.filterA} onChange={(e)=> setMyBoxfilter({...myboxfilter,filterA: !myboxfilter.filterA })}  />
    <label className="form-check-label" htmlFor="exampleCheck1">column A</label>
  </div>

  <div className="form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck2" checked={myboxfilter.filterB} onChange={(e)=> setMyBoxfilter({...myboxfilter,filterB: !myboxfilter.filterB })}  />
    <label className="form-check-label" htmlFor="exampleCheck2">column B</label>
  </div>
  <div className="form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck3" checked={myboxfilter.filterC} onChange={(e)=> setMyBoxfilter({...myboxfilter,filterC: !myboxfilter.filterC })}  />
    <label className="form-check-label" htmlFor="exampleCheck3">column C</label>
  </div>

  {!isTableA &&
  <div className="form-check">
  <input type="checkbox" className="form-check-input" id="exampleCheck4" checked={myboxfilter.filterD} onChange={(e)=> setMyBoxfilter({...myboxfilter,filterD: !myboxfilter.filterD })}  />
  <label className="form-check-label" htmlFor="exampleCheck4">column D</label>
  </div>
  }

  {!isTableA &&
  <div className="form-check">
  <input type="checkbox" className="form-check-input" id="exampleCheck5" checked={myboxfilter.filterE} onChange={(e)=> setMyBoxfilter({...myboxfilter,filterE: !myboxfilter.filterE })}  />
  <label className="form-check-label" htmlFor="exampleCheck5">column E</label>
  </div>
  }
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" data-dismiss="modal" title="box" className="btn btn-primary" onClick={onSave}>Save changes</button>
          </div>
        </div>
      </div>
    </div>
    </>
    </>

  );
}

export default FilterComponent;
