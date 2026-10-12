import { DirectoryPage } from '@/components/portal/directory-page'
import { institutions } from '@/lib/data'

export const metadata = { title: 'Institutions | Future Akshita Company', description: 'Find universities, colleges and verified learning partners.' }

export default function InstitutionsPage() {
  return <DirectoryPage kind="institutions" items={institutions} />
}
