import styled from "styled-components";

export const StyledAvatar = styled.img`
  width: 150px;
  height: auto;
  border-radius: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
`;

// export const StyledContainer = styled.div`
//   width: 300px;
//   height: 500px;
//   padding: 10px;
//   padding-top: 50px;
//   margin-left: auto;
//   margin-right: auto;
//   /* border: 2px solid white; */
//   border-radius: 20px;
//   box-shadow: 0px -5px 10px white;
// `;

export const StyledUserName = styled.h2`
  margin-bottom: 10px;
  text-align: center;

  font-size: 25px;
`;

const styles = `margin-bottom: 10px;
  text-align: center;
    font-size: 15px;`;

export const StyledLocation = styled.p`
  ${styles}
`;

export const StyledTag = styled.p`
  ${styles}
`;
