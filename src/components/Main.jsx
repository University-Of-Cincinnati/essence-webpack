import React from 'react/addons';

import  {Row, Col, Grid} from 'react-bootstrap';
import Essence from 'essence/src/js/components.js';

var Btn = Essence.Btn;
var Text = Essence.Text;
var Icon = Essence.Icon;
var Progress = Essence.Progress;
var BtnItem = Essence.BtnItem;
var Input = Essence.Input;
var InputItem = Essence.InputItem;
var Card = Essence.Card;
var CardItem = Essence.CardItem;
var CardItemHeader = Essence.CardItemHeader;
var CardItemContent = Essence.CardItemContent;
var CardItemFooter = Essence.CardItemFooter;
var Snackbar = Essence.Snackbar;
var SnackbarItem = Essence.SnackbarItem;
var Toast = Essence.Toast;
var ToastItem = Essence.ToastItem;

var Brand = React.createClass({
	getInitialState: function() {
    return {
      disFooter: false,
      isOpen: false
    };
  },
  render() {
    return (
			<div>
			  <Row>
			    <Col sm={4} xs={4}>
			      <Card>
			        <CardItem>
			          <CardItemContent>
			            <Icon name='action-info'/>
			            <Text href='#' type='a'>Text on the left</Text>
			          </CardItemContent>
			        </CardItem>
			      </Card>
			      <Card>
			        <CardItem>
			          <CardItemContent>
			            Content: can be used to include any component
			          </CardItemContent>
			        </CardItem>
			      </Card>
			    </Col>
			  </Row>
			  <Btn>
			    <BtnItem classes={'raised'} label='Label Default' rippleEffect={true}
			      tooltip='Tooltip Default' type='default'/>
			    <BtnItem classes={'raised'} label='Label Primary' rippleEffect={true}
			      tooltip='Tooltip Primary' type='primary'/>
			    <BtnItem classes={'raised'} disabled={true} label='Label Succes' rippleEffect={true}
			      tooltip='Tooltip Succes' type='succes'/>
			    <BtnItem classes={'raised'} label='Label Info' rippleEffect={true}
			      tooltip='Tooltip Info' type='info'/>
			    <BtnItem classes={'raised'} label='Label Warning' rippleEffect={true}
			      tooltip='Tooltip Warning' type='warning'/>
			    <BtnItem classes={'raised'} label='Label Danger' rippleEffect={false}
			      tooltip='Tooltip Danger' type='danger'/>
			  </Btn>
			  <Input>
			    <InputItem classes={'e-input-group has-success'} inputClasses={'e-input empty'}
			      name='label' placeholder='Did you know a bear has 42 teeth' type='text'></InputItem>
			  </Input>
			  <Btn>
			    <BtnItem classes={'raised'} disabled={false} label='Show me Snackbar 1'
			      rippleEffect={true} snackbar='snackbar1' type='primary'></BtnItem>
			    <BtnItem classes={'raised'} disabled={false} label='Show me Snackbar 2'
			      rippleEffect={true} snackbar='snackbar2' type='primary'/>
			    <BtnItem classes={'raised'} disabled={false} label='Show me Snackbar 3'
			      snackbar='snackbar3' type='primary'/>
			    <BtnItem classes={'raised'} disabled={false} label='Toast 1 chicken'
			      rippleEffect={true} toast='toast1' type='succes'></BtnItem>
			    <BtnItem classes={'raised'} disabled={false} label='Toast 2 chicken'
			      rippleEffect={true} toast='toast2' type='succes'/>
			    <BtnItem classes={'raised'} disabled={false} label='Toast 3 chicken' toast='toast3'
			      type='succes'/>
			  </Btn>
			  <Snackbar>
			    <SnackbarItem classes={'snackbar-item'} id={'snackbar1'}>
			      Hello to you
			    </SnackbarItem>
			    <SnackbarItem classes={'snackbar-item'} id={'snackbar2'}>
			      Hello to me
			    </SnackbarItem>
			    <SnackbarItem classes={'snackbar-item'} id={'snackbar3'}>
			      Hello to all of you. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			      Donec eget augue viverra, eleifend elit in, sagittis tellus.
			    </SnackbarItem>
			  </Snackbar>
			  <Toast>
			    <ToastItem classes={'toasts'} id={'toast1'}>
			      Hello to you
			    </ToastItem>
			    <ToastItem classes={'toasts'} id={'toast2'}>
			      Hello to me
			    </ToastItem>
			    <ToastItem classes={'toasts'} id={'toast3'}>
			      Hello to all of you. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			      Donec eget augue viverra, eleifend elit in, sagittis tellus.
			    </ToastItem>
			  </Toast>
			</div>
    );
  },
  handleToggle(isOpen) {
  	this.setState({
  		isOpen: isOpen
  	});
  }
});

export default Brand;
