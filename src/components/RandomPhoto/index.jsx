import React from 'react';
import PropTypes from 'prop-types';
import './RandomPhoto.scss';
import { Button } from 'reactstrap';
RandomPhoto.propTypes = {
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    onImageUrlChange: PropTypes.func,
    onRandomButtonBlur: PropTypes.func,
};

RandomPhoto.defaultProps = {
    name: '',
    imageUrl: '',
    onImageUrlChange: null,
    onRandomButtonBlur: null,
};

const getRandomImageUrl = () => {
    const ramdomId = Math.trunc(Math.random() * 2000);
    return `https://picsum.photos/id/${ramdomId}/300/300`;
};

function RandomPhoto(props) {
    const { name, imageUrl, onImageUrlChange, onRandomButtonBlur } = props;


    const handleRandomPhotoClick = async () => {
        if (onImageUrlChange) {
            const randomUrl = getRandomImageUrl();
            onImageUrlChange(randomUrl);
        }
    };

    return (
        <div className="random-photo">
            <div className="random-photo__button">
                <Button
                    color='success'
                    outline
                    name={name}
                    onClick={handleRandomPhotoClick}
                    onBlur={onRandomButtonBlur}
                >
                    Random a photo
                </Button>
            </div>
            <div className="random-photo__photo">
                {imageUrl &&
                    (<img
                        src={imageUrl}
                        alt="Hình có vấn đề"
                        // chổ này bug lỗi nếu hình lỗi
                        onError={handleRandomPhotoClick}
                    />
                    )}
            </div>
        </div>
    );
}

export default RandomPhoto;