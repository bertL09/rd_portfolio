import { useEffect, useState } from "react";
import { CategoryContainer } from "../CategoryContainer";
import { CategoryItem } from "../CategoryItem";
import { ContactMe } from "../ContactMe";
import { Header } from "../Header/Header";

export function Home() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch(import.meta.env.BASE_URL + 'categories.json')
            .then((res) => res.json())
            .then((data) => setCategories(data));
    }, []);

    return (
        <>
            <Header />
            <CategoryContainer categories={categories} />
            <ContactMe />
        </>
    );
}


