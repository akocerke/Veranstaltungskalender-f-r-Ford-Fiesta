// src/pages/Admin/Comments.js
import React from 'react';
import { Container, Table, Button, Form } from 'react-bootstrap';

const Comments = () => {
  return (
    <Container className="mt-5 mb-5">
      <h1 className='headline'>Kommentare verwalten</h1>
      
      {/* Suchfeld und Button */}
      <Form className="mb-3">
        <Form.Group controlId="searchId">
          <Form.Label>Kommentar ID suchen</Form.Label>
          <Form.Control
            type="text"
            placeholder="Geben Sie die Kommentar-ID ein"
          />
        </Form.Group>
        <Button variant="primary" className="mt-2">Suchen</Button>
      </Form>
      
      {/* Tabelle */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Benutzername</th>
            <th>Kommentar</th>
            <th>Datum</th>
            <th>Aktionen</th>
          </tr>
        </thead>
        <tbody>
          {/* Beispielhafte Daten */}
          <tr>
            <td>1</td>
            <td>Max Mustermann</td>
            <td>Das ist ein Beispielkommentar.</td>
            <td>2024-08-07</td>
            <td>
              <Button variant="danger">Löschen</Button>
            </td>
          </tr>
          {/* Weitere Beispiel-Daten können hier hinzugefügt werden */}
        </tbody>
      </Table>
    </Container>
  );
};

export default Comments;