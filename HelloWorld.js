import React from 'React';

//function 함수에 props 파라미터를 추가하고
//props.name 값을 JSX 안에서 렌더링

function HelloWorld(props) {
    return(
        <h1>Hello {props.name}!</h1>
    );
}

export default HelloWorld;