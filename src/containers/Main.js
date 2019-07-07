import React from 'react';



class Main extends React.Component {

    state = {
        edit: true,

    }

    edit = () => {
        this.setState ({edit: true});
    }
    
    save = () => {
        this.setState({edit: false})

        let value = this.refs.newText.value; 
        alert(value)
        // this.props.children = this.refs.newText.value;
        
    }

    defaultViev = () => {
        return (
            <div>
                <p>{this.props.children}</p>
                <button onClick={this.edit}>Редактировать</button>
            </div>
        );
    }

    editViev = () => {
        return (
            <div>
                <textarea ref="newText" defaultValue={this.props.children}></textarea>
                <button onClick={this.save}>Save!</button>
            </div>
        );
    }

    render(){
        if (this.state.edit) {
            return this.editViev();
        } else {
           return this.defaultViev();
        }
    }
}

export default Main;