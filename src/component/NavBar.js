import { useEffect, useState } from "react"

const NavBar=({list, setSearchList, setAlert})=>{
    const [search,setSearch]=useState("");
    const [slist,setSList]= useState([]);
    useEffect(() => {  
            const filteredContacts = list.filter((contact) => {
                const nameMatch = contact.name.toLowerCase().includes(search.toLowerCase());
                const mobileMatch = contact.mobile.toLowerCase().includes(search.toLowerCase());
                return nameMatch || mobileMatch;
            });
            setSearchList(filteredContacts)
            setSList(filteredContacts);
        if(search===""){
            setSearchList([]);
        }
    }, [search])
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        setSearch("");
        if(slist.length===0){
            setAlert({status:true,name:'No Results Found',type:"danger"});
        }
    }
    return (
        <>
        <form onSubmit={handleSubmit} className="search__container">
            <input type="text" value={search} onChange={(e)=>{setSearch(e.target.value)}} placeholder="Search here" className="search__input"/>
        </form>
        </>
    )
}
export default NavBar;