type GreetProps = {
    name: String
    messageCount: number
    isLoggedIn: boolean
}

export const Greet = (props: GreetProps) => {
    return (
        <div>
            <h2>{props.isLoggedIn ? "Hello {props.name} You have {props.messageCount} unread messages." : "Hello Guest"}</h2>
        </div>
    )
}