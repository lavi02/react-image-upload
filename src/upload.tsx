import React, { useCallback } from "react";
import axios from "axios";
const UploadImage = () => {

    const onUploadImage = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files) {
        return;
      }
  
      const formData = new FormData();
      formData.append('image', e.target.files[0]);
  
      axios({
        baseURL: "localhost:8000",
        url: '/api/v1/upload/test/image',
        method: 'POST',
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }, []);

    return (
        <div className="profile-upload-container">
      <label htmlFor="upload_image" className="upload-label">
        이미지 업로드
      </label>
      <input
        type="file"
        accept="image/*"
        id="upload_image"
        onChange={onUploadImage}
      />
    </div>
    );
}


export default UploadImage;