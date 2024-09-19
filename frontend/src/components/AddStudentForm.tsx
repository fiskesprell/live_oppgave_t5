import './styles/grid.css';

type AddStudentFormProps = {
    onAddStudent: (event: React.FormEvent<HTMLFormElement>) => void;
}

export default function AddStudentForm({ onAddStudent }: AddStudentFormProps) {

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