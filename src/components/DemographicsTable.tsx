import { 
  Table, 
  Thead, 
  Tbody, 
  Tr, 
  Th, 
  Td, 
  Box, 
  Text 
} from '@chakra-ui/react'

const demographics = [
  { ageGroup: '18-24', percentage: 35, engagement: 8.2 },
  { ageGroup: '25-34', percentage: 28, engagement: 6.7 },
  { ageGroup: '35-44', percentage: 20, engagement: 5.4 },
  { ageGroup: '45-54', percentage: 12, engagement: 4.1 },
  { ageGroup: '55+', percentage: 5, engagement: 3.2 }
]

export const DemographicsTable = () => {
  return (
    <Box bg="gray.800" p={6} borderRadius="lg">
      <Text fontSize="lg" fontWeight="bold" mb={4}>Audience Demographics</Text>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Age Group</Th>
            <Th isNumeric>Percentage</Th>
            <Th isNumeric>Engagement Rate</Th>
          </Tr>
        </Thead>
        <Tbody>
          {demographics.map((row) => (
            <Tr key={row.ageGroup}>
              <Td>{row.ageGroup}</Td>
              <Td isNumeric>{row.percentage}%</Td>
              <Td isNumeric>{row.engagement}%</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  )
}
