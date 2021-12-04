import { Button } from "react-bootstrap";
import { Form, FormControl, FormGroup } from "react-bootstrap";
import { EmployeeContext } from "../context/EmployeeContext";
import { useContext, useState } from "react";

const AddForm = () => {

    const {addEmployee} = useContext(EmployeeContext);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addEmployee(name, email, address, phone)
    }

  return (
    <Form onSubmit={handleSubmit}> 
      <FormGroup>
        <FormControl type="text" placeholder="Name *" value={name} onChange={e => setName(e.target.value)} required></FormControl>
      </FormGroup>
      <br />
      <FormGroup>
        <FormControl type="email" placeholder="Email *" value={email} onChange={e => setEmail(e.target.value)} required></FormControl>
      </FormGroup>
      <br />
      <FormGroup>
        <FormControl
          as="textarea"
          placeholder="Address *"
          value={address} onChange={e => setAddress(e.target.value)}
          rows={3}
        ></FormControl>
      </FormGroup>
      <br />
      <FormGroup>
        <FormControl type="text" 
        placeholder="Phone *"
        value={phone} onChange={e => setPhone(e.target.value)}>

        </FormControl>
      </FormGroup>
      <br />
      <div className="d-grid gap-2">
        <Button variant="success" type="submit" >
          Add New Employee
        </Button>
      </div>
    </Form>
  );
};

export default AddForm;
