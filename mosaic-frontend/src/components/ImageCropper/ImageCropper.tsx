import Cropper from 'react-easy-crop'
import {useState} from 'react'
import Button from '../Button/Button'
import {getCroppedImg} from '../../utils/cropImage'
import styles from './ImageCropper.module.css'


interface Props {
    image: string
    onCropComplete: (file: File) => void
}


export default function ImageCropper({image, onCropComplete}: Props) {
    const [crop, setCrop] = useState({x: 0, y: 0})
    const [zoom, setZoom] = useState(1)
    const [croppedArea, setCroppedArea] = useState<any>(null)


    const finishCrop = async () => {
        const blob = await getCroppedImg(image, croppedArea)
        const file = new File([blob], 'post.jpg', {type: 'image/jpeg'})
        onCropComplete(file)
    }


    return (
        <div className={styles.wrapper}>
            <div className={styles.cropper}>
                <Cropper
                    image={image}
                    crop={crop}
                    zoom={zoom}
                    aspect={1}
                    onCropChange={setCrop}
                    onZoomChange={setZoom}
                    onCropComplete={(_, areaPixels) => setCroppedArea(areaPixels)}
                />
            </div>
            <Button onClick={finishCrop}>
                Apply crop
            </Button>
        </div>
    )
}