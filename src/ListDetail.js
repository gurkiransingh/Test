import React from 'react';
import { render } from 'react-dom';

class ListDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notFound: false,
            item : {
                address: {
                    city: '',
                    street: '',
                    suite: '',
                    zipcode: ''
                },
                email: '',
                name: '',
                phone: '',
                username: '',
                website: '',
                company: {
                    name: ''
                }
            }
        }
        
    }
    componentDidMount() {
        this.setState({
            notFound: false
        })
        if(this.props.bookmarkedId && this.props.items) {
            let item = this.props.items.find((item) => item.id === this.props.bookmarkedId);
            this.setState({
                item
            })
        } else if (this.props.location.state) {
                this.setState({
                    item: this.props.location.state.item
                })
        } else {
            this.setState({
                notFound: true
            })
        }
    }

    render() {
        let {address: {street, suite, city, zipcode} , company: {name : companyName}, email, name, phone, username, website} = this.state.item;
        return (
            <div>
                {
                    this.state.notFound ? (<div>No records found</div>) : (
                        <table>
                       <thead>
                        <tr>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Website</th>
                            <th>Suite</th>
                            <th>Street</th>
                            <th>City</th>
                            <th>ZipCode</th>
                            <th>Company Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{name}</td>
                            <td>{username}</td>
                            <td>{phone}</td>
                            <td>{email}</td>
                            <td>{website}</td>
                            <td>{suite}</td>
                            <td>{street}</td>
                            <td>{city}</td>
                            <td>{zipcode}</td>
                            <td>{companyName}</td>
                        </tr>
                    </tbody>
                </table>
                    )
                }
                
            </div>
        )
    }
}

export default ListDetail;