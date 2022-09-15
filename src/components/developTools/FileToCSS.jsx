import React, { ChangeEvent } from 'react'
import { Form, Button, Container, Row, Col, FormControlProps } from 'react-bootstrap';

class FileToCSS extends React.Component{
    selectedFile;

    getBase64(file){
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            const result = document.getElementById('cssResult');
            if(result instanceof HTMLTextAreaElement){
                const convertStr = reader.result;
                if(typeof convertStr === "string")
                {
                    result.value = `
                    .my-class {
                        background-image: url(`+reader.result+`);
                    }
                    `;

                    const example = document.getElementById('example');
                    example?.setAttribute('style', `background-image: url(`+reader.result+`);`);
                }
            }
        };
        reader.onerror = function (error) {
          console.log('Error: ', error);
        };
    }

    setFile(e){
        const file = e.target.files?.item(0);
        if(file instanceof File ){
            this.selectedFile = file;
        }
    }

    convertFile(e){
        const form = document.getElementById('formFile');
        if(typeof this.selectedFile != "undefined"){
            this.getBase64(this.selectedFile);
        }
    }

    render(){
        return(
            <>
                <Container>
                    <h1>File To CSS</h1>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Select File</Form.Label>
                        <Form.Control onChange={this.setFile.bind(this)} type="file" />
                    </Form.Group>
                    <div>
                        <Button className="mt-1" onClick={(e) => this.convertFile(e)} style={{float: 'right'}}>Convert</Button>
                    </div>
                    <div>
                        <label htmlFor="exampleFormControlTextarea1">Basic textarea</label>
                            <textarea
                                className="form-control"
                                id="cssResult"
                                rows={5}
                            />
                    </div>
                    <div>
                        <div id='example'>

                        </div>
                    </div>
                </Container>
            </>
        )  
    }
}

export default FileToCSS;