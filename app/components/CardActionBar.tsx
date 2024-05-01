'use client'

import { News } from "../lib/NewsApi";
import Link from "next/link";


interface CardActionBarProps{
    news : News;
}

const CardActionBar: React.FC<CardActionBarProps> = ({news})=>{

    let convertObjectToUrlEnc = () => {
        let url = "";
        for(let key in news) {
            //@ts-ignore
            url+= key + "=" + news[key] + "&"
        }
        return url
    }

    const share = () => {
        if (navigator.share) {
            navigator.share({
              title: news.title,
              text: news.description,
              url: news.url,
            })
        } else {
            alert('Your device does not support sharing');
        }
    }

    return(
        <div className="space-x-4 flex justify-end">
            <button onClick={share} className=" border-2 border-violet-600 px-3 py-2">Share</button>
            <Link target="_blank" href={news.url || ""}>
                <button className="bg-violet-600 text-white px-3 py-3">Show Details</button>
            </Link>

            <Link href={`/${news.title}?${convertObjectToUrlEnc()}`}>
            <button className="bg-violet-600 text-white px-3 py-3">Open</button>
            </Link>           
                
            
        </div>
    );
} 

export default CardActionBar