ReactDatetimePicker = React.createClass({
  propTypes: {
    configuration: React.PropTypes.string,
    inputProps: React.PropTypes.any,
    value: React.PropTypes.string,
    onChange: React.PropTypes.func,
    extra: React.PropTypes.object
  },
  input (){
    return $(ReactDOM.findDOMNode(this.refs.input));
  },
  componentDidMount() {
    var defaults = DatetimePicker.defaults;
    if (this.props.configuration != null){
      if (DatetimePicker.configurations[this.props.configuration] != null){
        defaults = DatetimePicker.configurations[this.props.configuration];
      }
    }
    var opts = _.extend({}, defaults || {}, this.props.extra || {});
    this.input()
      .datetimepicker(opts)
      .on('dp.change', this.onChange)
      .val(this.props.value);
  },
  componentDidUpdate(){
    this.input().off('dp.change').val(this.props.value).on('dp.change', this.onChange);
  },
  shouldComponentUpdate(nextProps, nextState){
    return this.props.value !== nextProps.value;
  },
  onChange(e){
    if (e.date === false){
      this.props.onChange(undefined);
      return;
    }
    var format = this.input().data("DateTimePicker").format();
    // This might be expensive, but lets prevent
    // spurious updates
    if (this.props.value === e.date.format(format)){
      return;
    }
    this.props.onChange(e.date);
  },
  render() {
    return (<div className="position-relative">
      <input {...this.props.inputProps} ref="input" type="text" />
    </div>);
  }
});

