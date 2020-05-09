import React, { Component } from 'react';
/*
const AddToDo = (addToDo) => {
  const [formData, setFormData] = useState([{ content: '' }]);

  const handleChange = (e) => {
    setFormData({ content: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    return addToDo(formData);
  };
  return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>Add new todo:</label>
          <input type="text" onChange={handleChange} />
        </form>
      </div>
  );
};

export default AddToDo; */

export default class AddToDo extends Component {
  state = { content: '' };

  handleChange = (e) => {
    this.setState({ content: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.addToDo(this.state);
    this.setState({
      content: '',
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add new todo:</label>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.content}
          />
        </form>
      </div>
    );
  }
}
