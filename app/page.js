'use client'
import { useEffect, useState } from "react";
import CharacterCard from "./ui/cards/CharacterCard";
import RickSVG from "./ui/icons/RickSVG";
import { RadioGroup, Radio } from "../components/ui/radio";
import { HStack } from "@chakra-ui/react";
import SearchBar from "./ui/search/Search";
import Pagination from "./ui/Pagination/Pagination";
import Filter from "./ui/filter/Filter";

export default function Home() {
  const [pageNumber, setPageNumber] = useState(1);
  const [search, updateSearch] = useState("");
  const [status, updateStatus] = useState([]);
  const [gender, updateGender] = useState([]);
  const [species, updateSpecies] = useState([]);
  const [fetchedData, updateFetchedData] = useState([]);
  const [value, setValue] = useState("1");

  useEffect(() => {
    const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status.join(",")}&gender=${gender.join(",")}&species=${species.join(",")}`;

    console.log("API URL:", api); // Log the API URL for debugging

    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
      console.log("Fetched Data:", data); // Log the fetched data for debugging
    })();
  }, [pageNumber, search, status, gender, species]);

  const handleFilterChange = (filterType, value) => {
    switch (filterType) {
      case "status":
        updateStatus((prev) => prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]);
        break;
      case "gender":
        updateGender((prev) => prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]);
        break;
      case "species":
        updateSpecies((prev) => prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]);
        break;
      default:
        break;
    }
    setPageNumber(1); // Reset to the first page when filters change
  };

  const statusItems = ["Alive", "Dead", "Unknown"];
  const speciesItems = ["Human", "Alien", "Humanoid", "Poopybutthole", "Mythological", "Unknown", "Animal", "Disease", "Robot", "Cronenberg", "Planet"];
  const genderItems = ["Female", "Male", "Genderless", "Unknown"];

  return (
    <>
      {/* Rick and Morty BANNER */}
      <div>
        <div className="relative flex justify-center items-center w-full bg-gradient-to-r from-[#8c7ae6] to-[#353b48]">
          <RickSVG width="378" height="376" />
          <div className="absolute inset-0 flex justify-center items-center p-4">
            <h2 className="text-[40px] sm:text-[50px] md:text-[61.6px] lg:text-[90.4px] font-extrabold text-[#fff] text-center">
              The Rick and Morty <span className="text-[#8c7ae6]">Wiki</span>
            </h2>
          </div>
        </div>

        {/* Rick and Morty CHARACTERS Table */}
        <div className="mx-auto w-full max-w-[1200px] p-4">
          <SearchBar setSearch={updateSearch} setPageNumber={setPageNumber} />
          <Filter
            statusItems={statusItems}
            speciesItems={speciesItems}
            genderItems={genderItems}
            handleFilterChange={handleFilterChange}
          />
          <div className="flex flex-row justify-center items-center mb-3 mt-3">
            <h1 className="mr-2">Searching for </h1>
            <RadioGroup value={value} onValueChange={(e) => setValue(e.value)}>
              <HStack gap="3">
                <Radio value="1">Character</Radio>
                <Radio value="2">Episode</Radio>
                <Radio value="3">Location</Radio>
              </HStack>
            </RadioGroup>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {fetchedData.results && fetchedData.results.map((character) => (
              <CharacterCard key={character.id} character={character} />
            ))}
          </div>
          <div className="flex justify-center items-center">
            <Pagination setPageNumber={setPageNumber} />
          </div>
        </div>
      </div>
    </>
  );
}
