import { useRouter } from 'next/router'
import PaginationButtons from './PaginationButtons';

function SearchResults({ results }) {
    const router = useRouter();

    return (
        <div className="mx-auto w-full px-3 sm:pl-[2%] md:pl-[14%] lg:pl-52">
            <p className="text-gray-600 text-md mt-3 mb-5">About {results.searchInformation?.formattedTotalResults} results ({results.searchInformation?.formattedSearchTime} seconds)</p>
            {results.items.map((result) => (
                <div key={result.link} className="max-w-xl mb-5">
                    <div className="group cursor-pointer">
                        <a href={`${result.link}`}
                         className="text-sm" >
                            {result.formattedUrl}
                        </a>
                        <a href={`${result.link}`}>
                            <h2 className="truncate text-xl text-blue-800 font-medium group-hover:underline">{result.title}</h2>
                        </a>
                    </div>
                    <p className='line-clamp-2'>{result.snippet}</p>
                </div>
            ))}
<PaginationButtons/>
        </div>
    )
}

export default SearchResults
