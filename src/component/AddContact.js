import {useState}  from "react";

const AddContact = ({addContact}) => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact(name, mobile);
    setName('');
    setMobile('');
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
        <input type="text" value={name} placeholder="Name" onChange={(e) => {setName(e.target.value)}} />
        <input type="text" value={mobile} placeholder="Mobile No" onChange={(e) => {setMobile(e.target.value)}} />
        <button type="submit">Add Contact</button>
    </form>
  );
};

export default AddContact;
