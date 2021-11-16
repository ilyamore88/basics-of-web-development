import React, {useEffect} from 'react';

export default function ComponentWithUseEffect(props) {
    useEffect(() => {
        console.log('Component did mount');

        return () => {
            console.log('Component will unmount');
        }
    }, []);

    useEffect(() => {
        console.log('Component did update');
    }, [props.count]);

    return (
        <div>I'm with useEffect</div>
    )
}