export const  metadata={
  title: "News website",
};



import {Nunito} from 'next/font/google'
import NewsApi from './lib/NewsApi';
import ArticleCard from './components/ArticleCard';
import { title } from 'process';


const inter = Nunito ({subsets : ['latin']})

export default async function Home() {

  const headLines = await NewsApi.getHeadLines();


  return (
    <main className={inter.className}>
      <div className='px-3 py-2 container mx-auto'>
        <h1 className='text-4xl my-6 font-bold font-serif'>HeadLines</h1>
        <div className='grid gap-3 grid-cols-1 md:grid-cols-2'>
          {headLines.map((news) =>(
            <ArticleCard news={news} key={news.title}/>
          ))}
        </div>
      </div>
    </main>
  );
}
