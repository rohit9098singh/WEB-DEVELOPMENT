import React, { useRef, useEffect } from "react";
import Dropzone from "dropzone";
import { UploadSimple } from "@phosphor-icons/react";

function FileDropZone({
  acceptedFiles = "images/*,video/*",
  maxFileSize = 16 * 1024 * 1024,
  url = "/files/post",
}) {
  const dropzoneRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    Dropzone.autoDiscover = false;
    if (!dropzoneRef.current && formRef.current) {
      dropzoneRef.current = new Dropzone(formRef.current, {
        url,
        acceptedFiles,
        maxFilesize: maxFileSize / (1024 * 1024),
      });
    }

    return () => {
      if (dropzoneRef.current) {
        dropzoneRef.current.destroy();
        dropzoneRef.current = null;
      }
    };
  }, []);

  return (
    <div className="bg-white dark:bg-boxdark p-6.5 rounded-md shadow-lg cursor-pointer">
    <form
      action={url} // Ensure action attribute matches the upload URL
      ref={formRef}
      id="upload"
      className="dropzone rounded-md !border-dashed !border-bodydark1 bg-gray hover:border-primary 
        dark:!border-strokedark dark:bg-graydark dark:hover:border-primary flex flex-col justify-center items-center"
    >
      <div className="dz-message mb-2.5 flex justify-center flex-col items-center space-y-2">
        <div className="shadow-10 flex h-15 w-15 items-center justify-center bg-gray-200 
          dark:bg-black dark:text-white text-black rounded-full">
          <UploadSimple size={24} />
        </div>
        <span className="font-medium text-black dark:text-white">
          Drop files here to upload
        </span>
      </div>
    </form>
  </div>
  
  );
}

export default FileDropZone;
