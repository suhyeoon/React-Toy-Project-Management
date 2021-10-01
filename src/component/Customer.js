import React from 'react';

class Customer extends React.Component {
    render() {
        return (
            <div>
                <CustomerProfile
                    id={this.props.id}
                    image={this.props.image}
                    name={this.props.name}
                />
                <CustomerInfo
                    phone={this.props.phone}
                    area={this.props.area}
                />
            </div>
        );
    }
}

class CustomerProfile extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.image} alt="profile" />
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        );
    }
}


class CustomerInfo extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.phone}</p>
                <p>{this.props.area}</p>
            </div>
        );
    }
}


export default Customer;