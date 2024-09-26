import { Alert, Button, TextInput } from 'flowbite-react'
import React, { useEffect, useRef, useState } from 'react'
import {useSelector} from 'react-redux'
import {getDownloadURL, getStorage, ref, uploadBytesResumable} from 'firebase/storage';
import { app } from '../firebase';
import {CircularProgressbar} from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

export default function DashProfile() {
    const {currentUser} = useSelector(state =>state.user);
    const [imageFile, setImageFile] = useState(null);
    const [imageFileUrl, setImageFileUrl] = useState(null);
    const [imageFileUploadProgress, setImageFileUploadProgress] = useState(null);
    const [imageFileUploadError, setImageFileUploadError] = useState(null);
    
    const filePickerRef = useRef();
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if(file){
            
            setImageFile(file);
            setImageFileUrl(URL.createObjectURL(file));

        }

    };
    useEffect(() => {
        if (imageFile){

            uploadImage();
        }
    }, [imageFile]);

    const uploadImage = async () => {
        setImageFileUploadError(null);
        setImageFile(null);
        setImageFileUrl(null);

        const storage = getStorage(app);
        const fileName = new Date().getTime() + imageFile.name;
        const storageRef = ref(storage , fileName);
        const uploadTask = uploadBytesResumable(storageRef, imageFile);
        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const progress = 
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

                    setImageFileUploadProgress(progress.toFixed(0));
            },
            (error) => {
                setImageFileUploadError('could not upload image');
                setImageFileUploadProgress(null);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>{
                    setImageFileUrl(downloadURL);    
                });

            }

        );

    };
    
    return (
    <div className='max-w-lg w-full mx-auto  p-3'>
        <h1 className='text-center my-7 font-semibold text-3xl'>Profile</h1>
        <form className='flex flex-col gap-4'>
            <input type="file"  accept='image/*' onChange={handleImageChange} ref={filePickerRef} hidden/>
            <div className='relative w-32 h-32 self-center cursor-pointer shadow-md rounded-full' onClick={()=> filePickerRef.current.click()}>

                {imageFileUploadProgress && (
                    <CircularProgressbar value={imageFileUploadProgress || 0} text={`${imageFileUploadProgress}%`}
                    strokeWidth={5}
                    styles={{ 
                        root:{
                            width: '100%',
                            height:'100%',
                            position:'absolute',
                            top:0,
                            left:0,

                        },
                        path:{
                            stroke:`rgba(62,152,199, ${imageFileUploadProgress/100})`,
                        },
                    }}
                    />
                )}
                <img className={`rounded-full w-full h-full border-8 border-[lightgray] object-cover ${imageFileUploadProgress && imageFileUploadProgress < 100 && 'opacity-60'}`} src={imageFileUrl || currentUser.profilePicture} alt="user" />
            </div>
            {imageFileUploadError && <Alert color='failure'> {imageFileUploadError}</Alert>}

            <TextInput type='text' id='username' placeholder='username' defaultValue={currentUser.username}/>
            <TextInput type='email' id='email' placeholder='email' defaultValue={currentUser.email}/>
            <TextInput type='password' id='password' placeholder='password' />
            <Button type='submit' gradientDuoTone="purpleToBlue" outline>
                Update
            </Button>
        </form>
        <div className='text-red-700 flex justify-between mt-5'>
            <span className='cursor-pointer'>Delete Account</span>
            <span className='cursor-pointer'>Sign Out</span>
        </div>
    </div>
  )
}
