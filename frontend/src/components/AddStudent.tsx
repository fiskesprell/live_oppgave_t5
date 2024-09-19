import { useState } from 'react';
import './styles/grid.css';
import { Student as StudentProps } from './types';

type AddStudentFormProps = {
    studentList: StudentProps[]
}

export default function AddStudentForm(onAddStudent) {

    return (
        <form onSubmit={onAddStudent}>
            <label htmlFor="studentName">Students name: </label>
            <input type="text" id="studentName" name="studentName"/>

            <label htmlFor="studentId">Student ID: </label>
            <input type="text" id="studentId" name="studentId"/>

            <button type="submit">Legg til i listen</button>
        </form>
    );
}