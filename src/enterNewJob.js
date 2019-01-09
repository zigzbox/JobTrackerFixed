import React, { Component } from 'react'




class enterNewJob extends Component {
    render() {
        return (
            <div>
                <div><h1>Glen's Job App Tracker</h1></div>
                <div>
                    <label htmlFor='companyName'>Company Name:</label>
                    <input id='companyName' type='text' />
                    <label htmlFor='dateContacted'>Date Contacted:</label>
                    <input id='dateContacted' type='date' />
                    <label htmlFor='nameOfContact'>Name of Contact:</label>
                    <input id='nameOfContact' type='text' />
                    <label htmlFor='companyNumber'>Company Phone Number:</label>
                    <input id='companyNumber' type='phonenumber' />
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