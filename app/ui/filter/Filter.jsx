import React from 'react';
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "../../../components/ui/accordion";

const Filter = ({ statusItems, speciesItems, genderItems, handleFilterChange }) => {
  return (
    <AccordionRoot collapsible defaultValue={["status"]} className="my-4">
      <AccordionItem value="status">
        <AccordionItemTrigger>Status</AccordionItemTrigger>
        <AccordionItemContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {statusItems.map((status) => (
              <div key={status} className="flex items-center">
                <input
                  type="checkbox"
                  id={status}
                  name={status}
                  value={status}
                  onChange={() => handleFilterChange("status", status)}
                  className="mr-2"
                />
                <label htmlFor={status}>{status}</label>
              </div>
            ))}
          </div>
        </AccordionItemContent>
      </AccordionItem>

      <AccordionItem value="species">
        <AccordionItemTrigger>Species</AccordionItemTrigger>
        <AccordionItemContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {speciesItems.map((species) => (
              <div key={species} className="flex items-center">
                <input
                  type="checkbox"
                  id={species}
                  name={species}
                  value={species}
                  onChange={() => handleFilterChange("species", species)}
                  className="mr-2"
                />
                <label htmlFor={species}>{species}</label>
              </div>
            ))}
          </div>
        </AccordionItemContent>
      </AccordionItem>

      <AccordionItem value="gender">
        <AccordionItemTrigger>Gender</AccordionItemTrigger>
        <AccordionItemContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {genderItems.map((gender) => (
              <div key={gender} className="flex items-center">
                <input
                  type="checkbox"
                  id={gender}
                  name={gender}
                  value={gender}
                  onChange={() => handleFilterChange("gender", gender)}
                  className="mr-2"
                />
                <label htmlFor={gender}>{gender}</label>
              </div>
            ))}
          </div>
        </AccordionItemContent>
      </AccordionItem>
    </AccordionRoot>
  );
};

export default Filter;