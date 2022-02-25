import axios from "axios";
import Head from "next/head";
import React, { useState } from "react";
import Card from "../components/Card";
import { useSearchContext } from "../context/searchContext";

const Episodes = (props) => {
  const [episodes, setEpisodes] = useState(props.data);
  const { query } = useSearchContext();
  return (
    <>
      <Head>
        <title>Episodes | Intro Front</title>
      </Head>
      <div className="container">
        <div className="row">
          {episodes &&
            episodes
              .filter((episode) =>
                episode.name.toLowerCase().includes(query.toLowerCase())
              )
              .map((episode) => {
                return (
                  <div
                    key={episode.id}
                    className="col-12 col-sm-6 col-md-4 col-xl-3 my-3 d-flex justify-content-center"
                  >
                    <Card item={episode}>
                      <strong>Nombre: </strong> {episode.name} <br />
                      <strong>Episodio: </strong> {episode.episode} <br />
                      <strong>Al Aire: </strong> {episode.air_date} <br />
                    </Card>
                  </div>
                );
              })}
        </div>
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const response = await axios.get("https://rickandmortyapi.com/api/episode");
  return {
    props: {
      data: response.data.results,
    },
  };
};

export default Episodes;
