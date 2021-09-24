import React from 'react'

type GreetProps = {
    name: string,
    messageCount: number,
    isLooggedIn: boolean
}
const Greet=(props: GreetProps)=> {
    return (
        <div>

            <h2>
                {
                    props.isLooggedIn?
                    `Hello ${props.name} ! You have ${props.messageCount} unread messages.`:
                    `Welcome guest`
                    
                }
            </h2>
        </div>
    )
}

export default Greet;
