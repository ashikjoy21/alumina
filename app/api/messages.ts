import type { NextApiRequest, NextApiResponse } from 'next'

type Message = {
  id: number
  sender: string
  content: string
  timestamp: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Message[]>
) {
  const messages: Message[] = [
    {
      id: 1,
      sender: 'Alice Johnson',
      content: 'Hey, how\'s your project coming along?',
      timestamp: '2023-06-15T10:30:00Z',
    },
    {
      id: 2,
      sender: 'Bob Smith',
      content: 'I found a great resource for machine learning. Want me to share it?',
      timestamp: '2023-06-15T11:45:00Z',
    },
    {
      id: 3,
      sender: 'Carol Williams',
      content: 'Don\'t forget about our mentorship session tomorrow!',
      timestamp: '2023-06-15T13:15:00Z',
    },
    {
      id: 4,
      sender: 'David Brown',
      content: 'Thanks for your help with the coding challenge. I really appreciate it!',
      timestamp: '2023-06-15T15:00:00Z',
    },
    {
      id: 5,
      sender: 'Eva Davis',
      content: 'Are you attending the networking event next week?',
      timestamp: '2023-06-15T16:30:00Z',
    },
  ]

  res.status(200).json(messages)
}