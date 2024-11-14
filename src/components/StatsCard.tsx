import { Box, Stat, StatLabel, StatNumber, StatHelpText, StatArrow } from '@chakra-ui/react'

interface StatsCardProps {
  title: string
  value: string | number
  change?: number
  timeframe?: string
}

export const StatsCard = ({ title, value, change, timeframe }: StatsCardProps) => (
  <Box bg="gray.800" p={6} borderRadius="lg">
    <Stat>
      <StatLabel color="gray.400">{title}</StatLabel>
      <StatNumber fontSize="3xl" fontWeight="bold" my={2}>
        {value}
      </StatNumber>
      {change && (
        <StatHelpText>
          <StatArrow type={change > 0 ? 'increase' : 'decrease'} />
          {Math.abs(change)}% {timeframe || 'vs last month'}
        </StatHelpText>
      )}
    </Stat>
  </Box>
)
