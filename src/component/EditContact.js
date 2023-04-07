import {useState}  from "react";

const EditContact = ({list, setList, id, setEditMode, setAlert}) => {
    const contact= list.filter((item)=>item.id===id)[0];
    const [name, setName] = useState(contact.name);
    const [mobile, setMobile] = useState(contact.mobile);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const existingContact = list.find((contact) => contact.mobile === mobile);
        if (existingContact) {
            setEditMode(false);
            setAlert({status:true,name:'No Changes made',type:"danger"});
            return;
        }
        if(name.length===0||mobile.length===0){
            setEditMode(false);
            setAlert({status:true,name:'Mobile number and Name can not be set empty',type:"danger"});
            return;
        }
        setList(list.map((item)=>{
            if(item.id===id){
                item.name=name;
                item.mobile=mobile;
            }
            return item
        }))
        setAlert({status:true,name:'Item Edited Successfully',type:"success"});
        setEditMode(false);
    };

    return (
    <form onSubmit={handleSubmit} className="form-container">
        <input type="text" value={name} placeholder="Name" onChange={(e) => {setName(e.target.value)}} />
        <input type="text" value={mobile} placeholder="Mobile No" onChange={(e) => {setMobile(e.target.value)}} />
        <button type="submit">Save Changes</button>
    </form>
    );
};

export default EditContact;
