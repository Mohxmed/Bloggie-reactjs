function ImageUpload({ selectedImage, handleImageChange, handleRemoveImage }) {
  return (
    <div className="flex gap-3 items-center w-full">
      {/* Image Preview */}
      {selectedImage && (
        <div>
          <img
            src={selectedImage}
            alt="Selected"
            className=" h-16 w-16 object-cover rounded-lg"
          />
        </div>
      )}
      {/* Input File */}
      <div className="flex items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-lg h-16 grow">
        <label
          htmlFor="file-upload"
          className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none"
        >
          {selectedImage ? (
            <span onClick={handleRemoveImage} className="text-sm">
              Remove Image & Replace
            </span>
          ) : (
            <span className="text-sm">Upload Image (Optional)</span>
          )}

          <input
            disabled={selectedImage}
            id="file-upload"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="sr-only"
          />
        </label>
      </div>
    </div>
  );
}

export default ImageUpload;
