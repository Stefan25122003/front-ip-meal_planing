import React from 'react';
import styled from 'styled-components';
import { Layout } from "../Layout"
import backgroundMenu from "../Photos/menu_background.jpeg";

const Container = styled.div`

    display: flex;
    flex-wrap: wrap;
    margin-left: 2em; /* margine stânga pentru ecrane mari */
    margin-right: 2em; /* margine dreapta pentru ecrane mari */

    @media (max-width: 900px) {
        margin-left: 1.5em; /* margine stânga pentru ecrane medii */
        margin-right: 1.5em; /* margine dreapta pentru ecrane medii */
    }

    @media (max-width: 600px) {
        margin-left: 1em; /* margine stânga pentru ecrane mici */
        margin-right: 1em; /* margine dreapta pentru ecrane mici */
    }
`;

export const Box = styled.div`
    border-radius: 10px;
    align-items: start;
    flex: 1 0 auto;
    flex-grow: 1;
    box-sizing: border-box;
    padding: 2-px;
    background-color: #f3f4f1; 
    margin: 1em; /* distanță între cutii */
    text-align: center;
    color: black; 
    width: 30%; /* lățime relativă */
    height: 30vh; /* înălțime relativă */
    overflow: auto; /* adaugă bare de derulare dacă conținutul depășește dimensiunea cutiei */

    // @media (max-width: 900px) {
    //     width: 45%; /* lățime relativă pentru ecrane medii */
    // }

    // @media (max-width: 600px) {
    //     width: 100%; /* lățime relativă pentru ecrane mici */
    }
`;

const SpecialBox = styled(Box)`
    flex: 0 0 auto; /* Impiedica extinderea cutiei speciale */
    background-color: #ced8d0;
    margin: 1em auto; /* aliniere în centru */
    height: 40vh;
    align-items: center; /* aliniere verticală */
    

    @media (max-width: 1200px) {
        width: calc(50% - 4em); /* 50% lățime pentru ecrane mai mici */
    }

    @media (max-width: 600px) {
        width: calc(100% - 2em); /* 100% lățime pentru ecrane foarte mici */
    }
`;


const Paragraph = styled.p`
    text-align: left; /* aliniere la stânga */
    padding-left: 10%; /* spațiu la stânga */
    margin: 2em 0; /* 1em de spațiu deasupra și dedesubt */
    border-bottom: 2px solid #000; /* linie sub fiecare paragraf */
    font-size: 0.9em; /* mărimea implicită a textului */
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    @media (min-width: 600px) {
        font-size: 1.2em; /* mărimea textului este 3em atunci când lățimea ecranului este mai mare de 600px */
        margin:1em;
    }
    
`;
const MondayHeader = styled.div`
    position: sticky;
    top: 0;
    background-color: #d0c7b8;
    width: 100%;
    font-size: 1.2em; /* mărimea implicită a textului */

    @media (min-width: 600px) {
        font-size: 2em; /* mărimea textului este 3em atunci când lățimea ecranului este mai mare de 600px */
    }
    
`;
const TuesdayHeader = styled.div`
    position: sticky;
    top: 0;
    background-color:  #f9ead8;
    width: 100%;
    font-size: 1.2em; /* mărimea implicită a textului */

    @media (min-width: 600px) {
        font-size: 2em; /* mărimea textului este 3em atunci când lățimea ecranului este mai mare de 600px */
    }
`;
const WednesdayHeader = styled.div`
    position: sticky;
    top: 0;
    background-color:  #d8d8ca;
    width: 100%;
    font-size: 1.2em; /* mărimea implicită a textului */

    @media (min-width: 600px) {
        font-size: 2em; /* mărimea textului este 3em atunci când lățimea ecranului este mai mare de 600px */
    }
`;
const ThursdayHeader = styled.div`
    position: sticky;
    top: 0;
    background-color:  #d4c2b4;
    width: 100%;
    font-size: 1.2em; /* mărimea implicită a textului */

    @media (min-width: 600px) {
        font-size: 2em; /* mărimea textului este 3em atunci când lățimea ecranului este mai mare de 600px */
    }
`;
const FridayHeader = styled.div`
    position: sticky;
    top: 0;
    background-color:  #d8d8ca;
    width: 100%;
    font-size: 1.2em; /* mărimea implicită a textului */

    @media (min-width: 600px) {
        font-size: 2em; /* mărimea textului este 3em atunci când lățimea ecranului este mai mare de 600px */
    }
`;
const SaturdayHeader = styled.div`
    position: sticky;
    top: 0;
    background-color:  #ced8d0;
    width: 100%;
    font-size: 1.2em; /* mărimea implicită a textului */

    @media (min-width: 600px) {
        font-size: 2em; /* mărimea textului este 3em atunci când lățimea ecranului este mai mare de 600px */
    }
`;
const SundayHeader = styled.div`
    position: sticky;
    top: 0;
    background-color:  #f9ead8;
    width: 100%;
    font-size: 1.2em; /* mărimea implicită a textului */

    @media (min-width: 600px) {
        font-size: 2em; /* mărimea textului este 3em atunci când lățimea ecranului este mai mare de 600px */
    }
`;
const SpecialHeader = styled.div`
       position: sticky;
    top: 0;
    text-align: center; /* aliniere în centru */
    font-size: 1.2em; /* mărimea implicită a textului */
    font-family: 'Courier New', Courier, monospace;
    font-weight: 700;

    @media (min-width: 600px) {
        font-size: 1.4em; /* mărimea textului este 3em atunci când lățimea ecranului este mai mare de 600px */
    }
`;
const ImageParagraph = styled.img`
    width: 100%; /* make the image take the full width of the paragraph */
    height: auto; /* keep the aspect ratio of the image */
    font-size: 0.9em; /* same font size as the other paragraphs */
`;
export const Menu = () => {
    return (
        <Layout headerIamge={backgroundMenu}>
            <Container>
            <Box>
    <MondayHeader>Monday</MondayHeader>
    <Paragraph>B: something</Paragraph>
    <Paragraph>L: something</Paragraph>
    <Paragraph>D: something</Paragraph>
    <Paragraph>S: something</Paragraph>
</Box>
<Box>
    <TuesdayHeader>Tuesday </TuesdayHeader>
    <Paragraph>B: something</Paragraph>
    <Paragraph>L: something</Paragraph>
    <Paragraph>D: something</Paragraph>
    <Paragraph>S: something</Paragraph>
</Box>
<Box>
    <WednesdayHeader>Wednesday</WednesdayHeader>
    <Paragraph>B: something</Paragraph>
    <Paragraph>L: something</Paragraph>
    <Paragraph>D: something</Paragraph>
    <Paragraph>S: something</Paragraph>
</Box>
<Box>
    <ThursdayHeader>Thursday</ThursdayHeader>
    <Paragraph>B: something</Paragraph>
    <Paragraph>L: something</Paragraph>
    <Paragraph>D: something</Paragraph>
    <Paragraph>S: something</Paragraph>
</Box>
<Box>
    <FridayHeader>Friday</FridayHeader>
    <Paragraph>B: something</Paragraph>
    <Paragraph>L: something</Paragraph>
    <Paragraph>D: something</Paragraph>
    <Paragraph>S: something</Paragraph>
</Box>
<Box>
    <SaturdayHeader>Saturday</SaturdayHeader>
    <Paragraph>B: something</Paragraph>
    <Paragraph>L: something</Paragraph>
    <Paragraph>D: something</Paragraph>
    <Paragraph>S: something</Paragraph>
</Box>
<Box>
    <SundayHeader>Sunday</SundayHeader>
    <Paragraph>B: something</Paragraph>
    <Paragraph>L: something</Paragraph>
    <Paragraph>D: something</Paragraph>
    <Paragraph>S: something</Paragraph>
</Box>



                <Box style={{visibility: 'hidden'}}>Cutie goală</Box>
                <Box style={{visibility: 'hidden'}}>Cutie goală</Box>
                <SpecialBox>
                    <SpecialHeader>Shopping list</SpecialHeader>
                    <Paragraph>item1</Paragraph>
                    <Paragraph>item2</Paragraph>
                    <Paragraph>item3</Paragraph>
                    <Paragraph>item4</Paragraph>

                    <Paragraph>➕</Paragraph>

                    </SpecialBox>
            </Container>
        </Layout>
    )
}