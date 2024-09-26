import { FormEvent, useState } from 'react';
import Student from './Student';
import './styles/grid.css';
import { Student as StudentProps } from './types';
import AddStudentForm from './AddStudentForm';

type GridProps = {
    students: any,
    removeHoveredStudent: (id: string) => void,
    setStudents: React.Dispatch<React.SetStateAction<StudentProps[]>>
}

export default function Grid( {students , removeHoveredStudent, setStudents } : GridProps ) {
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
        <div id="gridContainer">
            <AddStudentForm onAddStudent={onAddStudent}/>
            <section id="studentsGridContainer">
                <h1>List of students:</h1>
                <div id="studentsGridCards">
                    {students.map((student) => (
                        <Student name={student.name} id={student.id} removeHoveredStudent={removeHoveredStudent} />
                    ))}
                </div>
            </section>
        </div>
    );
}