import { useEffect, useState } from "react";
import { Col, Row, Card, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const params = useParams();
  console.log(params.movieId);

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    getMovieDetails();
  }, []);

  const getMovieDetails = async () => {
    const response = await fetch(
      "http://www.omdbapi.com/?apikey=660268d7&i=" + params.movieId
    );
    const data = await response.json();
    console.log(data);
    setMovie(data);
    console.log(movie);
  };

  return (
    <Row className="justify-content-center">
      <Col md={6}>
        <Card>
          <Card.Img variant="top" src={movie.Poster} />
          <Card.Body>
            <Card.Title>{movie.Title}</Card.Title>
            <Card.Text>{movie.Plot}</Card.Text>
            <Button variant="primary">{movie.Genre}</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default MovieDetails;
