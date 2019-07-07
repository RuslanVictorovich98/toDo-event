import React, {Component} from 'react';
// import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {remove} from '../actions';
import {edit} from '../actions';


class DetailsList extends React.Component {

    eventList () {
        return this.props.list.map((list, i) => {
            return(
                <div key={i++}>
                    
                </div>
            )
        })
    }


    editList (name, i) {
        return () => this.props.edit({name: prompt("Edit task", name)}, i);

    }   

    setLocalstorage () {
        let x = [
            {
                name: "Buy cars!",
                actual: 2,
            },
            {
                name: "Repair bus!",
                actual: 2,
            }
        ];

        localStorage.setItem('actual',JSON.stringify(x) )
    }

    showList() { // вывод всех песен и добавление песни в глобальный STORE
        return this.props.list.map((list, i) =>    {
          return (
            <div className="container">
                <div key={i} className="row all_music_main_list">
                    <input type="radio"  className="col-sm-1"/><span className="col-sm">{list.name}</span> 
                    <img className="col-sm-1"  onClick={this.editList(list.name, i)} height="20px;" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNTAiIGhlaWdodD0iNTAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2YxYzQwZiI+PGcgaWQ9InN1cmZhY2UxIj48cGF0aCBkPSJNMTYwLjIxNTMxLDExLjc4NDY5Yy0zLjI2NTMxLC0zLjI2NTMxIC03LjU1MTg4LC00LjkwNDY5IC0xMS44Mzg0NCwtNC45MDQ2OWMtNC4yODY1NiwwIC04LjU3MzEzLDEuNjM5MzggLTExLjgzODQ0LDQuOTA0NjljMCwwIC0wLjI0MTg3LDAuMjI4NDQgLTAuNTUwOTQsMC41NTA5NGMtMC4wMjY4NywwLjAyNjg3IC0wLjA2NzE5LDAuMDQwMzEgLTAuMDk0MDYsMC4wNjcxOWwtMTIxLjA5ODc1LDEyMS4wODUzMWMtMC40MTY1NiwwLjQzIC0wLjcyNTYyLDAuOTU0MDYgLTAuODg2ODcsMS41NDUzMWwtNi45MDY4OCwyNS43NTk2OWMtMC4zMjI1LDEuMTgyNSAwLjAxMzQ0LDIuNDQ1NjIgMC44ODY4OCwzLjMxOTA2YzAuNjU4NDQsMC42NTg0NCAxLjUzMTg3LDEuMDA3ODEgMi40MzIxOSwxLjAwNzgxYzAuMjk1NjMsMCAwLjU5MTI1LC0wLjA0MDMxIDAuODg2ODgsLTAuMTIwOTRsMjUuNzU5NjksLTYuOTA2ODhjMC41OTEyNSwtMC4xNjEyNSAxLjExNTMxLC0wLjQ3MDMxIDEuNTQ1MzEsLTAuOTAwMzFsMTIxLjA4NTMxLC0xMjEuMDcxODhjMC4wNDAzMSwtMC4wNDAzMSAwLjA1Mzc1LC0wLjA5NDA2IDAuMDgwNjMsLTAuMTM0MzdjMC4zMDkwNiwtMC4zMDkwNiAwLjUyNDA2LC0wLjUyNDA2IDAuNTI0MDYsLTAuNTI0MDZjNi41NTc1LC02LjU0NDA2IDYuNTU3NSwtMTcuMTQ2MjUgMC4wMTM0NCwtMjMuNjc2ODh6TTE1NS4zNTA5NCwxNi42NDkwNmMzLjg0MzEzLDMuODQzMTIgMy44NDMxMywxMC4xMDUgMCwxMy45NDgxMmMtMS4xNDIxOSwxLjEyODc1IC0yLjEwOTY5LDIuMTA5NjkgLTIuOTQyODEsMi45NDI4MWwtMTMuOTQ4MTMsLTEzLjk0ODEyYzEuNTg1NjMsLTEuNTg1NjMgMi45NDI4MSwtMi45NDI4MSAyLjk0MjgxLC0yLjk0MjgxYzEuODU0MzcsLTEuODY3ODEgNC4zNDAzMSwtMi44ODkwNiA2Ljk3NDA2LC0yLjg4OTA2YzIuNjMzNzUsMCA1LjEwNjI1LDEuMDM0NjkgNi45NzQwNiwyLjg4OTA2ek0xOS4yODI4MSwxNDEuNTY0MDZsMTEuMTUzMTIsMTEuMTUzMTJsLTE1LjI1MTU2LDQuMDk4NDR6Ij48L3BhdGg+PC9nPjwvZz48L2c+PC9zdmc+" />
                    {/* <img className="col-sm-1"  onClick={() => this.editList(list.name, i)} height="20px;" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNTAiIGhlaWdodD0iNTAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2YxYzQwZiI+PGcgaWQ9InN1cmZhY2UxIj48cGF0aCBkPSJNMTYwLjIxNTMxLDExLjc4NDY5Yy0zLjI2NTMxLC0zLjI2NTMxIC03LjU1MTg4LC00LjkwNDY5IC0xMS44Mzg0NCwtNC45MDQ2OWMtNC4yODY1NiwwIC04LjU3MzEzLDEuNjM5MzggLTExLjgzODQ0LDQuOTA0NjljMCwwIC0wLjI0MTg3LDAuMjI4NDQgLTAuNTUwOTQsMC41NTA5NGMtMC4wMjY4NywwLjAyNjg3IC0wLjA2NzE5LDAuMDQwMzEgLTAuMDk0MDYsMC4wNjcxOWwtMTIxLjA5ODc1LDEyMS4wODUzMWMtMC40MTY1NiwwLjQzIC0wLjcyNTYyLDAuOTU0MDYgLTAuODg2ODcsMS41NDUzMWwtNi45MDY4OCwyNS43NTk2OWMtMC4zMjI1LDEuMTgyNSAwLjAxMzQ0LDIuNDQ1NjIgMC44ODY4OCwzLjMxOTA2YzAuNjU4NDQsMC42NTg0NCAxLjUzMTg3LDEuMDA3ODEgMi40MzIxOSwxLjAwNzgxYzAuMjk1NjMsMCAwLjU5MTI1LC0wLjA0MDMxIDAuODg2ODgsLTAuMTIwOTRsMjUuNzU5NjksLTYuOTA2ODhjMC41OTEyNSwtMC4xNjEyNSAxLjExNTMxLC0wLjQ3MDMxIDEuNTQ1MzEsLTAuOTAwMzFsMTIxLjA4NTMxLC0xMjEuMDcxODhjMC4wNDAzMSwtMC4wNDAzMSAwLjA1Mzc1LC0wLjA5NDA2IDAuMDgwNjMsLTAuMTM0MzdjMC4zMDkwNiwtMC4zMDkwNiAwLjUyNDA2LC0wLjUyNDA2IDAuNTI0MDYsLTAuNTI0MDZjNi41NTc1LC02LjU0NDA2IDYuNTU3NSwtMTcuMTQ2MjUgMC4wMTM0NCwtMjMuNjc2ODh6TTE1NS4zNTA5NCwxNi42NDkwNmMzLjg0MzEzLDMuODQzMTIgMy44NDMxMywxMC4xMDUgMCwxMy45NDgxMmMtMS4xNDIxOSwxLjEyODc1IC0yLjEwOTY5LDIuMTA5NjkgLTIuOTQyODEsMi45NDI4MWwtMTMuOTQ4MTMsLTEzLjk0ODEyYzEuNTg1NjMsLTEuNTg1NjMgMi45NDI4MSwtMi45NDI4MSAyLjk0MjgxLC0yLjk0MjgxYzEuODU0MzcsLTEuODY3ODEgNC4zNDAzMSwtMi44ODkwNiA2Ljk3NDA2LC0yLjg4OTA2YzIuNjMzNzUsMCA1LjEwNjI1LDEuMDM0NjkgNi45NzQwNiwyLjg4OTA2ek0xOS4yODI4MSwxNDEuNTY0MDZsMTEuMTUzMTIsMTEuMTUzMTJsLTE1LjI1MTU2LDQuMDk4NDR6Ij48L3BhdGg+PC9nPjwvZz48L2c+PC9zdmc+" /> */}


                    <img className="col-sm-1" onClick={() => this.props.remove(i)} height="20px;" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjQiIGhlaWdodD0iMjQiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgaWQ9IlR3by1Ub25lIiBmaWxsPSIjZTc0YzNjIj48cmVjdCB4PSItMS4wMDAxNCIgeT0iNS42NzA1OCIgdHJhbnNmb3JtPSJyb3RhdGUoLTQ1KSBzY2FsZSg3LjE2NjYsNy4xNjY2KSIgd2lkdGg9IjIiIGhlaWdodD0iMjIuNiI+PC9yZWN0PjxyZWN0IHg9Ii0xMS4zMDAxNCIgeT0iMTUuOTcwNTgiIHRyYW5zZm9ybT0icm90YXRlKC00NSkgc2NhbGUoNy4xNjY2LDcuMTY2NikiIHdpZHRoPSIyMi42IiBoZWlnaHQ9IjIiPjwvcmVjdD48L2c+PC9nPjwvc3ZnPg=="/>
                </div>
            </div>

          );
        }
      );
    }

    render() {
        if (localStorage.length > 0) {
            return(
                <div className="container">
                    <div className="row">
                        <h4 className="col-sm-11">Task:</h4><h3 className="btn btn-light" onClick={this.setLocalstorage}>{this.props.list.length}</h3>
                    </div>
                    {this.showList()}
                </div>
            ) 
        } else {
           return (
            <div className="container">
                    <div className="row">
                        <h4 className="col-sm-11">Task:</h4><h3 className="btn btn-light" onClick={this.setLocalstorage}>0</h3>
                    </div>
                    {/* {this.showList()} */}
                </div>
            )
        }
        

    }

}

function mapStateToProps (state) {
    return {
        list: state.list
    }
}

function mapDispatchToProps (dispath) {
    return {
        remove: (i) => dispath(remove(i)),
        edit: (i, id) => dispath(edit(i, id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsList);

//<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNTAiIGhlaWdodD0iNTAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2YxYzQwZiI+PGcgaWQ9InN1cmZhY2UxIj48cGF0aCBkPSJNMTYwLjIxNTMxLDExLjc4NDY5Yy0zLjI2NTMxLC0zLjI2NTMxIC03LjU1MTg4LC00LjkwNDY5IC0xMS44Mzg0NCwtNC45MDQ2OWMtNC4yODY1NiwwIC04LjU3MzEzLDEuNjM5MzggLTExLjgzODQ0LDQuOTA0NjljMCwwIC0wLjI0MTg3LDAuMjI4NDQgLTAuNTUwOTQsMC41NTA5NGMtMC4wMjY4NywwLjAyNjg3IC0wLjA2NzE5LDAuMDQwMzEgLTAuMDk0MDYsMC4wNjcxOWwtMTIxLjA5ODc1LDEyMS4wODUzMWMtMC40MTY1NiwwLjQzIC0wLjcyNTYyLDAuOTU0MDYgLTAuODg2ODcsMS41NDUzMWwtNi45MDY4OCwyNS43NTk2OWMtMC4zMjI1LDEuMTgyNSAwLjAxMzQ0LDIuNDQ1NjIgMC44ODY4OCwzLjMxOTA2YzAuNjU4NDQsMC42NTg0NCAxLjUzMTg3LDEuMDA3ODEgMi40MzIxOSwxLjAwNzgxYzAuMjk1NjMsMCAwLjU5MTI1LC0wLjA0MDMxIDAuODg2ODgsLTAuMTIwOTRsMjUuNzU5NjksLTYuOTA2ODhjMC41OTEyNSwtMC4xNjEyNSAxLjExNTMxLC0wLjQ3MDMxIDEuNTQ1MzEsLTAuOTAwMzFsMTIxLjA4NTMxLC0xMjEuMDcxODhjMC4wNDAzMSwtMC4wNDAzMSAwLjA1Mzc1LC0wLjA5NDA2IDAuMDgwNjMsLTAuMTM0MzdjMC4zMDkwNiwtMC4zMDkwNiAwLjUyNDA2LC0wLjUyNDA2IDAuNTI0MDYsLTAuNTI0MDZjNi41NTc1LC02LjU0NDA2IDYuNTU3NSwtMTcuMTQ2MjUgMC4wMTM0NCwtMjMuNjc2ODh6TTE1NS4zNTA5NCwxNi42NDkwNmMzLjg0MzEzLDMuODQzMTIgMy44NDMxMywxMC4xMDUgMCwxMy45NDgxMmMtMS4xNDIxOSwxLjEyODc1IC0yLjEwOTY5LDIuMTA5NjkgLTIuOTQyODEsMi45NDI4MWwtMTMuOTQ4MTMsLTEzLjk0ODEyYzEuNTg1NjMsLTEuNTg1NjMgMi45NDI4MSwtMi45NDI4MSAyLjk0MjgxLC0yLjk0MjgxYzEuODU0MzcsLTEuODY3ODEgNC4zNDAzMSwtMi44ODkwNiA2Ljk3NDA2LC0yLjg4OTA2YzIuNjMzNzUsMCA1LjEwNjI1LDEuMDM0NjkgNi45NzQwNiwyLjg4OTA2ek0xOS4yODI4MSwxNDEuNTY0MDZsMTEuMTUzMTIsMTEuMTUzMTJsLTE1LjI1MTU2LDQuMDk4NDR6Ij48L3BhdGg+PC9nPjwvZz48L2c+PC9zdmc+" width="20px;"/><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjQiIGhlaWdodD0iMjQiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgaWQ9IlR3by1Ub25lIiBmaWxsPSIjZTc0YzNjIj48cmVjdCB4PSItMS4wMDAxNCIgeT0iNS42NzA1OCIgdHJhbnNmb3JtPSJyb3RhdGUoLTQ1KSBzY2FsZSg3LjE2NjYsNy4xNjY2KSIgd2lkdGg9IjIiIGhlaWdodD0iMjIuNiI+PC9yZWN0PjxyZWN0IHg9Ii0xMS4zMDAxNCIgeT0iMTUuOTcwNTgiIHRyYW5zZm9ybT0icm90YXRlKC00NSkgc2NhbGUoNy4xNjY2LDcuMTY2NikiIHdpZHRoPSIyMi42IiBoZWlnaHQ9IjIiPjwvcmVjdD48L2c+PC9nPjwvc3ZnPg=="/>