import React, { Component } from 'react';
import Entry_Detail from '../component/Entry_Detail';
import Entry_List from '../component/Entry_List';
import calls from '../utils/calls';

class Entries extends Component {
    
    constructor(props){
        super(props);

        this.state = { selectedEntry: null };

    }

    onEntryClick(selectedEntry){
        this.setState({selectedEntry: selectedEntry}, () => {
            console.log(this.state);
        });
    }

    render() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-4">
                    <ul className="list-group">
                        <Entry_List 
                         entries={calls}
                         onEntryClick={(selectedEntry) => this.onEntryClick(selectedEntry)}
                        />
                    </ul>
                </div>
                <div className="col-sm-8">
                    <Entry_Detail selectedEntry={this.state.selectedEntry}/>                   
                </div>
            </div>
        </div>
    );
  }
}


export default Entries;
