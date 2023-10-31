class App extends React.Component{
    render(){
        return(
            <div>
                <Title
                    name = "Marz' Slot Machine"
                />
                <Machine
                    s1 = "🍋"
                    s2 = "🍋"
                    s3 = "🍋"
                    color = "rgba(124, 255, 25)"
                    backgroundColor = "rgba(0, 0, 0, 0.5)"
                />
                <Machine
                    s1 = "🍇"
                    s2 = "🍇"
                    s3 = "🍇"
                    color = "rgba(124, 255, 25)"
                    backgroundColor = "rgba(125, 0, 24, 0.5)"
                />
                <Machine
                    s1 = "🍉"
                    s2 = "🍉"
                    s3 = "🍉"
                    color = "rgba(124, 255, 25)"
                    backgroundColor = "rgba(24, 16, 143, 0.5)"
                />
                <Machine
                    s1 = "🍉"
                    s2 = "🍋"
                    s3 = "🍉"
                    color = "rgba(255, 0, 0)"
                    backgroundColor = "rgba(157, 200, 200, 0.5)"
                />
                <Machine
                    s1 = "🍋"
                    s2 = "🍇"
                    s3 = "🍋"
                    color = "rgba(255, 0, 0)"
                    backgroundColor = "rgba(0, 123, 200, 0.5)"
                />
                <Machine
                    s1 = "🍋"
                    s2 = "🍇"
                    s3 = "🍉"
                    color = "rgba(255, 0, 0)"
                    backgroundColor = "rgba(0, 66, 200, 0.5)"

                    /*s1 = "🍇"
                    s2 = "🍋"
                    s3 = "🍉"*/
                />

                
            </div>
        );
    }
}

ReactDOM.render(<App/>,document.getElementById('root'));