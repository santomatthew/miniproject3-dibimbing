import {Button, Row, Col, Input, FormGroup, Label, Form} from 'reactstrap';
import { useState, useEffect } from "react";

const initialFormValue ={
    id: Math.random * Date.now(),
    name: "",
    price: 0,
    quantity:0
  }

const FormInput = ({ data, setOpen }) => {
    const [form, setForm] = useState(initialFormValue)
    const handleSubmit = (e) =>{
      e.preventDefault();
      data.push(form);
      setOpen(false);
    }
    return (
        <>
        <Row>
          <Form onSubmit={handleSubmit}> 
            <>
            <FormGroup>
              <Label>Name</Label>
              <Input
                value={form.name}
                onChange ={(e)=> setForm(prev =>({
                  ...prev, 
                  name: e.target.value
                }))}
                required
              />
            </FormGroup>
            <FormGroup>
                <Label>Quantity</Label>
                <Input value={form.quantity}
                onChange={(e)=>setForm(prev =>({
                    ...prev,
                    quantity: e.target.value
                }))}
                required
                />
            </FormGroup>
            <FormGroup>
                <Label>Price</Label>
                <Input value={form.price}
                onChange={(e)=>setForm(prev =>({
                    ...prev,
                    price: e.target.value
                }))}
                required
                />
            </FormGroup>
            </>
              <Row>
                <Col>
                  <Button color="primary" type="submit"> Submit</Button>
                </Col>
                <Col>
                  <Button onClick={()=>setOpen(false)} > Cancel </Button>
                </Col>
              </Row>
          </Form>
        </Row>
        </>
      )
    }
    
    export default FormInput