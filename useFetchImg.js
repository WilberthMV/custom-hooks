import React, { useEffect, useState } from 'react'

export const useFetchImg = (url) => {
    // console.log(url);
    const [state, setState] = useState({
        //data:null,
        img: null,
        isLoading: true,
        hasError: null,
    })

    const getFetch = async () => {

        setState({
            ...state,
            isLoading: true,
        });

        const resp = await fetch(url);
        const data = await resp.json();
        const img = data[0].img;
        //console.log(data);

        setState({
            img,
            isLoading: false,
            hasError: null,
        })
    }


    useEffect(() => {
        getFetch();
    }, [url])


    return {
        //data:state.data,
        img: state.img,
        isLoading: state.isLoading,
        hasError: state.hasError,
    };
}
