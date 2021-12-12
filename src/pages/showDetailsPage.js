import React, {useState, useEffect} from "react";
import ShowHeader from "../components/showHeader/";
import ShowDetails from "../components/showDetails/";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import {getShow, getShowImages} from "../api/tmdb-api";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  gridList: {
    width: 450,
    height: "100vh",
  },
}));

const ShowPage = (props) => {
  const classes = useStyles();
  const {id} = props.match.params;
  const [show, setShow] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    getShow(id).then((show) => {
      setShow(show);
    });
  }, [id]);

  useEffect(() => {
    getShowImages(id).then((images) => {
      setImages(images);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {show ? (
        <>
          <ShowHeader show={show} />
          <Grid container spacing={5} style={{ padding: "15px" }}>
            <Grid item xs={3}>
              <div className={classes.root}>
                <GridList
                  cellHeight={500}
                  className={classes.gridList}
                  cols={1}
                >
                  {images.map((image) => (
                    <GridListTile
                      key={image.file_path}
                      className={classes.gridListTile}
                      cols={1}
                    >
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
                        alt={image.file_path}
                      />
                    </GridListTile>
                  ))}
                </GridList>
              </div>
            </Grid>
            <Grid item xs={9}>
              <ShowDetails show={show} />
            </Grid>
          </Grid>
        </>
      ) : (
        <h2>Waiting for API data</h2>
      )}
    </>
  );
};

export default ShowPage;