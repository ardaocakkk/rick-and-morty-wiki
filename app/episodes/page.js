"use client";

import React, { useState, useEffect } from "react";
import InputGroup from "../ui/InputGroup/InputGroup";
import CharacterCard from "../ui/cards/CharacterCard"; 
import CharacterModal from "../ui/modal/CharacterModal";

const Page = () => {
  const [total, setTotal] = useState(0);
  const [episode, setEpisode] = useState(null);
  const [results, setResults] = useState([]);
  const [id, setID] = useState(1); // Default ID, you can change it as needed
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    const fetchTotal = async () => {
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/episode/"
        );
        const data = await response.json();
        console.log("Total:", data.info.count);
        setTotal(data.info.count); // The total number of episodes is in data.info.count
      } catch (error) {
        console.error("Error fetching total:", error);
      }
    };

    fetchTotal();
  }, []);

  useEffect(() => {
    const fetchEpisode = async () => {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/episode/${id}`
        );
        const data = await response.json();
        setEpisode(data); // Set the episode data
        console.log("Episode:", data);
        let a = await Promise.all(
          data.characters.map((x) => {
            return fetch(x).then((res) => res.json());
          })
        );
        setResults(a);
      } catch (error) {
        console.error("Error fetching episode:", error);
      }
    };

    fetchEpisode();
  }, [id]);

  const handleCardClick = (character) => {
    setSelectedCharacter(character);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCharacter(null);
  };

  return (
    <div className="flex justify-center ">
    <div className="mx-auto w-full max-w-[1200px] p-4">
      <div className="flex flex-col md:flex-row md:justify-between mb-4 items-center">
        <InputGroup name={'Episode'} type={'Episode'} changeID={setID} total={total} />
        <div className="flex justify-between mb-4 items-center">
        {episode && (
          <div className="flex mx-auto flex-col  justify-between items-center bg-[#2f3640] p-4 rounded-lg shadow-md">
            <div className="mb-4 md:mb-0">
              <h2 className="text-[#f5f6fa] text-xl md:text-2xl font-bold">
                Episode Name:{" "}
                <span className="text-[#8c7ae6]">{episode.name}</span>
              </h2>
            </div>
            <div className="text-center md:text-right space-y-2 md:space-y-0 md:space-x-4">
              <p className="text-[#f5f6fa] text-sm md:text-base">
                <span className="font-semibold">Release Date:</span>{" "}
                {episode.air_date}
              </p>
              <p className="text-[#f5f6fa] text-sm md:text-base">
                <span className="font-semibold">Episode:</span>{" "}
                {episode.episode}
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
