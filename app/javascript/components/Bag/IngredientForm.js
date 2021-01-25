import React, {Fragment} from 'react'
import styled from 'styled-components'
import Grey from './Stars/Grey'
import Selected from './Stars/Selected'
import Hover from './Stars/Hover'
import {Box, Content} from '../UI/Layouts';


const Wrapper = styled.div`
    display: flex;
    min-height: 100vh;
`;

// const RatingContainer = styled.div`
//     text-align: center;
//     border-radius: 4px;
//     font-size: 18px;
//     padding: 40px 0 10px 0;
//     border: 1px solid #e6e6e6;
//     background: #fff;
// `
// const RatingBox = styled.div`
// background: #fff;
// display: flex;
// width: 100%;
// justify-content: center;
// overflow: hidden;
// flex-direction: row-reverse;
// position: relative;
// margin-top: 12px;

// input { display: none; }

//     label {
//         cursor: pointer;
//         width: 40px;
//         height: 40px;
//         margin-top: auto;
//         background-image: url("data:image/svg+xml;charset=UTF-8, ${Grey}");
//         background-repeat: no-repeat;
//         background-position: center;
//         background-size: 76%;
//         transition: .3s;
//     }
//     input:checked ~ label, input:checked ~ label ~ label {
//         background-image: url("data:image/svg+xml;charset=UTF-8, ${Selected}");

//     }

//     input:not(:checked) ~ label:hover,
//     input:not(:checked) ~ label:hover ~ label {
//         background-image: url("data:image/svg+xml;charset=UTF-8, ${Selected}");

//     }
// `

// const Field = styled.div`
//     border-radius: 4px;

//     input {
//         min-height: 50px;
//         border-radius: 4px;
//         border: 1px solid #e6e6e6;
//         margin: 0 0 12px 0;
//         padding: 12px;
//         width: 96%;

//     }

//     textarea {
//         width: 100%;
//         min-height: 80px;
//         border-radius: 4px;
//         border: 1px solid #e6e6e6;
//         margin: 12px 0;
//         padding: 12px;

//     }

// `
// const Wrapper = styled.div`
//     background: #fff;
//     padding: 20px;
//     background: #000;
//     height: 100vh;
//     padding-top: 100px;
    
// `
// const Submit = styled.button`
//     color: #fff;
//     background: #333;
//     border-radius: 4px;
//     padding: 12px;
//     font-size: 18px;
//     cursor: pointer;
//     trainsition: ease-in-out 0.1s;
//     border: 1px solid #fff;
//     width: 100%;
//     margin-top: 20px;

//     &:hover {
//         background: #fff;
//         color: #000;
//         border: 1px solid #fff;
//     }
// `
// const Headline = styled.div`
//     padding: 20px;
//     font-size: 30px;
//     font-weight: bold;
//     color: #fff;
    
// `

// const RatingTitle = styled.div`
//     padding-bottom: 20px;
//     font-size: 20px;
//     font-weight: bold;
    
// `

export default function IngredientForm(props) {
    const {handleSubmit, handleChange, ingredient, attributes, setRating} = props;

    const ratingOptions = [5,4,3,2,1].map((score, index) => {
        return (
            <Fragment key={index}>
                <input type="radio" value={score} checked={props.ingredient.score == score} name="rating" onChange={() => console.log('onChange')} id={`rating-${score}`} />
                <label onClick={setRating.bind(this, score)}></label>
            </Fragment>

        )
       
        
    })
    return (
        <>

        <Box title={'Order From:'}>

        </Box>      

        <>
                {/* <form onSubmit={handleSubmit}>
            <Headline>Create ingredient list for {attributes.name}:</Headline>
            <Field>
                <input type="text" name="title" placeholder="Ingredient" value={ingredient.title} onChange={handleChange} />
            </Field>
            <Field>
                <input type="text" name="description" placeholder="Ingredient" value={ingredient.description} onChange={handleChange} />
            </Field>
            <Field>
                <RatingContainer>
                    <RatingTitle>Create an Ingredient</RatingTitle>
                    <RatingBox >
                    {ratingOptions}
                    </RatingBox>
                
                </RatingContainer> 
            </Field>
            <Submit>Submit Your Ingridient</Submit>
        </form> */}


        </>



        </>
        
        
          
  
            
        
    )
}
