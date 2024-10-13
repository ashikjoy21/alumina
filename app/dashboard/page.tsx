import { Metadata } from 'next'
import Dashboard from '@/components/Dashboard'

export const metadata: Metadata = {
  title: 'Dashboard | Alumina',
  description: 'View and manage your Alumina dashboard',
}

export default function DashboardPage() {
  return <Dashboard />
}
