import React, {Component} from 'react';
import {processInput} from './processInput';

export default class Body extends Component{
    constructor(){
        super()
        this.state = {userInput: "", errMsg: ""};
        this.onChangeInput = this.onChangeInput.bind(this);
        this.onClickProcess = processInput.bind(this);
        if (!Array.isArray) {
            Array.isArray = function(arg) {
                return Object.prototype.toString.call(arg) === '[object Array]';
            };
        }
    }
    showErrorMsg(){
        if(this.state.errMsg) return this.state.errMsg;
    }
    onChangeInput(evt){
        this.setState({userInput: evt.target.value});
    }
    render(){
        return(
            <div>
                <h3 className='heading'>JX-Formatter</h3>
                <div className='app-body'>
                    <textarea 
                        id="user-input"
                        className='textarea-ip' 
                        placeholder="Paste your content here..."
                        value={this.state.userInput}
                        onChange={this.onChangeInput}
                    />
                    <div className='err-msg-wrp'>
                        <span className='err-msg'>{this.showErrorMsg()}</span>
                    </div>
                    <div className='process-wrp'>
                        <span className='process' onClick={() => this.onClickProcess('JSON')}>Beautify JSON</span>
                        <span className='process' onClick={() => this.onClickProcess('XML')}>Beautify XML</span>
                    </div>
                </div>
            </div>
        )
    }
}