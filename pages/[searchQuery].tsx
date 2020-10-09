import React from 'react';
import TemplatePage from '../hoc/TemplatePage';
import ProductList from '../components/ProductList';
import { useRouter } from 'next/router';

export default function Listing() {
    const router = useRouter();
    const { searchQuery } = router.query;

    return (
        <TemplatePage>
            <div>
                {searchQuery}
            </div>
        </TemplatePage>
    )
}