import Avatar from './Avatar';
import { Student as StudentProps } from './types';

export default function Student(props: StudentProps) {
    const { name = "Name", id = 99 } = props;

    return(
        <section className="studentCard">
            <h2>{name}</h2>
            <p>id: {id}</p>
            <Avatar name={name}/>
        </section>
    );

}