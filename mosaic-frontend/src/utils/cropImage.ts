export async function getCroppedImg(
    imageSrc: string,
    crop: { x: number; y: number; width: number; height: number }
): Promise<Blob> {
    const image = new Image()
    image.src = imageSrc
    await new Promise(resolve => (image.onload = resolve))


    const canvas = document.createElement('canvas')
    canvas.width = crop.width
    canvas.height = crop.height


    const ctx = canvas.getContext('2d')!


    ctx.drawImage(
        image,
        crop.x,
        crop.y,
        crop.width,
        crop.height,
        0,
        0,
        crop.width,
        crop.height
    )


    return new Promise(resolve => {
        canvas.toBlob(blob => blob && resolve(blob), 'image/jpeg')
    })
}