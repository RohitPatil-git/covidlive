import React, { useEffect, useState } from "react";
import "./covid.css";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";

const Covid = () => {
  const [myData, setmyData] = useState([]);
  const getCovidData = async () => {
    try {
      const data = await fetch(
        "https://api.covid19india.org/v4/min/data.min.json"
      );
      const covidData = await data.json();
      setmyData(covidData.MH.total);
    } catch (error) {
      console.log(error);
    }
  };

  
  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <div className="black">
      <h2 className="h2style">
        Maharashtra Covid Status{" "}
        <sup>
          <Badge variant="warning">LIVE</Badge>
        </sup>
      </h2>
      <div className="cardgroup">
        <Card style={{ width: "18rem" }} className="cardstyle" bg="danger">
          <Card.Header className="cardheader">Total cases</Card.Header>
          <Card.Body>
            <Card.Title className="titlestyle">{myData.confirmed}</Card.Title>
          </Card.Body>
        </Card>
        <Card bg="primary" style={{ width: "18rem" }} className="cardstyle">
          <Card.Header className="cardheader">recovered </Card.Header>
          <Card.Body>
            <Card.Title className="titlestyle">{myData.recovered}</Card.Title>
          </Card.Body>
        </Card>
        <Card bg="info" style={{ width: "18rem" }} className="cardstyle">
          <Card.Header className="cardheader">Total Deaths</Card.Header>
          <Card.Body>
            <Card.Title className="titlestyle">{myData.deceased}</Card.Title>
          </Card.Body>
        </Card>
        <Card bg="primary" style={{ width: "18rem" }} className="cardstyle">
          <Card.Header className="cardheader">vaccinated</Card.Header>
          <Card.Body>
            <Card.Title className="titlestyle">
              {myData.vaccinated1 + myData.vaccinated2}
            </Card.Title>
          </Card.Body>
        </Card>
        <Card bg="danger" style={{ width: "18rem" }} className="cardstyle">
          <Card.Header className="cardheader">Total test</Card.Header>
          <Card.Body>
            <Card.Title className="titlestyle">{myData.tested}</Card.Title>
          </Card.Body>
        </Card>
        <Card
          style={{ width: "18rem" }}
          className="cardstyle"
          bg="warning"
          text="secondary"
        >
          <Card.Header className="cardheader">other decease</Card.Header>
          <Card.Body>
            <Card.Title className="titlestyle">{myData.other}</Card.Title>
          </Card.Body>
        </Card>
      </div>
      {/* district wise data */}
      

      <footer className="footer">
        <p>this data is provided by covid19indiaapi</p>
      </footer>
    </div>
  );
};

export default Covid;
