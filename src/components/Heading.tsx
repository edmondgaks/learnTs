type HeadingProps = {
    children: String
}

export const Heading = (props: HeadingProps) => {
    return <h2>{props.children}</h2>
}