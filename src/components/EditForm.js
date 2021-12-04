import { Button } from "react-bootstrap";
import { Form, FormControl, FormGroup } from "react-bootstrap";
import { EmployeeContext } from "../context/EmployeeContext";
import { useContext, useState } from "react";

const EditForm = ({ theEmployee }) => {
  const { updateEmployee } = useContext(EmployeeContext);

  const employee = theEmployee;
  const id = employee.id;

  const [name, SetName] = useState(employee.name);
  const [email, SetEmail] = useState(employee.email);
  const [address, SetAddress] = useState(employee.address);
  const [phone, SetPhone] = useState(employee.phone);

  const updatedEmployee = {id, name , email, address , phone};
  const handleSubmit = (e) => {
    e.preventDefault();
    updateEmployee(id, updatedEmployee);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <FormControl
          type="text"
          placeholder="Name *"
          value={name}
          onChange={(e)=> SetName(e.target.value)}
          required
        ></FormControl>
      </FormGroup>
      <br />
      <FormGroup>
        <FormControl
          type="email"
          placeholder="Email *"
          value={email}
          onChange={(e)=> SetEmail(e.target.value)}
          required
        ></FormControl>
      </FormGroup>
      <br />
      <FormGroup>
        <FormControl
          as="textarea"
          placeholder="Address *"
          value={address}
          onChange={(e)=> SetAddress(e.target.value)}
          rows={3}
        ></FormControl>
      </FormGroup>
      <br />
      <FormGroup>
        <FormControl
          type="text"
          placeholder="Phone *"
          value={phone}
          onChange={(e)=> SetPhone(e.target.value)}
        ></FormControl>
      </FormGroup>
      <br />
      <div className="d-grid gap-2">
        <Button variant="warning" type="submit">
          Update Employee
        </Button>
      </div>
    </Form>
  );
};

export default EditForm;
