import React from 'react';
import ReactDOM from 'react-dom';

const data = [
    { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
    { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
    { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
    { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
    { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
    { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
];

class ProductRow extends React.Component {
    render() {
        return (
            <li>
                <span>{this.props.name}</span>
                <span>{this.props.price}</span>
            </li>
        )
    }
}

class ProductCategory extends React.Component {
    render() {
        return (
            <div>{this.props.category}</div>
        )
    }
}

class TitleComponent extends React.Component {
    render() {
        return (
            <div>
                <span>Name</span>
                <span>Price</span>
            </div>
        )
    }
}

class SearchComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            stocked: false
        }

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleStockChange = this.handleStockChange.bind(this);
    }

    handleStockChange(event){
        this.setState({
            stocked : event.target.checked
        })
    }

    handleTextChange(event){
        this.setState({
            searchText : event.target.value
        });
    }
    render() {
        return (
            <div>
                <input type='text' placeholder='Search...' onChange={this.handleTextChange} value={this.state.searchText}></input>
                <div>
                    <input id='stokeCheck' type='checkbox' onChange={this.handleStockChange} value={this.state.stocked}></input>
                    <label htmlFor='stokeCheck'>Only show products in stock</label>
                </div>
            </div>
        )
    }
}

class ProductMaintanence extends React.Component {
    render() {
        const diffCategories = [...new Set(data.map(item => item.category))]
        return (
            <div>
                <SearchComponent></SearchComponent>
                <TitleComponent></TitleComponent>
            </div>
        )
    }
}

ReactDOM.render(
    <ProductMaintanence></ProductMaintanence>,
    document.getElementById('root')
)