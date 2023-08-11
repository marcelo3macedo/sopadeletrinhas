function resizeImage({ originalWidth, originalHeight, newWidth }:any) {
  const aspectRatio = originalWidth / originalHeight;
  const newHeight = newWidth / aspectRatio;

  return {
    width: newWidth,
    height: newHeight,
  };
}

function sliceIntoBlocks(arr:any, blockSize:number) {
  if (!arr) {return;}

  return arr.reduce((result:any, _:any, index:number) => {
    if (index % blockSize === 0) {
      result.push(arr.slice(index, index + blockSize));
    }
    return result;
  }, []);
}

export { resizeImage, sliceIntoBlocks };
