import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { deleteProductTagName } from '../../store/categorySlice';

const AddTagName = ({ item, productID, setDeleteTag }) => {
  const dispatch = useDispatch();
  const item1 = [];
  item1.push(item);
  console.log(item1);

  console.log(item);
  const DeleteTagNameHandler = (productId, tagId) => {
    const data = {
      productId,
      tagId,
    };
    dispatch(deleteProductTagName({ data }));
    setDeleteTag(tagId);
  };
  return (
    <BlockRestauran className="dish-meat-block">
      <span>{item.title}</span>
      <button type="button" onClick={() => DeleteTagNameHandler(productID, item.id)}>
        <img src="/assets/icons/exIcon.svg" alt="" />
      </button>
    </BlockRestauran>
  );
};
const BlockRestauran = styled.p`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  background-color: #f2f2f9;
  border-radius: 6px;
  padding: 5px;
  margin: 5px;
  height: 40px;
  span {
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
  }
  img {
    width: 10px;
    height: 10px;
    margin-left: 10px;
  }
`;

export default AddTagName;
