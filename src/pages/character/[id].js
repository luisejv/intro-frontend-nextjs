import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";

const Character = (props) => {
  const [personaje, setPersonaje] = useState(props.data);

  return (
    <div className="container">
      <div className="row mt-5 justify-content-center">
        <div className="col-8">
          <div className="character-card">
            <div className="row">
              <div className="col-4 position-relative">
                <Image src={personaje.image} layout="fill" alt=""></Image>
              </div>
              <div className="col-8">
                <ul className="mb-0">
                  <li>
                    <strong>Nombre: </strong> {personaje.name}
                  </li>
                  <li>
                    <strong>Creado: </strong>{" "}
                    {new Date(personaje.created).toLocaleDateString()}
                  </li>
                  <li>
                    <strong>Genero: </strong> {personaje.gender}
                  </li>
                  <li>
                    <strong>Ubicación: </strong> {personaje.location.name}
                  </li>
                  <li>
                    <strong>Especie: </strong> {personaje.species}
                  </li>
                  <li>
                    <strong>Estado: </strong> {personaje.status}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const paths = await axios.get("http://localhost:3000/api/get-paths");
  console.log(paths.data.paths);
  return {
    paths: paths.data.paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const response = await axios.get(
    "https://rickandmortyapi.com/api/character/" + params.id
  );

  return {
    props: {
      data: response.data,
    },
  };
};

export default Character;
