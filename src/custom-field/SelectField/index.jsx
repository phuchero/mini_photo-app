import React from 'react';
import PropTypes from 'prop-types';
import { FormFeedback, FormGroup, Input, Label } from 'reactstrap';
import Select from 'react-select';
import { ErrorMessage } from 'formik';

SelectField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    options: PropTypes.array,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool
};

SelectField.defaultProps = {
    options: [],
    label: '',
    placeholder: '',
    disabled: false
};




function SelectField(props) {

    const { field, form,
        options, label, placeholder, disabled } = props;

    const { name, value, onChange, onBlur } = field;
    const selectedOption = options.find(option => option.value === value);



    const { errors, touched } = form;
    const showError = errors[name] && touched[name];

    const handleSelectedOptionChange = (selectedOption) => {

        // nếu không null thì trả về giá trị, nếu null thì trả về chính nó
        const selectedValue = selectedOption ? selectedOption.value : selectedOption;

        const changeEvent = {
            target: {
                name: name,
                value: selectedValue
            }
        };
        field.onChange(changeEvent);
    }



    return (

        <FormGroup>
            {label && <Label for={name}>{label}</Label>}
            <Select
                id={name}
                {...field}
                value={selectedOption}
                //onchange input khác onchange của field
                onChange={handleSelectedOptionChange}


                placeholder={placeholder}
                isDisabled={disabled}
                options={options}
                className={showError ? 'is-invalid' : ''}

            >

            </Select>
            <ErrorMessage name={name} component={FormFeedback} />
        </FormGroup>
    );
}

export default SelectField;