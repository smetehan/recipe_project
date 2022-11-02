import React from "react";
import "./Detail.style";
import {
  DetailContainer,
  DetailPart,
  HeaderContainer,
  ImgContainer,
  IngContainer,
  OtherPart,
} from "./Detail.style";
import { useLocation, useNavigate } from "react-router-dom";
import diet from "../../assets/diet.svg";
import { AiFillBackward } from "react-icons/ai";

const Detail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  return (
    <div>
      <DetailContainer>
        <HeaderContainer>
          <h1>{state.label}</h1>
          <img src={diet} alt="img" />
        </HeaderContainer>

        <DetailPart>
          <h1>
            <AiFillBackward onClick={() => navigate(-1)} />
          </h1>
          <OtherPart>
            <h4>NUTRIENS</h4>
            <p>
              {state.totalNutrients.CA.label} :{" "}
              {Math.round(state.totalNutrients.CA.quantity)}
              {state.totalNutrients.CA.unit}
            </p>
            <p>
              {state.totalNutrients.CHOCDF.label} :{" "}
              {Math.round(state.totalNutrients.CHOCDF.quantity)}
              {state.totalNutrients.CHOCDF.unit}
            </p>
            <p>
              {state.totalNutrients.CHOLE.label} :{" "}
              {Math.round(state.totalNutrients.CHOLE.quantity)}
              {state.totalNutrients.CHOLE.unit}
            </p>
            <p>
              {state.totalNutrients.ENERC_KCAL.label} :{" "}
              {Math.round(state.totalNutrients.ENERC_KCAL.quantity)}
              {state.totalNutrients.ENERC_KCAL.unit}
            </p>
            <p>{state.totalWeight}</p>
            <p>Calories: {Math.round(state.calories)}</p>
            {state.digest.slice(0, 4).map((item, index) => (
              <p key={index}>
                {item.label} : {Math.round(item.total)}
              </p>
            ))}
          </OtherPart>
          <ImgContainer>
            <img src={state.image} alt="img" />
          </ImgContainer>

          <IngContainer>
            {state.ingredientLines.map((ingredient, index) => (
              <div>
                <p>
                  {index + 1}-{ingredient}
                </p>
              </div>
            ))}
          </IngContainer>
        </DetailPart>
      </DetailContainer>
    </div>
  );
};

export default Detail;
