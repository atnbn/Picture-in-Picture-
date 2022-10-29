const videoEle = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media stream, pass to video element, then play

async function selectStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoEle.srcObject = mediaStream;
        videoEle.onloadedmetadata = () => {
            videoEle.play();
        }

    } catch (error) {
        //  Catch Error Here
        console.log('error here', error);
    }
}

button.addEventListener('click', async () => {
    // Disable Button
    button.disabled = true;
    // Start Picture in Picture 
    await videoEle.requestPictureInPicture();
    // Reset Button
    button.disabled = false;
});

// onload
selectStream();