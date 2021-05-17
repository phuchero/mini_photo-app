import 'bootstrap/dist/css/bootstrap.css';
import { PHOTO_CATEGORY_OPTIONS } from 'Constant/global';
import InputField from 'custom-field/InputField';
import RandomPhotoField from 'custom-field/RandomPhotoField';
import SelectField from 'custom-field/SelectField';
import { FastField, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, FormGroup, Spinner } from 'reactstrap';
import * as Yup from 'yup';

PhotoForm.propTypes = {
    onSubmit: PropTypes.func,
    initialValues: PropTypes.object.isRequired,
};
PhotoForm.defaultProps = {
    onSubmit: null
}



function PhotoForm(props) {


    const { initialValues, isAddmode } = props;
    // luon luon khoi tao gia tri mac dinh

    const validationSchema = Yup.object().shape({
        title: Yup.string().required('This field is required !'),

        categories: Yup.number().required('Category is required').nullable(),

        photo: Yup.string().when('categories', {
            is: 1,
            then: Yup.string().required('This field is required'),
            otherwise: Yup.string().notRequired()
        }),

    });



    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={props.onSubmit}

        >
            {formikProps => {
                //    do something here

                const { values, errors, touched, isSubmitting } = formikProps;
                console.log("Gía trị submit : ", { values, errors, touched });

                return (
                    <Form>
                        <FastField
                            // props cua fastfield
                            name="title"
                            component={InputField}

                            // props truyen vao 
                            label="Title"
                            placeholder="Title Of Image...."

                        />

                        <FastField
                            // props cua fastfield
                            name="categories"
                            component={SelectField}

                            // props truyen vao 
                            label="categories"
                            placeholder="categories Of Image...."
                            options={PHOTO_CATEGORY_OPTIONS}

                        />

                        <FastField
                            name="photos"
                            component={RandomPhotoField}

                            label="Photo"
                        />

                        <FormGroup>
                            <Button type="submit" color={isAddmode ? "primary" : 'success'}>

                                {isSubmitting && <Spinner size='sm' />}
                                {isAddmode ? 'Add to album' : 'Update your photo'}

                            </Button>

                        </FormGroup>



                    </Form>
                );


            }}
        </Formik>
    );
}

export default PhotoForm;