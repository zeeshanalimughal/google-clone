import head from "next/head"
import Header from "../components/Header"
import SearchResults from "../components/SearchResults"
import {API_KEY,CONTEXT_KEY} from '../keys'
import Response from "../Respons"
import {useRouter} from 'next/router'
function Search({results}) {

    const router = useRouter();

    console.log(results);
    return (
        <div>
            <title>{router.query.term} - Google Search</title>
            <link rel="icon" href="/favicon.ico" />

            {/* Header */}
            <Header/>


            {/* Search Results */}
<SearchResults results={results}/>
        </div>
    )
}

export default Search

export async function getServerSideProps(context){
    const startIndex = context.query.start || '0';


    const useDummyData = false;
    const data = useDummyData ? Response : await fetch(`https://www.googleapis.com/customsearch/v1/?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`)
    .then(response => response.json());

    //Afetr server has rendered , Pass the result to the client

    return {
        props:{
            results:data
        }
    }
}