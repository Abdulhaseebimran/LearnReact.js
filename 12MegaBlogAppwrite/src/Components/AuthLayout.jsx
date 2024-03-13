import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { UseSelector } from 'react-redux';

export default function Protected({children, authentication = true}) {
    const navigate = useNavigate();
    const [loader, setLoader] = useState(true);
    const authStatus = useSelector((state) => state.auth.status);

    useEffect(() => {
        if (authentication && authStatus !== authentication){
            navigate('/login');
        }else if (!authentication && authStatus !== authentication){
            navigate('/');
        }
        setLoader(false);
    }, [authentication, authStatus, navigate])
  return loader ? <h1>loading...</h1> : <>{children}</>
}

