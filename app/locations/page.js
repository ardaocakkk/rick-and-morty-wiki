'use client'
import React, { useState, useEffect } from 'react';
import CharacterCard from '../ui/cards/CharacterCard';
import InputGroup from '../ui/InputGroup/InputGroup';
import CharacterModal from '../ui/modal/CharacterModal';

const Page = () => {
    const [info, setInfo] = useState({});
  const [results, setResults] = useState([]);
  const [number, setNumber] = useState(1); // Default ID, you can change it as needed
  const [locations, setLocations] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { dimension, type, name } = info;

  useEffect(() => {
    const fetchAllLocations = async () => {
      let allLocations = [];
      let page = 1;
      let totalPages = 1;

      while (page <= totalPages) {
        try {
          const response = await fetch(`https://rickandmortyapi.com/api/location/?page=${page}`);
          const data = await response.json();
          allLocations = [...allLocations, ...data.results];
          totalPages = data.info.pages;
          page++;
        } catch (error) {
          console.error("Error fetching locations:", error);
          break;
        }
      }

      setLocations(allLocations);
      console.log("Locations:", allLocations);
    };

    fetchAllLocations();
  }, []);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/location/${number}`);
        const data = await response.json();
        setInfo(data); // Set the location data
        console.log("Location:", data);
        let characters = await Promise.all(
          data.residents.map((url) => {
            return fetch(url).then((res) => res.json());
          })
        );
        setResults(characters);
      } catch (error) {
        console.error("Error fetching location:", error);
      }
    };

    fetchLocation();
  }, [number]);

  const handleCardClick = (character) => {
    setSelectedCharacter(character);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCharacter(null);
  };

  return (
    <div className="flex justify-center">
      <div className="mx-auto w-full max-w-[1200px] p-4">
        <div className="flex flex-col md:flex-row md:justify-between mb-4 items-center">
          <InputGroup
            name="Location"
            changeID={setNumber}
            total={locations.length}
            type="Location"
            options={locations}
          />
          <div className="flex justify-between mb-4 items-center">
            {info && (
              <div className="flex mx-auto flex-col justify-between items-center bg-[#2f3640] p-4 rounded-lg shadow-md">
                <div className="mb-4 md:mb-0">
                  <h2 className="text-[#f5f6fa] text-xl md:text-2xl font-bold">
                    Location Name:{" "}
                    <span className="text-[#8c7ae6]">{name}</span>
                  </h2>
                </div>
                <div className="text-center md:text-right space-y-2 md:space-y-0 md:space-x-4">
                  <p className="text-[#f5f6fa] text-sm md:text-base">
                    <span className="font-semibold">Dimension:</span>{" "}
                    {dimension}
                  </p>
                  <p className="text-[#f5f6fa] text-sm md:text-base">
                    <span className="font-semibold">Type:</span>{" "}
                    {type}
                  </p>
                </div>
              </div>
            )}
            <div></div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {results &&
            results.map((character) => (
              <CharacterCard key={character.id} character={character} onClick={handleCardClick} />
            ))}
        </div>
      </div>
      {selectedCharacter && (
        <CharacterModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          character={selectedCharacter}
        />
      )}
    </div>
  );
};
  
  export default Page;