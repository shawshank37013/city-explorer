import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CitySearch from "./CitySearch";
import axios from "axios";
import LatLon from "./LatLon";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: "",
      location: "",
      longitude: "",
      searchQuery: "",
    };
  }

  updateCity = (e) => {
    this.setState({ searchQuery: e.target.value });
  };

  displayLatLon = async () => {
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_MAP_KEY}&q=${this.state.searchQuery}&format=json`;
    let location;
    location = await axios.get(url);
    this.setState({
      location: location.data[0].display_name,
      latitude: location.data[0].lat,
      longitude: location.data[0].lon,
    });
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            <CitySearch
              updateCity={this.updateCity}
              displayLatLon={this.displayLatLon}
            />
          </Col>
        </Row>
        {this.state.location && (
          <>
            <Row>
              <Col>
                <LatLon
                  city={this.state.location}
                  lat={this.state.latitude}
                  lon={this.state.longitude}
                />
              </Col>
            </Row>
          </>
        )}
      </Container>
    );
  }
}

export default Main;
