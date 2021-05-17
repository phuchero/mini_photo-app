import Banner from 'components/Banner';
import PhotoForm from 'features/Photo/components/PhotoForm';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './style.scss';
import { addPhoto, updatePhoto } from '../../photoSlice';
import { useHistory, useParams } from 'react-router-dom';
AddEdit.propTypes = {};


const ranDomId = () => {
    return Math.trunc(Math.random() * 100000);
}


function AddEdit(props) {

    const id = ranDomId();

    const dispatch = useDispatch();
    const history = useHistory();

    const { photoId } = useParams();
    // khi không có photo id thì nó là add mode còn có thì edit mode
    // photo có thì nó phủ định thành false
    const isAddmode = !photoId;

    //lấy thông tin từ reduxjs

    const editPhoto = useSelector(state => state.photos.find(photo => photo.id === +photoId));



    const initialValues = isAddmode ? {
        title: '',
        categories: null,
        photos: '',
    } : editPhoto;



    // const isAddMode = !photoId;
    // console.log(isAddMode);

    console.log({ photoId });

    const handleOnSubmit = (value) => {
        return new Promise(resolve => {
            console.log('Form submit', value);



            setTimeout(() => {
                if (isAddmode) {
                    const newPhoto = {
                        ...value,
                        id: id
                    }
                    const action = addPhoto(newPhoto);
                    console.log(action);
                    dispatch(action);
                } else {
                    console.log('value submit',value);
                    const action = updatePhoto(value);
                    dispatch(action);
                }
                history.push('/photos');
                resolve(true);

            }, 2000)

        })



    }



    return (
        <div className="photo-edit">
            <Banner title="Trần Hoàng Phúc" />


            <div className="photo-edit__form">
                <PhotoForm
                    onSubmit={handleOnSubmit}
                    initialValues={initialValues}
                    isAddmode={isAddmode}


                />
            </div>


        </div>
    );
}

export default AddEdit;