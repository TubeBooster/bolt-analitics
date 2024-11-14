import { Box, Text } from '@chakra-ui/react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { month: 'Jan', listeners: 620 },
  { month: 'Feb', listeners: 680 },
  { month: 'Mar', listeners: 750 },
  { month: 'Apr', listeners: 720 },
  { month: 'May', listeners: 850 },
  { month: 'Jun', listeners: 920 }
].map(item => ({ ...item, listeners: item.listeners * 1000 }))

export const TrendChart = () => {
  return (
    <Box bg="gray.800" p={6} borderRadius="lg" h="400px">
      <Text fontSize="lg" fontWeight="bold" mb={4}>Listener Trends</Text>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={data}>
          <XAxis dataKey="month" stroke="#A0AEC0" />
          <YAxis stroke="#A0AEC0" />
          <Tooltip 
            contentStyle={{ backgroundColor: '#2D3748', border: 'none' }}
            labelStyle={{ color: '#A0AEC0' }}
          />
          <Line 
            type="monotone" 
            dataKey="listeners" 
            stroke="#4299E1" 
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  )
}
