import { Box, Flex, Button, Avatar, IconButton, useColorMode } from '@chakra-ui/react'
import { FiBell, FiMoon, FiSun } from 'react-icons/fi'

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Flex
      as="header"
      align="center"
      justify="flex-end"
      h="60px"
      px={8}
      bg="gray.800"
      borderBottom="1px"
      borderColor="gray.700"
      position="fixed"
      top={0}
      right={0}
      left="70px"
      zIndex={10}
    >
      <Flex align="center" gap={4}>
        <IconButton
          aria-label="Toggle color mode"
          icon={colorMode === 'light' ? <FiMoon /> : <FiSun />}
          onClick={toggleColorMode}
          variant="ghost"
          color="gray.300"
        />
        <IconButton
          aria-label="Notifications"
          icon={<FiBell />}
          variant="ghost"
          color="gray.300"
        />
        <Avatar size="sm" name="User Name" bg="brand.500" />
      </Flex>
    </Flex>
  )
}
