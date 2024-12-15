import { Box, Image, Text, Button, Badge } from "@chakra-ui/react";

import { DataListItem, DataListRoot } from "../../../components/ui/data-list";

const CharacterCard = ({ character, onClick }) => {
  return (
    <Box width="320px" bg="#2f3640" color="white" borderRadius="md" overflow="hidden" boxShadow="md" position="relative"       onClick={() => onClick(character)}
    cursor="pointer">
      <Badge
        position="absolute"
        top="10px"
        right="10px"
        colorPalette={character.status === "Alive" ? "green" : character.status === "Dead" ? "red" : "gray"}
      >
        {character.status === "Alive" ? "Alive" : character.status === "Dead" ? "Dead" : "Unknown"}
      </Badge>
      <Image
        src={character.image}
        alt={character.name}
        width="100%"
        height="auto"
      />
      <Box p="4">
        <Text fontSize="xl" fontWeight="bold" mt="2">{character.name}</Text>
        <DataListRoot>
          <DataListItem label="Species" value={character.species} />
          <DataListItem label="Gender" value={character.gender} />
          <DataListItem label="Origin" value={character.origin.name} />
          <DataListItem label="Location" value={character.location.name} />
        </DataListRoot>
      </Box>

    </Box>
  );
}

export default CharacterCard;

