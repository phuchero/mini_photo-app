import 'bootstrap/dist/css/bootstrap.css';
// import Banner from '../../../../components/Banner';
// import Images from '../../../../Constant/images';
import Banner from 'components/Banner';
import Images from 'Constant/images';
import PhotoList from 'features/Photo/components/PhotoList';
import { removePhoto } from 'features/Photo/photoSlice';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Container } from 'reactstrap';


function MainPage(props) {
    const photos = useSelector(state => state.photos);
    const dispatch = useDispatch();
    const history = useHistory();
    console.log('history ',history);

    const handlePhotoEditClick = (photo) => {
        console.log('Edit: ', photo);
        const editPhotoUrl = `photos/${photo.id}`;
        history.push(editPhotoUrl);

    }

    const handlePhotoRemoveClick = (photo) => {
        console.log('Remove: ', photo);
        const removePhotoId = photo.id;
        //payload chính là thằng removePhotoId
        const action = removePhoto(removePhotoId);
        dispatch(action);
    }


    return (
        <div className="photo-main">
            <Banner title="16 TYPH ON THE MIC !" backgroundUrl={Images.THEME_CAPTURE} />

            <Container className="text-center">
                <div className='py-5'>
                    <Link to="/photos/add">Add new photo</Link>

                </div>

                <PhotoList
                    photoList={photos}
                    onPhotoEditClick={handlePhotoEditClick}
                    onPhotoRemoveClick={handlePhotoRemoveClick}

                />

            </Container>


        </div>


    );
}

export default MainPage;