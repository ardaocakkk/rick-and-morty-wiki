'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";
import { RadioGroup, Radio } from "../../../components/ui/radio";
import { HStack } from "@chakra-ui/react";
export default function TypeFilter() {
  const router = useRouter();
  const [value, setValue] = useState("1");

  const handleLinkClick = (newValue) => {
    setValue(newValue);
    switch (newValue) {
      case "1":
        router.push("/");
        break;
      case "2":
        router.push("/episodes");
        break;
      case "3":
        router.push("/locations");
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex flex-row justify-center items-center mb-3 mt-3">
      <h1 className="mr-2 font-bold">Searching in </h1>
      <div className="flex flex-row justify-between items-center space-x-4">
        <a
          className={`cursor-pointer ${value === "1" ? "border-b-2 border-purple-500" : ""}`}
          onClick={() => handleLinkClick("1")}
        >
          <p>Characters</p>
        </a>
        <a
          className={`cursor-pointer ${value === "2" ? "border-b-2 border-purple-500" : ""}`}
          onClick={() => handleLinkClick("2")}
        >
          Episodes
        </a>
        <a
          className={`cursor-pointer ${value === "3" ? "border-b-2 border-purple-500" : ""}`}
          onClick={() => handleLinkClick("3")}
        >
          Locations
        </a>
      </div>
    </div>
  );
}