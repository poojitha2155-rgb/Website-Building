import { DirectoryPage } from '@/components/portal/directory-page'
import { courses } from '@/lib/data'

export const metadata = { title: 'Courses | Future Akshita Company', description: 'Build job-ready skills with flexible courses.' }

export default function CoursesPage() {
  return <DirectoryPage kind="courses" items={courses} />
}
