import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';

/**
 * The input is used to create the `dataSource`, so the input always matches three entries.
 */
export default class AutoCompleteExampleSimple extends Component {
  state = {
    dataSource: [],
    result: '...',
  };

  handleUpdateInput = (value) => {
    this.setState({
      dataSource: [
        value,
        value + value,
        value + value + value,
      ],
      result: value ,
    });
  };

  render() {
    return (
      <div>
        <AutoComplete
          hintText='Type anything'
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput}
          floatingLabelText='Full width'
          fullWidth={true}
        />
        <div
        className='result'>
          {this.state.result}
        </div>
      </div>
    );
  }
}
