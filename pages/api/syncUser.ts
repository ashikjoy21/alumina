import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { uid, email, displayName } = req.body

  try {
    const user = await prisma.user.upsert({
      where: { firebaseUid: uid },
      update: { email: email || '', name: displayName || '' },
      create: { firebaseUid: uid, email: email || '', name: displayName || '' },
    })

    res.status(200).json(user)
  } catch (error) {
    console.error('Error syncing user:', error)
    res.status(500).json({ message: 'Error syncing user' })
  }
}
