import { useQuery } from '@apollo/client';
import styled from 'styled-components';
import { CATEGORY_PAGE } from 'src/graphApi';
import { useState, useEffect } from 'react';
import { Button } from '../../home/button/Button';
import InstructionButton from '../../home/buttonInstruction/InstructionButton';
import CustomSelect from '../../home/customSelect/CustomSelect';
import CategoryItem from './CategoryItem';
import PaginationBlock from '../../components/Paginations';

const Category = () => {
  const { loading, error, data } = useQuery(CATEGORY_PAGE);
  const categorylistData = data?.restorants?.items[0].categories;
  const [isEyeIconVisible, setIsEyeIconVisible] = useState(true);
  const [deleteCategory, setDeleteCategory] = useState(null);
  const [categoryList, setCategoryList] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [limit, setLimit] = useState(10);

  const variables = {
    take: limit,
    skip: (activePage - 1) * limit,
  };

  // const {loading, error, data, fetchMore}=useQuery(CATEGORY_PAGE, {variables})
  useEffect(() => {
    setCategoryList(data?.restorants?.items[0].categories);
  }, [data]);

  useEffect(() => {
    console.log('deleteCategory', deleteCategory);
    console.log(categoryList);
    const result = categoryList.filter((el) => el.categoryId !== deleteCategory);
    setCategoryList(result);
  }, [deleteCategory]);

  console.log('categoryList', categoryList);
  return (
    <CategoryContainer>
      <CategoryBlock>
        <span>Меню</span>
        <h3>Категории</h3>
      </CategoryBlock>
      <div className="w-full">
        <div className="flex justify-between  ">
          <div className="flex  ml-28 ">
            <CustomSelect />
            <Button />
          </div>
          <div className="mr-40">
            <InstructionButton />
          </div>
        </div>
      </div>
      <CategoryProductBlock>
        <BlockInfo>
          <img src="/assets/icons/menuIcon.svg" alt="" />
          <p>
            HiBeta не вмешивается в стоимость блюд, кторые вы хотите продать, HiBeta следит за этими
            ценами, чтобы не допустить завышения цен.
          </p>
        </BlockInfo>

        <CategoryItemBlock>
          {categoryList &&
            categoryList.map((category, key) => {
              return (
                <CategoryItem
                  category={category}
                  key={key}
                  isEyeIconVisible={isEyeIconVisible}
                  setIsEyeIconVisible={setIsEyeIconVisible}
                  setDeleteCategory={setDeleteCategory}
                />
              );
            })}
        </CategoryItemBlock>
      </CategoryProductBlock>
      <PaginationBlock
        activePage={activePage}
        limit={limit}
        setActivePage={setActivePage}
        setLimit={setLimit}
      />
    </CategoryContainer>
  );
};

const CategoryContainer = styled.div`
  width: 100%;
`;
const CategoryBlock = styled.div`
  padding: 30px;
  span {
    font-weight: 700;
    font-size: 20px;
    line-height: 27px;
    color: #9795a5;
  }
  h3 {
    font-weight: 700;
    font-size: 40px;
    line-height: 55px;
  }
`;
const BlockInfo = styled.div`
  display: flex;
  align-items: center;
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
  }
`;
const CategoryProductBlock = styled.div`
  padding: 30px;
  border-radius: 10px;
  background-color: #f2f2f9;
  margin: 30px;
`;
const CategoryItemBlock = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;

  span {
    width: 150px;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
  }
  p {
    margin: 5px 0 15px 0;
    font-weight: 700;
    font-size: 20px;
    line-height: 18px;
  }

  .item-category {
    background-color: #ffffff;
    margin: 10px 0;
    border-radius: 14px;
    display: flex;
    justify-content: space-between;
    padding: 20px;
  }
`;

export default Category;
