import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class navBar extends Component {
    render() {
        return(
            <nav>
                <Link to='/jobList'>Job List</Link>
                <Link to='/'>Enter New Job</Link>
                <Link to='/contactList'>Contact List</Link>
            </nav>
        )
    }
}

export default navBar