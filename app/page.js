import StudentInfo from "./student-info";

import Link from "next/link";


export default function page() {
  return(
    <main>
        <h1>CPRG 306: Web Development 2 - Assignments</h1>
        <StudentInfo />
        <div>
          <Link href="week2">
            Week 2
          </Link>
        </div>
    </main>
  )
}

