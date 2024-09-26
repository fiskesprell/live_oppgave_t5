import { useState } from 'react';
import Grid from './components/Grid';
import { Student as StudentProps } from './components/types'
import Total from './components/Total';

let listOfStudents: StudentProps[] = [
  {
      id: "student_id_1",
      name: "Homer"
  },
  {
      id: "student_id_2",
      name: "Marge"
  },
  {
      id: "student_id_3",
      name: "Bart"
  },
  {
      id: "student_id_4",
      name: "Lisa"
  },
  {
      id: "student_id_5",
      name: "Maggie"
  }
]



function App() {
  let [students, setStudents] = useState<StudentProps[]>(listOfStudents)

  const removeHoveredStudent = (id: string) => {
    setStudents((prevStudents) => prevStudents.filter((student) => student.id !== id))
  }

  return (
    <section>
      <Total total={students.length}/>
      <Grid students={students} removeHoveredStudent={removeHoveredStudent} setStudents={setStudents}>
          <h2>~Eksempel på bruk av children~</h2>
      </Grid>
    </section>
  );

}

export default App;
