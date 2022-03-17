import { useEffect, useState } from "react";

const useFetch = (url) => {

    const [data, setData]  = useState(null);
    const [fetching, setFetching] = useState(true);
    const [error, setError] = useState(null)
   
    useEffect(() => {
        const abortCont = new AbortController();
        fetch(url)
        .then(res => {
          if(!res.ok){
            throw Error('some kind error don dey')
          }
          return res.json()
        })
        .then((data)=> {
          setData(data)
          setFetching(false)
          setError(null)
        })
        .catch(err => {
          if(err.name == 'AbortError'){
            console.log('fetch aborted');
          } else {
            setFetching(false)
            setError(err.message)
          }
        })
        return () => abortCont.abort();
      }, [])

      return {data, fetching, error}
}

export default useFetch;

