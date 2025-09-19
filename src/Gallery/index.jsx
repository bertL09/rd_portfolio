import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CategoryContainer } from '../CategoryContainer';

export function Gallery() {
    const { id } = useParams();
    const [items, setItems] = useState([]);

    const addGalleryItems = (data) => {
        if (id) {
            // filtrujemy po kategorii
            const filtered = data.filter((element) => element?.category === id);
            setItems(filtered);
        } else {
            // brak id → wszystkie projekty
            setItems(data);
        }
    };

    useEffect(() => {
      fetch(import.meta.env.BASE_URL + 'gallery.json')
            .then((res) => res.json())
            .then(addGalleryItems);
    }, [id]);

    return (
        <div>
            <h1>Gallery {id ? `: ${id}` : ''}</h1>
            <CategoryContainer categories={items} />
        </div>
    );
}
