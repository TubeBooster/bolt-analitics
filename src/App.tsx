import { ChakraProvider, Box, Container, VStack, SimpleGrid, Heading, Text, Divider } from '@chakra-ui/react'
import { Navbar } from './components/Navbar'
import { PlatformCard } from './components/PlatformCard'
import { TrendChart } from './components/TrendChart'
import { GeoDistribution } from './components/GeoDistribution'
import { DemographicsTable } from './components/DemographicsTable'
import theme from './theme'

function App() {
  const stats = [
    { label: 'Total Followers', value: '1.2M' },
    { label: 'Monthly Listeners', value: '850K' },
    { label: 'Track Plays', value: '2.5M' },
    { label: 'Engagement Rate', value: '5.2%' }
  ]

  const platforms = [
    { platform: 'Spotify', listeners: '450K', growth: 12 },
    { platform: 'Apple Music', listeners: '280K', growth: 8 },
    { platform: 'SoundCloud', listeners: '95K', growth: -3 },
    { platform: 'YouTube Music', listeners: '125K', growth: 15 }
  ]

  return (
    <ChakraProvider theme={theme}>
      <Box minH="100vh" bg="gray.900">
        <Navbar />
        
        <Container maxW="container.xl" py={8}>
          <VStack spacing={8} align="stretch">
            {/* Overview Stats */}
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
              {stats.map((stat) => (
                <Box key={stat.label} bg="gray.800" p={6} borderRadius="lg">
                  <Text color="gray.400" fontSize="sm">{stat.label}</Text>
                  <Text fontSize="2xl" fontWeight="bold" mt={2}>{stat.value}</Text>
                </Box>
              ))}
            </SimpleGrid>

            <Divider borderColor="gray.700" />

            {/* Trend Chart */}
            <TrendChart />

            {/* Platform Analytics */}
            <Box>
              <Heading size="md" mb={6}>Platform Performance</Heading>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
                {platforms.map((platform) => (
                  <PlatformCard key={platform.platform} {...platform} />
                ))}
              </SimpleGrid>
            </Box>

            <Divider borderColor="gray.700" />

            {/* Geographic Distribution */}
            <GeoDistribution />

            <Divider borderColor="gray.700" />

            {/* Demographics */}
            <DemographicsTable />
          </VStack>
        </Container>
      </Box>
    </ChakraProvider>
  )
}

export default App
