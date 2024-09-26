import { useState } from 'react';
import Avatar from './Avatar';
import { Student as StudentProps } from './types';

export default function Student({ name, id, removeHoveredStudent }: StudentProps & { removeHoveredStudent: (id: string) => void } ) {
    const [ hidden, setHidden ] = useState<boolean>(true);

    return(
        <section className="studentCard" onMouseEnter={() => setHidden(false)} onMouseLeave={() => setHidden(true)}>
            <h2>{name}</h2>
            <p>id: {id}</p>
            <Avatar name={name}/>
            {hidden ? null : <button onClick={ () => removeHoveredStudent(id) }>REMOVE STUDENT?</button>}
        </section>
    );

}