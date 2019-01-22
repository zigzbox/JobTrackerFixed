import React, { Component } from 'react'




class enterNewJob extends Component {

    state = {
        resumeJobs: [],
        companyNameInProgress: '',
        dateContactedInProgress: '',
        nameOfContactInProgress: '',
        compnayNumberInProgress: '',
        interviewInProgress: '',

    }

    handleCompanyNameChange = (event) => {
        this.setState({
            companyNameInProgress: event.target.value
        })
    }

    handleDateContactedChange = (event) => {
        this.setState({
            dateContactedInProgress: event.target.value
        })
    }

    handleNameOfContactChange = (event) => {
        this.setState({
            nameOfContactInProgress: event.target.value
        })
    }

    handleCompanyNumberChange = (event) => {
        this.setState({
            compnayNumberInProgress: event.target.value
        })
    }

    handleInterviewInProgressChange = (event) => {
        this.setState({
            interviewInProgress: event.target.value
        })
    }



    render() {
        return (
            <div>
                <div><h1>Glen's Job App Tracker</h1></div>
                <div>

                    <label htmlFor='companyName'>Company Name:</label>
                    <input id='companyName' type='text' value={this.state.companyNameInProgress} onChange={this.state.handleCompanyNameChange} />

                    <label htmlFor='dateContacted'>Date Contacted:</label>
                    <input id='dateContacted' type='date' value={this.state.dateContactedInProgress} onChange={this.state.handleDateContactedChange}/>

                    <label htmlFor='nameOfContact'>Name of Contact:</label>
                    <input id='nameOfContact' type='text' value={this.state.nameOfContactInProgress} onChange={this.state.handleNameOfContactChange} />

                    <label htmlFor='companyNumber'>Company Phone Number:</label>
                    <input id='companyNumber' type='phonenumber' value={this.state.compnayNumberInProgress} onChange={this.state.handleCompanyNumberChange} />

                    <label htmlFor='interveiw'>Interview:</label>
                    <span>Yes</span>
                    <input id='interveiw' type='checkbox' />
                    <span>No</span>
                    <input id='interveiw' type='checkbox' />

                    <div>
                        <input type='submit' />
                    </div>
                </div>

                <div>
                    <h3>Recent Job Apps</h3>
                    {/* this is where ill pull from the back end from the database of jobs and display 10 most recent */}
                </div>


            </div>
        )
    }
}

export default enterNewJob