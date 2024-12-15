'use client'
import { useEffect, useState } from "react";
import CharacterCard from "./ui/cards/CharacterCard";

import SearchBar from "./ui/search/Search";
import Pagination from "./ui/Pagination/Pagination";
import Filter from "./ui/filter/Filter";
import TypeFilter from "./ui/filter/TypeFilter";
import CharacterModal from "./ui/modal/CharacterModal";

export default function Home() {
  const [pageNumber, setPageNumber] = useState(1);
  const [search, updateSearch] = useState("");
  const [status, updateStatus] = useState([]);
  const [gender, updateGender] = useState([]);
  const [species, updateSpecies] = useState([]);
  const [fetchedData, updateFetchedData] = useState([]);
  const [totalPages, setTotalPages] = useState();
  const [value, setValue] = useState("1");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const handleCardClick = (character) => {
    setSelectedCharacter(character);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCharacter(null);
  };

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
      <div className="flex justify-center ">
        {/* Rick and Morty CHARACTERS Table */}
        <div className="mx-auto w-full max-w-[1200px] p-4">
          <SearchBar setSearch={updateSearch} setPageNumber={setPageNumber} />
          <Filter
            statusItems={statusItems}
            speciesItems={speciesItems}
            genderItems={genderItems}
            handleFilterChange={handleFilterChange}
          />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {fetchedData.results && fetchedData.results.map((character) => (
                <CharacterCard key={character.id} character={character} onClick={handleCardClick} />
              ))}
          </div>
          {fetchedData.info && (
            <div className="flex justify-center items-center ">
              <Pagination setPageNumber={setPageNumber} totalPages={fetchedData.info.pages} />
            </div>
          )}
        </div>
        {selectedCharacter && (
        <CharacterModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          character={selectedCharacter}
        />
      )}
      </div>
    </>
  );
}
