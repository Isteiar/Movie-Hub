import fs, { writeFile } from "fs/promises";
import { AllData, IMovie } from "./interfaces/MovieData.interface";

async function main() {
  const data = await fs.readFile("./dbjson/db.json", "utf-8"); //file read
  const parsedData: AllData = JSON.parse(data);

  // console.log(
  //   parsedData.movies.filter((m) => !m.posterUrl).map((m) => m.title)
  // );

  const myMovies: IMovie[] = parsedData.movies.map<IMovie>((movie) => {
    return {
      title: movie.title,
      description: movie.plot,
      duration: parseInt(movie.runtime),
      genres: [],
      release: new Date(parseInt(movie.year), 0, 1),
      reviews: [],
      thumbnail: movie.posterUrl || "asdaskdad",
      averageRating: 0,
    };
  });
  await writeFile("./dist/output.json", JSON.stringify(myMovies, null, 2));
}

main();
