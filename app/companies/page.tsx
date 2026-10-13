import { DirectoryPage } from '@/components/portal/directory-page'
import { companies } from '@/lib/data'

export const metadata = { title: 'Companies | Akshitha Edutech', description: 'Discover verified companies and international employers.' }

export default function CompaniesPage() {
  return <DirectoryPage kind="companies" items={companies} />
}
