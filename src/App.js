import { useState, useEffect } from "react";
import NavBar from "./component/NavBar.js"
import AddContact from "./component/AddContact.js";
import Contact from "./component/ContactList.js";
import EditContact from "./component/EditContact.js";
import SearchResult from "./component/SearchResult.js";
function App() {

  const [list,setList]=useState(JSON.parse(localStorage.getItem('contacts') || '[]'))
  const [idIndex, setIdIndex]=useState(localStorage.getItem('index')||0);
  const [editMode, setEditMode]=useState(false);
  const [addMode, setAddMode]=useState(false);
  const [editIndex, setEditIndex]=useState();
  const [searchlist, setSearchList] = useState([]);
  const [alert, setAlert]=useState({status:false, name:"none",type:"none"});

  useEffect(() => {
    if(list.length===0){
      setIdIndex(0);
    }
    localStorage.setItem('contacts',JSON.stringify(list));
    localStorage.setItem('index',idIndex);
  },[list]);

  useEffect(() => {
    const handletimeout=setTimeout(()=>{setAlert({status:false})},1500);
    return ()=>clearTimeout(handletimeout);
  }, [alert]);

  const addContact=(name, mobile)=>{
    const existingContact = list.find((contact) => contact.mobile === mobile);
    if (existingContact) {
      setAddMode(false)
      setAlert({status:true,name:'Mobile number already exists',type:"danger"});
      return;
    }
    if(name.length===0||mobile.length===0){
      setAlert({status:true,name:'Mobile number and Name can not be set empty',type:"danger"});
      return;
    }
    setList([...list,{id:idIndex,name:name, mobile:mobile}])
    setIdIndex(idIndex+1);
    setAddMode(false)
    setAlert({status:true,name:"item added successfully",type:"success"});
  }

  const handleDelete=(id)=>{
    setList(list.filter((item)=>item.id!==id));
    setAlert({status:true,name:'Item deleted successfully',type:"danger"});
  }

  const handleEdit=(item)=>{
    setEditMode(true);
    setEditIndex(item.id)
  }

  return (
    <>
    <NavBar list={list} setSearchList={setSearchList} setAlert={setAlert}/>
    <SearchResult contacts={searchlist}/>
    {addMode&&<AddContact addContact={addContact}/>}
    {editMode&&<EditContact list={list} setList={setList} id={editIndex} setEditMode={setEditMode} setAlert={setAlert}/>}
    <div className='list-container'>
    <Contact contacts={list} handleEdit={handleEdit} handleDelete={handleDelete}/>
    </div>
    <div className="add-btn">
      <button onClick={()=>{setAddMode(true)}}>Add New Contacts</button>
    </div>
    {alert.status&&<p className={`alert alert-${alert.type}`}>{alert.name}</p>}
    </>
  );
}

export default App;
