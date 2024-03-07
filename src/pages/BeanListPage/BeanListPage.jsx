import './BeanListPage.scss';
import BeanCard from '../../components/BeanCard/BeanCard';
import NavBar from '../../components/NavBar/NavBar';

export default function BeanListPage({ beanList,setBeanList }) {

    if (!beanList) {
        return (<h1>Loading</h1>
        )
    }

    return (
        <div>
            <NavBar beanList={beanList} setBeanList={setBeanList}/>
        <h1>Explore Our Beans</h1>
        <div className='bean-list'>
            
            {beanList.map((bean) => (
                <BeanCard id={bean.beanId} image={bean.imageUrl} name={bean.flavorName} description={bean.description} />
            ))}
        </div>
        </div>
    );
} 