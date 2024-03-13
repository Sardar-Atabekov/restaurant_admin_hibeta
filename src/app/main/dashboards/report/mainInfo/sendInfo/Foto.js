import styled from 'styled-components';

const Foto = () => {
  return (
    <FotoInfoBlock>
      <BlockFirst>
        <div>
          <img src="/assets/icons/cameraIcon.svg" alt="" />
        </div>
        <p>Рекомендуемый размер фотографии 1317x362 </p>
      </BlockFirst>
      <BlockSecond>
        {' '}
        <div>
          <img src="/assets/icons/cameraIcon.svg" alt="" />
        </div>
      </BlockSecond>
    </FotoInfoBlock>
  );
};
const FotoInfoBlock = styled.div`
  background-color: #dbdbe4;
  height: 258px;
  border-radius: 10px;
  div {
  }
`;
const BlockFirst = styled.div`
  position: relative;
  left: 525px;
  top: 100px;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    border-radius: 50px;
    width: 60px;
    height: 60px;
  }
  p {
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    color: #9795a5;
    position: relative;
    right: 150px;
  }
`;
const BlockSecond = styled.div`
  position: relative;
  left: 80px;
  top: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border: 3px solid #f2f2f9;
  width: 124px;
  height: 124px;
  border-radius: 100px;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    background-color: #f2f2f9;
    border-radius: 50px;
  }
`;
export default Foto;
