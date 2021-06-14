import React, { useState } from 'react'
import { uploadAvatar } from '../../lib/firebase';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

function Upload({ userImage, onSelectImage }) {
  const [isModal, setIsModal] = useState(false);
  const active = isModal ? "is-active" : "";
  const [imageUrl, setImageUrl] = useState(userImage);

  const handleImage = async event => {
    const avatar = event.target.files[0];
    const imageUrl = await uploadAvatar(avatar);
    onSelectImage(imageUrl);
    setImageUrl(imageUrl);
  };

  const handleClick = () => {
    setIsModal(!isModal);
  };

  const ImageViewer = () => {
    if (!imageUrl) {
      return <i class="fas fa-user"></i>
    } else {
      return (
        <div>
          <img alt="" style={{ width: `600px` }} title="" className="rounded-circle img-thumbnail isTooltip" src={imageUrl} data-original-title="Usuario" />
        </div>
      )
    }
  }
  const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    input: {
        display: 'none',
    },
  }));
  const classes = useStyles();
  return (
    <div className="App">
       <ImageViewer />
						<div className={classes.root}>
                            <input
								onChange={handleImage}
                                accept="image/*"
                                className={classes.input}
                                id="contained-button-file"
                                multiple
                                type="file"
                            />
                            <label htmlFor="contained-button-file">
                                <Button onClick={handleClick} variant="contained" color="primary" component="span">
                                    アップロード
                                </Button>
                            </label>
                        </div>
    </div >
  );
}

export default Upload 