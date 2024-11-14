import { Box, VStack, Icon, Tooltip, Divider } from '@chakra-ui/react'
import { FiHome, FiPieChart, FiMap, FiUsers, FiSettings } from 'react-icons/fi'

const NavItem = ({ icon, label }: { icon: any; label: string }) => (
  <Tooltip label={label} placement="right">
    <Box
      p={3}
      cursor="pointer"
      borderRadius="md"
      _hover={{ bg: 'whiteAlpha.200' }}
      transition="all 0.2s"
    >
      <Icon as={icon} boxSize={6} color="gray.300" />
    </Box>
  </Tooltip>
)

export const Sidebar = () => (
  <Box
    as="nav"
    h="100vh"
    w="70px"
    bg="gray.800"
    position="fixed"
    left={0}
    top={0}
    px={2}
  >
    <VStack spacing={6} align="center" py={8}>
      <NavItem icon={FiHome} label="Dashboard" />
      <NavItem icon={FiPieChart} label="Analytics" />
      <NavItem icon={FiMap} label="Geography" />
      <NavItem icon={FiUsers} label="Audience" />
      <Divider borderColor="gray.600" />
      <NavItem icon={FiSettings} label="Settings" />
    </VStack>
  </Box>
)
