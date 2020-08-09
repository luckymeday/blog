import React from "react";
import PublicNavBar from "../PublicNavbar";
import { Col, Row, Image, Card, Button } from "react-bootstrap";
const DashboardPage = () => {
  const handleEditProfile = () => {
    alert("edit profile");
    return;
  };
  return (
    <>
      <PublicNavBar />
      <Row className="body text-center justify-content-center align-items-center">
        <div className="col-2">
          Profile
          <Card style={{ width: "18rem" }}>
            <Image
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b1d334cf-9b96-4eb1-bc06-15f2997ac6b2/d89j4d2-eb772c02-e3b4-4ff4-b919-38f3e54f247e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYjFkMzM0Y2YtOWI5Ni00ZWIxLWJjMDYtMTVmMjk5N2FjNmIyXC9kODlqNGQyLWViNzcyYzAyLWUzYjQtNGZmNC1iOTE5LTM4ZjNlNTRmMjQ3ZS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.wY2OMHhmJgcaC4RahhfvL7WszzfW2dKiyVt7Xnvxho0"
              roundedCircle
              alt="profile pic"
              style={{
                maxHeight: "170px",
                maxWidth: "170px",
              }}
            />
            <Card.Body className="text-left">
              <Card.Title>User.Name</Card.Title>
              <Card.Text>User.description info</Card.Text>
              <Button variant="dark" onClick={() => handleEditProfile()}>
                Edit User description and image src
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-6">Blogs</div>

        <div className="col-2">Friendlist</div>
      </Row>
    </>
  );
};

export default DashboardPage;
