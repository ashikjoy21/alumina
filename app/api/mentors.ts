import type { NextApiRequest, NextApiResponse } from 'next'

type Mentor = {
  id: number
  name: string
  expertise: string
  avatar: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Mentor[]>
) {
  const mentors: Mentor[] = [
    { id: 1, name: 'Alice Johnson', expertise: 'Web Development', avatar: 'https://example.com/avatar1.jpg' },
    { id: 2, name: 'Bob Smith', expertise: 'Data Science', avatar: 'https://example.com/avatar2.jpg' },
    { id: 3, name: 'Carol Williams', expertise: 'UX Design', avatar: 'https://example.com/avatar3.jpg' },
    { id: 4, name: 'David Brown', expertise: 'Machine Learning', avatar: 'https://example.com/avatar4.jpg' },
    { id: 5, name: 'Eva Davis', expertise: 'Cybersecurity', avatar: 'https://example.com/avatar5.jpg' },
  ]

  res.status(200).json(mentors)
}