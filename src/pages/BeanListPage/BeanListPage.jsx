import './BeanListPage';
import axios from 'axios';
import { useEffect, useState } from 'react';
import BeanCard from '../../components/BeanCard/BeanCard';

export default function BeanListPage({ beanList }) {

    if (!beanList) {
        return (<h1>Loading</h1>
        )
    }

    return (
        <div>
            {beanList.map((bean) => (
                <BeanCard id={bean.beanId} image={bean.imageUrl} name={bean.flavorName} description={bean.description} />
            ))}
        </div>
    );
} 