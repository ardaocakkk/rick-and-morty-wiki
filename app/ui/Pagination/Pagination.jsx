import { HStack } from "@chakra-ui/react";
import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from "../../../components/ui/pagination";

const Pagination = ({ setPageNumber }) => {
  let next = () => {
    setPageNumber((prev) => prev + 1);
  };

  let prev = () => {
    setPageNumber((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <PaginationRoot count={20} pageSize={2} size={"lg"} defaultPage={1}>
      <HStack>
        <PaginationPrevTrigger onClick={prev} />
        <PaginationItems />
        <PaginationNextTrigger onClick={next} />
      </HStack>
    </PaginationRoot>
  );
};

export default Pagination;