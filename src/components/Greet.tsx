type GreetProps = {
    name: String
    messageCount: number
}

export const Greet = (props: GreetProps) => {
    return (
        <div>
            <h2>Hello {props.name} You have {props.messageCount} unread messages.</h2>
        </div>
    )
}