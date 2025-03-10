import { StButton } from "../../styles/ButtonStyle";
import { StModalDiv, StModalComponents, StButtonSet } from "../../styles/ModalWindowStyle";

const ModalWindow = ({ openModalHandler }) => {
  return (
    <div>
      <StModalDiv></StModalDiv>
      <StModalComponents>
        <div>
          닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.
        </div>
        <StButtonSet>
          <StButton backgroundColor="#fab1a0">
            <button className="small-button" onClick={openModalHandler}>
              닫기
            </button>
          </StButton>
          <StButton backgroundColor="#55efc4">
            <button className="small-button">확인</button>
          </StButton>
        </StButtonSet>
      </StModalComponents>
    </div>
  );
};

export default ModalWindow;
