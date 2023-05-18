import { useEffect, useState } from 'react';

import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Home = () => {
    const [data,setData]=useState();
    const [filterData,setFilterData]=useState([]);
    const getData = async () => {
        const data1 = await axios.get('https://api.theinnerhour.com/v1/customers/resources/articles/list?page=1&limit=15');
        setFilterData(data1.data.data);
        setData(data1.data.data);
    }
    useEffect(() => {
        getData();
    }, []);
    console.log(filterData);
    
    
    const filter=(e)=>{
        const keyword=e.target.value;
        console.log(keyword);
        if (keyword !== '') {
            const results = filterData.filter((article) => {
              return article.title.toLowerCase().includes(keyword.toLowerCase());
            });
            setFilterData(results);
          } else {
            setFilterData(data);
          }
        
    }

    return (
        <div>
            <div className='mx-14'>
                <img src="/logo.png" alt="" className='h-20' />
            </div >
            <div className='bg-slate-200 h-auto'>
                <div className='flex h-auto overflow-hidden'>
                    <h1 className='mr-60 ml-36 my-3 text-3xl '>All Articles</h1>
                    <form>
                        <div className='relative flex items-center ml-96'>
                            <SearchIcon className='w-5 h-5 absolute ml-5 my-2 ' />
                            <input type='text' className='pl-10 w-96 pr-3 py-2 font-semibold placeholder-gray-600 text-block rounded-2xl border-none m-3 ring-2 ring-blue-500 hover:ring-2 hover:ring-teal-400' onChange={filter} placeholder='Search Blog' />
                        </div>
                    </form>

                </div>
                <div className='grid grid-cols-4 gap-4 mt-5 '>
                    
                    {filterData && filterData.length>0 &&  filterData.map((article) => (
                       <Link to={`/${article.slug}`} className='mt-4 mx-8 mb-8 bg-white h-auto shadow-md rounded-2xl shadow-white hover:pointer'>
                        <div className=' bg-white h-auto shadow-md rounded-2xl shadow-white hover:pointer'>
                            <img src={article.thumb} className=' w-96 rounded-t-2xl' alt='' />
                            <h6 className='m-3'>{article.title}</h6>
                            <p className='m-3'>{article.short_description}</p>
                        </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>

    );
}

export default Home;
