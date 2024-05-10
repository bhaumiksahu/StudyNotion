const cloudinary=require("cloudinary").v2;

exports.uploadImage=async(file,folder,height,quality)=>{
    const options={folder};
    if(quality){
        options.quality=quality;
    }
    if(height){
        options.height=height;
    }
    options.resource_type="auto";
    return await cloudinary.uploader.upload(file.tempFilePath,options);
}