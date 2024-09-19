import Grid from './components/Grid';
import { Student as StudentProps } from './components/types'

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
      id: "student_id_4",
      name: "Maggie"
  }
]

function App() {
  return (
    <section>
      {/* <h1>Start</h1>
      <Student name="Jan" id="22a" />
      <Avatar name="Coomer" /> */}
      <Grid studentList={listOfStudents}/>
    </section>
  );

}

export default App;
