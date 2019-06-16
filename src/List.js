import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';


class List extends React.Component {
    constructor(props) {
        super(props)

          this.showUserDetails = this.showUserDetails.bind(this);
    }


    showUserDetails(id) {
        let item = this.props.items.find(item => item.id === id);
        this.props.clearBookmarkId
        this.props.history.push({
            pathname: `/list/${id}`,
            state: {
                item
            }
        })
    }

    render() {
        const { error, isLoaded, items } = this.props;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className='list-container'>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Username</th> 
                                <th>E-mail</th>
                                <th>Address</th>
                            </tr>
                        </thead>
                        <tbody className='list-items'>
                        {items.map((item, i) => (
                            <tr key={i} className='item'>
                                <td className='name' onClick={() => this.showUserDetails(item.id)}>{item.name}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                                <td>{item.address.city}, {item.address.state} - {item.address.zipcode}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            )
        }
    }
}

export default List;