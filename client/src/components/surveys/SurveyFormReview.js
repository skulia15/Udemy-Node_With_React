import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import formFields from './formFields';
import React from 'react';
import _ from 'lodash';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
    const reviewFields = _.map(formFields, ({ name, label }) => {
        return (
            <div key={name}>
                <label htmlFor={label}>
                    {label}
                </label>
                <div id={label}>
                    {formValues[name]}
                </div>
            </div>
        );
    })
    return (
        <div>
            <h5>Please confirm your entries</h5>
            {reviewFields}
            <button
                className="yellow darken-3 white-text btn-flat"
                onClick={onCancel}>
                Back
            </button>
            <button
                onClick={() => submitSurvey(formValues, history)}
                className="green btn-flat right white-text"
            >
                Send Survey
                <i className="material-icons right">email</i>
            </button>
        </div>
    );
};

function mapStateToProps(state) {
    return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));