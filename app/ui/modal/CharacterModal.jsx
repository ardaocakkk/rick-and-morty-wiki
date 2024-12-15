import React from 'react';
import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
} from '../../../components/ui/dialog';
import { Button, Image, Text, Box, Badge } from '@chakra-ui/react';

export default function CharacterModal({ isOpen, onClose, character }) {
  if (!character) return null;

  return (
    <DialogRoot open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{character.name}</DialogTitle>
          <DialogCloseTrigger />
        </DialogHeader>
        <DialogBody>
          <Image src={character.image} alt={character.name} mb={4} />
          <Box>
            <Badge
               colorPalette={character.status === "Alive" ? "green" : character.status === "Dead" ? "red" : "gray"}
            >
              {character.status === "Alive" ? "Alive" : character.status === "Dead" ? "Dead" : "Unknown"}
            </Badge>
            <Text mt={2}><strong>Species:</strong> {character.species}</Text>
            <Text><strong>Gender:</strong> {character.gender}</Text>
            <Text><strong>Origin:</strong> {character.origin.name}</Text>
            <Text><strong>Location:</strong> {character.location.name}</Text>
          </Box>
        </DialogBody>
        <DialogFooter>
          <Button onClick={onClose}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </DialogRoot>
  );
}