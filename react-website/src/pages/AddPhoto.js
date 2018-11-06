import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import ImageUploader from 'react-images-upload';



class AddPage extends Component {
  constructor(props) {
    super(props);
     this.state = { pictures: [] };
     this.onDrop = this.onDrop.bind(this);
}

onDrop(picture) {
  this.setState({
      pictures: this.state.pictures.concat(picture),
  });
}

readFile(files) {
  if (files && files[0]) {
    let formPayLoad = new FormData();
    formPayLoad.append('uploaded_image', files[0]);
    this.sendImageToController(formPayLoad)
}
}

sendImageToController(formPayLoad) {
  fetch(`http://localhost:3001/v1/photos`, {
    credentials: 'same-origin',
    headers: {},
    method: 'POST',
    body: formPayLoad
  })

  .then(response => response.json())
  .then(imageFromController => {
    this.setState({uploads: this.state.uploads.concat(imageFromController)})
  })
}

  render() {
    return (


      <div>
        <h1> Adds By Han </h1>
        <Form method="POST" action="http://localhost:3001/v1/photos">
        <FormGroup>
          <Label for="description">Description</Label>
          <Input type="text" name="description" id="description" />
        </FormGroup>
        <FormGroup>
          <Label for="category"> Category</Label>
          <Input type="category" name="category" id="category" />
        </FormGroup>
        <FormGroup>
          <Label for="client"> Client</Label>
          <Input type="client" name="client" id="client" />
        </FormGroup>
        <FormGroup>
          <Label for="date"> Date</Label>
          <Input type="date" name="date" id="date" />
        </FormGroup>
        <FormGroup>
          <Label for="url"> Url</Label>
          <Input type="url" name="url" id="url" />
        </FormGroup>
        <Button>Submit</Button>
        
      </Form>

      </div>
    
    
    );
  }
}

export default AddPage;
