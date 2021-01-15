import React from 'react';
import { useColorMode, useColorModeValue, Button } from '@chakra-ui/react';

export const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');

  return (
    <Button
      size="sm"
      aria-label={`Switch to ${text} mode`}
      color="current"
      onClick={toggleColorMode}
      {...props}
    />
  );
};
