import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {create} from '../actions/index';
import {actual} from '../actions/index';


class TodoList extends React.Component {

    state = {
        create: false,
    }

    create = () => {
       this.setState({create: true})
    }

    add = () => {
        this.setState({create: false})
    }

    cancellation = () => {
        this.setState({create: false})
    }

    prioretiList () {
        return(
            <select className="todo-list-options">
                <option>Приоретет 1</option>
                <option>Приоретет 2</option>
                <option>Приоретет 3</option>

            </select>
        )
    }

    addList () {
        if (this.state.create){
            
            return(
                <div className="todo-list-addList">
                    <input id="textarea" className="todo-list-input" placeholder="Введите вашу задачу" minLength="3"></input><br/>
                    {this.prioretiList()}<br/>
                    <div>
                        <button className="btn btn-success todo-list-button-create" onClick={() => this.props.create(
                                                                                        {name: document.getElementById("textarea").value, actual: 3})}>Саздать задание!</button>

                        <button className="btn btn-warning todo-list-button-delete" onClick={this.cancellation}>Отмена!</button>

                    </div>
                        
                </div>
            )

        } else {
            return(
                <div className="container todo-list-addList">
                    <button className="btn btn-success todo-list-button-add" onClick={this.create}>Add task!</button>
                    {this.activeFinish()}
                </div>
            )
        }
    }
   
    // updateFinishList () {
    // //     console.log("hello");

    //     return () => this.props.actual(!this.props.activeFinish);
        
    // }

    activeFinish () {
        return(
            <div className="active-finish" >
                <div className="onoffswitch">
                    <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="myonoffswitch"  onClick={() => this.props.actual(!this.props.activeFinish)}/>
                    {/* <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="myonoffswitch"  
                        onClick={this.updateFinishList}/> */}

                    <label className="onoffswitch-label" htmlFor="myonoffswitch" >
                        <span className="onoffswitch-inner"></span>
                        <span className="onoffswitch-switch"></span>
                    </label>
                </div>
            </div>
        )
    };

    

    render() {
        return(
            <div>
                {this.addList()}<hr/>
                {/* <button onClick={this.setLocalstorage}>Add</button> */}
            </div>
        )
    }
}


function mapStateToProps (state) {
    return {
        activeFinish: state.activeFinish
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      create: (i) => dispatch(create(i)),
      actual: (i) => dispatch(actual(i))
    };
  }

export default connect(mapStateToProps, mapDispatchToProps) (TodoList);