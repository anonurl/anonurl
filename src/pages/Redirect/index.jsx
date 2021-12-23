import { Container, Redirect } from "./style"
import { get, post } from 'axios';
import {useEffect, useState} from "react";

export default () => {
    const [result, setResult] = useState({});
    
    useEffect(async () => {
        await get('https://api-anonurl.herokuapp.com/api/redirect' + window.location.pathname)
        
        .then(async r => {
            setResult(r);

            await post('https://api-anonurl.herokuapp.com/api/update', {
                id: window.location.pathname.split('/')[1]
            });
        })
        
        .catch(e => {
            console.log(e)
            window.location.href = '/404';
        
        });
    
    }, [window]);

    const handleGo = () => window.location.href = result.data;

    const handleCancel = () => window.location.href = '/';

    return (
        <Container className="container">
            <Redirect className="app">
                <h2>You'll be redirected to: {result.data}</h2>
                <button onClick={() => handleGo()}>Agree</button>
                <button onClick={() => handleCancel()}>Cancel</button>
            </Redirect>
        </Container>
    )
}
