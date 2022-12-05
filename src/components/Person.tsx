type PersonProps = {
    name: {
        first: String
        second: String
    }
}

export const Person = (props: PersonProps) => {
    return (
        <div>{props.name.first} {props.name.second}</div>
    )
}