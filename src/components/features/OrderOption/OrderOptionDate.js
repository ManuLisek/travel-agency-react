import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import PropTypes from 'prop-types';

class OrderOptionDate extends React.Component {

    static propTypes = {
      setOptionValue: PropTypes.func,
    }

    constructor(props) {
      super(props);
      this.state = {
        startDate: new Date(),
      };
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
      this.setState({
        startDate: date,
      });
      this.props.setOptionValue(date);
    }

    render() {
      return (
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
        />
      );
    }
}

export default OrderOptionDate; 