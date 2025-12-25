import {useNavigate} from 'react-router-dom'
import Card from '../components/Card/Card'
import Button from '../components/Button/Button'
import Input from '../components/Input/Input'
import {createPost} from '../api/posts'
import layout from '../styles/layout.module.css'
import typo from '../styles/typography.module.css'
import {useState} from "react";
import ImageCropper from "../components/ImageCropper/ImageCropper.tsx";


export default function CreatePost() {
    const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [imageSrc, setImageSrc] = useState<string | null>(null)
    const [imageFile, setImageFile] = useState<File | null>(null)
    const [loading, setLoading] = useState(false)

    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return

        setImageSrc(URL.createObjectURL(file)) // показываем превью
        setImageFile(null) // кроп ещё не готов
    }

    // Отправка формы
    const submit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!imageFile) {
            return
        }

        try {
            setLoading(true)
            const data = new FormData()
            data.append('title', title)
            data.append('content', content)
            data.append('image', imageFile)

            await createPost(data)

            navigate('/')
        } catch (err) {
            console.error('Error creating post:', err)
            alert('Failed to create post.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className={layout.center} style={{minHeight: '100vh'}}>
            <Card>
                <h1 className={typo.h1}>Новый пост</h1>
                <p className={typo.text}>Делитесь впечатлениями с Mosaic</p>


                <form onSubmit={submit} className={layout.form}>
                    <Input
                        placeholder="Название"
                        maxLength={128}
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        required
                    />


                    <textarea
                        placeholder="Текст поста (максимальное кол-то 256 символов)"
                        maxLength={256}
                        value={content}
                        onChange={e => setContent(e.target.value)}
                        required
                        style={{
                            padding: 16,
                            border: '1px solid var(--color-gray)',
                            resize: 'none',
                            fontSize: 14,
                        }}
                    />
                    {!imageSrc && (
                        <Input
                            type="file"
                            accept="image/*"
                            onChange={onFileChange}
                            required
                        />
                    )}
                    {imageSrc && (
                        <ImageCropper
                            image={imageSrc}
                            onCropComplete={(blob) => {
                                if (!blob) return;
                                const file = new File([blob], "cropped.png", {type: blob.type});
                                setImageFile(file);
                            }}
                        />
                    )}
                    <Button type="submit" disabled={loading || !imageFile}>
                        {loading ? 'Публикация...' : 'Опубликовать'}
                    </Button>
                </form>
            </Card>
        </div>
    )
}