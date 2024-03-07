import './BeanListPage.scss';
import BeanCard from '../../components/BeanCard/BeanCard';

export default function BeanListPage({ beanList }) {

    if (!beanList) {
        return (<h1>Loading</h1>
        )
    }

    return (
        <div className='bean-list'>
            {beanList.map((bean) => (
                <BeanCard id={bean.beanId} image={bean.imageUrl} name={bean.flavorName} description={bean.description} />
            ))}
        </div>
    );
} 