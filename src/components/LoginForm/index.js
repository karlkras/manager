import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    emailChanged,
    passwordChanged,
    loginUser
} from '../../actions';
import { Button, Card, CardSection, Input, ErrorMsg, Spinner, FormView } from '../common';

class LoginForm extends Component {
    onButtonPress = () => {
        const { email, password } = this.props;
        this.props.loginUser(email, password);
    }

    renderButton = () => {
        if (this.props.loading) {
            return <Spinner size='large' />;
        }
        return (
            <Button 
                onPress={this.onButtonPress}
            >
                Login
            </Button>
        );
    }

    renderErrorMsg = () => (
        this.props.error ?
        (<ErrorMsg message={this.props.error} />)
        : null
    )

    render() {
        return (
            <FormView>
                <Card>
                    <CardSection>
                        <Input
                            label='Email'
                            autoCapitalize={'none'}
                            placeholder='email@thedomain.com'
                            onChangeText={email => this.props.emailChanged(email)}
                            value={this.props.email}
                            autoCorrect={false}
                        />
                    </CardSection>
                    <CardSection>
                        <Input
                            secureTextEntry
                            autoCapitalize='none'
                            label='Password'
                            placeholder='thepassword'
                            onChangeText={
                                password => this.props.passwordChanged(password)
                            }
                            value={this.props.password}
                            autoCorrect={false}
                        />
                    </CardSection>
                    {this.renderErrorMsg()}
                    <CardSection>
                        {this.renderButton()}
                    </CardSection>
                </Card>
            </FormView>
        );
    }
}

const mapStateToProps = ({ auth }) => {
    const { email, password, loading, error } = auth;

    return { email, password, loading, error };
};

export default connect(
    mapStateToProps,
    {
        emailChanged,
        passwordChanged,
        loginUser
    })(LoginForm);
