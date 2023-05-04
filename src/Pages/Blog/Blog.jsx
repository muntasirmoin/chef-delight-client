import React, { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { PDFDocument, StandardFonts } from 'pdf-lib';
import { rgb } from 'pdf-lib';

const redColor = rgb(1, 0, 0);


// const Blog = () => {
//     const createPdf = async () => {
//         const pdfDoc = await PDFDocument.create();
//         const page = pdfDoc.addPage([500, 500]);
//         const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
//         const textSize = 20;
//         const text = 'Blog I.Tell us the differences between uncontrolled and controlled components ?';
    
//         page.drawText(text, {
//           x: 50,
//           y: 450,
//           size: textSize,
//           font: helveticaFont,
//           color: redColor,
//         });
    
//         const pdfBytes = await pdfDoc.save();
//         const pdfUrl = URL.createObjectURL(new Blob([pdfBytes], { type: 'application/pdf' }));
//         window.open(pdfUrl);
//       };
  
    return (
        <Container className='bg-light p-4'>
            <button className='m-2' onClick={createPdf}>Create PDF</button>
      <Row className='mt-2'>
        <Col>
          <Card>
           
            <Card.Body>
              <Card.Title className='text-success'>I.	Tell us the differences between uncontrolled and controlled components.</Card.Title>
              <Card.Text>
              Answer: <br />
In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.
Controlled components generally faster as there's less state management.
Uncontrolled components Generally slower as there's more state management. 
Controlled components less complex code. 
Uncontrolled components More complex code.

              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className='mt-2'>
        <Col>
          <Card>
            
            <Card.Body>
              <Card.Title className='text-success'>II.	How to validate React props using PropTypes</Card.Title>
              <Card.Text>
              Answer: <br />
Props are an important mechanism for passing the read-only attributes to React components. The props are usually required to use correctly in the component. If it is not used correctly, the components may not behave as expected. Hence, it is required to use props validation in improving react components.
Props validation is a tool that will help the developers to avoid future bugs and problems. It is a useful way to force the correct usage of your components. It makes your code more readable. React components used special property PropTypes that help you to catch bugs by validating data types of values passed through props, although it is not necessary to define components with propTypes. However, if you use propTypes with your components, it helps you to avoid unexpected bugs.

              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className='mt-2'>
        <Col>
          <Card>
           
            <Card.Body>
              <Card.Title className='text-success'>III.	Tell us the difference between nodejs and express js.</Card.Title>
              <Card.Text>
                Answer: <br />
              Node.js is a platform for building the i/o applications which are server-side event-driven and made using JavaScript.  <br />
Express.js is a framework based on Node.js which is used for building web-application using approaches and principles of Node.js event-driven architecture. <br />
Node.js is used to build server-side, input-output, event-driven apps. <br />
Express.js is used to build web-apps using approaches and principles of Node.js. <br />
Node.js is built on Google’s V8 engine. <br />
Express.js is built on Node.js. <br />
Node.js controllers are provided. <br />
Express.js controllers are not provided. <br />

              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className='mt-2'>
        <Col>
          <Card>
           
            <Card.Body>
              <Card.Title className='text-success'>IV.	What is a custom hook, and why will you create a custom hook?</Card.Title>
              <Card.Text>
              Answer: <br />
A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks. Custom hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications. <br />
Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.

              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
    </Container>
    );
};

export default Blog;