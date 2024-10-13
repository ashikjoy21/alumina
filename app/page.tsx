import { Metadata } from 'next'
import dynamic from 'next/dynamic'

const LoginPage = dynamic(() => import('@/components/LoginPage'), { ssr: false })

export const metadata: Metadata = {
  title: 'Login | Alumina',
  description: 'Login to your Alumina account',
}

export default function Home() {
  return <LoginPage />
}
