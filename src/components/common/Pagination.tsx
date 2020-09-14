import React from 'react';
import { Flex, Text, Button, useColorMode } from '@chakra-ui/core';

interface IPaginationProps {
  count: number;
  page: number;
  onChange: (event: object, page: number) => void;
}

export const Pagination: React.FC<IPaginationProps> = ({
  count,
  page,
  onChange,
}) => {
  const { colorMode } = useColorMode();

  return (
    <Flex justify="space-between">
      <Button
        isDisabled={!(page > 1)}
        variantColor={`primary.${colorMode}`}
        onClick={(event: object) => onChange(event, page - 1)}
      >
        <Text fontSize="lg">{'Previous'}</Text>
      </Button>
      <Button
        isDisabled={!(page < count)}
        variantColor={`primary.${colorMode}`}
        onClick={(event: object) => onChange(event, page + 1)}
      >
        <Text fontSize="lg">{'Next'}</Text>
      </Button>
    </Flex>
  );
};
