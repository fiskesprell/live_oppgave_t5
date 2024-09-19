import React from 'react';
import { useState } from 'react';
import Student from './Student';
import './styles/grid.css';
import { Student as StudentProps } from './types';
import AddStudentForm from './AddStudent';

type GridProps = {
    studentList: StudentProps[]
}

let listOfStudents: StudentProps[] = [
    {
        id: "You are not sending in student list correctly.",
        name: "EPIC FAIL - Grid.tsx"
    }
]

export default function Grid(props: GridProps) {
    const { studentList = listOfStudents } = props;

    let [students, setStudents] = useState<StudentProps[]>(studentList)

    const onAddStudent = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Hente form
        const form = event.target as HTMLFormElement | null;
        if (!form){console.log("NO FORM!!")}
        const formData = new FormData(form);
        // Henter data fra form
        const studentName = formData.get("studentName");
        const studentId = formData.get("studentId");
        // Om data ikke er der så skal den ikke fortsette
        if (!studentName || typeof studentName !== "string" || !studentId) return;

        // Legger til ny student i listen
        setStudents(prevStudents => [
            ...prevStudents,
            {
                id: studentId,
                name: studentName,
            }
        ]);

        // Fjerner tekst fra form-en
        form.reset()
    }

    return (
        <div>
            <AddStudentForm />

            <section id="studentsGridContainer">
                <h1>List of students:</h1>
                <div id="studentsGridCards">
                    {students.map((student) => (
                        <Student key={student.id} name={student.name} id={student.id}/>
                    ))}
                </div>
            </section>
        </div>
    );
}