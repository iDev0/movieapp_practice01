import React from 'react'
import styled from 'styled-components/native'


const Container = styled.View`
    flex : 1;
    justify-content : center;
    background-color : black;
`;

const Text = styled.Text`
    color : white;
`;



const MoviesPresenter = ({nowPlaying}) => {
    return (
        <Container>
            <Text>Hello</Text>
        </Container>
    )
}

export default MoviesPresenter
