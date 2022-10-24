import React, { useState } from "react";
import { Container, FormGroup, Input } from "reactstrap";


export const SubiendoImagenes = (props) => {

  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);


  const uploadImage = async (e) => {
      const files = e.target.files;
      const data = new FormData();
      data.append("file", files[0]);
      data.append("upload_preset", "beysjimj");
      setLoading(true);
      const res = await fetch(
        'https://api.cloudinary.com/v1_1/dndyj4wwf/image/upload',
        {
          method: "POST",
          body: data,
        }
      )
      const file = await res.json();
      // console.log(res)
      setImage(file.secure_url);
      console.log(file.secure_url);
      setLoading(false)
  }



  return(
        <div>
        <Container >
          <FormGroup >
            <Input
                  type="file"
                  name="file"
                  onChange={uploadImage}
             />
             {loading ? (<h3></h3>) : (<img src={image} style={{width: "200px"}}/>)}
          </FormGroup>
          </Container>
        </div>
    );
};



{/* <FormGroup>
    <Label for="exampleFile">
      File
    </Label>
    <Input
      id="exampleFile"
      name="file"
      type="file"
    />
    <FormText>
      This is some placeholder block-level help text for the above input. It‘s a bit lighter and easily wraps to a new line.
    </FormText>
  </FormGroup> */}