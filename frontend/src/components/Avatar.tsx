type AvatarProps = {
    name: string
};

export default function Student(props: AvatarProps) {
    const { name = "Name" } = props;

    return(
        <p>Forbokstav: {name[0]}</p>
    );

}