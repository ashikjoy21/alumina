import type { NextApiRequest, NextApiResponse } from 'next'

type Job = {
  id: number
  title: string
  company: string
  location: string
  description: string
  type: string
  remote: boolean
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Job[]>
) {
  const jobs: Job[] = [
    {
      id: 1,
      title: 'Software Engineer',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      description: 'We are looking for  a talented software engineer to join our team...',
      type: 'Full-time',
      remote: true,
    },
    {
      id: 2,
      title: 'Data Analyst',
      company: 'DataInsights Co.',
      location: 'New York, NY',
      description: 'Seeking a data analyst to help derive meaningful insights from our data...',
      type: 'Full-time',
      remote: false,
    },
    {
      id: 3,
      title: 'UX Designer',
      company: 'DesignMasters LLC',
      location: 'Austin, TX',
      description: 'Join our creative team as a UX designer and help shape the future of our products...',
      type: 'Contract',
      remote: true,
    },
    {
      id: 4,
      title: 'DevOps Engineer',
      company: 'CloudSolutions Inc.',
      location: 'Seattle, WA',
      description: 'We need a skilled DevOps engineer to streamline our deployment processes...',
      type: 'Full-time',
      remote: true,
    },
    {
      id: 5,
      title: 'Product Manager',
      company: 'InnovateTech',
      location: 'Boston, MA',
      description: 'Looking for an experienced product manager to lead our flagship product...',
      type: 'Full-time',
      remote: false,
    },
  ]

  res.status(200).json(jobs)
}