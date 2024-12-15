import { VStack, HStack, useBreakpointValue } from "@chakra-ui/react";
import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationPageText,
  PaginationRoot,
} from "../../../components/ui/pagination";
import { useState } from "react";
import { useScreenDetector } from "../../hooks/useSceenDetector";

const Pagination = ({ setPageNumber, totalPages }) => {

  const {isMobile, isTablet, isDesktop} = useScreenDetector();  

  const next = () => {
    setPageNumber((prev) => (prev < totalPages ? prev + 1 : totalPages));
    setPage((prev) => (prev < totalPages ? prev + 1 : totalPages));
  };

  const prev = () => {
    setPageNumber((prev) => (prev > 1 ? prev - 1 : 1));
    setPage((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handlePageChange = (page) => {
    setPageNumber(page);
    setPage(page);
  };

  const Stack = useBreakpointValue({ base: HStack, md: HStack });
  const [page, setPage] = useState(1);

  return (
    <PaginationRoot
      count={totalPages}
      pageSize={1}
      page={page}
      onPageChange={(e) => handlePageChange(e.page)}
      defaultPage={1}
      siblingCount={1}
      variant='solid'
      
    >
      <HStack spacing={4} align="center">
        <PaginationPrevTrigger onClick={prev} />
        {isMobile ? <PaginationPageText variant="solid" format="short" /> :  <PaginationItems /> }
        
        <PaginationNextTrigger onClick={next} />

      </HStack>
    </PaginationRoot>
  );
};

export default Pagination;