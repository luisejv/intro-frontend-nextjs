import axios from "axios";

export default async function handler(req, res) {
  const response = await axios.get("https://rickandmortyapi.com/api/character");
  res
    .status(200)
    .json({
      paths: response.data.results.map((result) => "/character/" + result.id),
    });
}
