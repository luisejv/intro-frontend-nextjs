import axios from "axios";
import Head from "next/head";
import Card from "../components/Card";
import { useSearchContext } from "../context/searchContext";

export default function Home(props) {
  const { data } = props;

  const { query } = useSearchContext();

  return (
    <>
      <Head>
        <title>Characters | Intro Front</title>
      </Head>
      <div className="container">
        <div className="row flex-wrap">
          {data &&
            data
              .filter((item) =>
                item.name.toLowerCase().includes(query.toLowerCase())
              )
              .map((item) => {
                return (
                  <div
                    key={item.id}
                    className="col-12 col-sm-6 col-md-4 col-xl-3 my-3 d-flex justify-content-center"
                  >
                    <Card item={item} url={"/character/" + item.id}>
                      <strong>Estado: </strong> {item.status} <br />
                      <strong>Especie: </strong> {item.species} <br />
                      <strong>Género: </strong> {item.gender} <br />
                    </Card>
                  </div>
                );
              })}
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const response = await axios.get("http://localhost:3000/api/rick_and_morty");

  return {
    props: {
      data: response.data,
    },
  };
};
