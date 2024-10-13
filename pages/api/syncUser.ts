import { NextApiRequest, NextApiResponse } from 'next'
import { getAuth } from 'firebase-admin/auth'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { uid, email, displayName } = req.body

  try {
    const auth = getAuth();
    
    // Update the user in Firebase
    await auth.updateUser(uid, {
      email: email || undefined,
      displayName: displayName || undefined,
    });

    // Get the updated user data
    const updatedUser = await auth.getUser(uid);

    res.status(200).json({
      uid: updatedUser.uid,
      email: updatedUser.email,
      displayName: updatedUser.displayName,
    })
  } catch (error) {
    console.error('Error syncing user:', error)
    res.status(500).json({ message: 'Error syncing user' })
  }
}
