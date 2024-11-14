import { Grid, GridItem, Heading, SimpleGrid } from '@chakra-ui/react'
import { StatsCard } from '../components/StatsCard'

export const Dashboard = () => {
  return (
    <Grid gap={8}>
      <GridItem>
        <Heading size="lg" mb={6} color="gray.100">
          Overview
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
          <StatsCard
            title="Total Followers"
            value="2.7M"
            change={12}
          />
          <StatsCard
            title="Monthly Listeners"
            value="892K"
            change={-3}
          />
          <StatsCard
            title="Track Plays"
            value="1.2M"
            change={8}
          />
          <StatsCard
            title="Engagement Rate"
            value="4.8%"
            change={1.2}
          />
        </SimpleGrid>
      </GridItem>
    </Grid>
  )
}
