import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CategoryContainer } from '../CategoryContainer';
import './Gallery.css'

export function Gallery() {
    const { id } = useParams();
    const [items, setItems] = useState([]);

    const addGalleryItems = (data) => {
        console.log(data)
        console.log(id);
        if (id) {
            const filtered = data.filter((element) => element?.category === id);
            console.log(filtered)
            setItems(filtered);
        } else {
            setItems(data);
        }
    };

    useEffect(() => {
        fetch(import.meta.env.BASE_URL + 'gallery.json')
            .then((res) => res.json())
            .then(addGalleryItems);
    }, [id]);
    let galleryTitile = ''
    if (id == 'Design')
        galleryTitile = id;
    else if (id == 'ArtBeyondScreen')
        galleryTitile = 'Art Beyond Screen';
    
    return (
        <div>
            <div className='gallery-header'>Gallery {galleryTitile}</div>
            <CategoryContainer categories={items} />
        </div>
    );
}
