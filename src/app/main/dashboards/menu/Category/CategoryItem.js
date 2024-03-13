import { useState } from 'react';
import styled from 'styled-components';
import CustomButton from '../../home/button/CustomButton';

const CategoryItem = ({ category, setDeleteCategory }) => {
  const [isEyeIconVisible, setIsEyeIconVisible] = useState(true);
  const imgTitle = category?.category?.products?.items

  const ToggleHandler = () => {
    setIsEyeIconVisible(!isEyeIconVisible);
  };
  const deleteCategoryHandler = (categoryId) => {
    setDeleteCategory(categoryId);
  };
  return (
    <BlockItem>
      <div className={isEyeIconVisible ? 'category-list' : 'active'}>
        <p>{category?.category?.name}</p>
        <div className="block-img">
          {imgTitle && imgTitle.map((img) => {
            return <img className="icon-meal" src={img?.imageList?.url} alt="" />;
          })}
        </div>
      </div>

      <BlockDelete>
        <div className="category-status">
          <span>Статус категории</span>
          <CustomButton />
        </div>
        <div className="category-delete">
          <div>
            {isEyeIconVisible ? (
              <button type="button" onClick={ToggleHandler}>
                <img className="img" src="/assets/icons/eye-icon.svg" alt="" />
              </button>
            ) : (
              <button type="button" onClick={ToggleHandler}>
                <img className="img" src="/assets/icons/close-eye-icon.svg" alt="" />
              </button>
            )}
          </div>
          <button type="button" onClick={() => deleteCategoryHandler(category?.categoryId)}>
            <img className="img" src="/assets/icons/delete-category-icon.svg" alt="" />
          </button>
        </div>
      </BlockDelete>
    </BlockItem>
  );
};

const BlockItem = styled.div`
  background-color: #ffffff;
  margin: 10px 0;
  border-radius: 14px;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  .block-img {
    display: flex;
    flex-wrap: wrap;
  }
  .icon-meal {
    width: 47px;
    height: 47px;
    margin: 10px;
    border-radius: 10px;
  }
  .category-list {
    background-color: #ffffff;
    /* opacity: 0.4; */
  }
  .active {
    background-color: #ffffff;
    opacity: 0.4;
  }
`;

const BlockDelete = styled.div`
  .category-status {
    display: flex;
    width: 220px;
    justify-content: space-between;
    align-items: center;
  }
  .category-delete {
    display: flex;
    align-items: center;
    justify-content: end;
  }
  img {
    padding: 0 0 0 20px;
    width: 60px;
    height: 60px;
  }
`;

export default CategoryItem;
