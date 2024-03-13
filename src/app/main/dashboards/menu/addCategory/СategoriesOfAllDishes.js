/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useQuery } from '@apollo/client';

import styled from 'styled-components';
import Inputs from 'src/app/UI/Inputs';
// import CustomSelectMulti from '../../../../UI/CustomSelectMulti';
import MenuSelect from 'src/app/UI/MenuSelect';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Postlanguages, postTagName } from '../store/categorySlice';
import { postProductImage } from '../store/productsSlice';
import { MENU_LIST_LANGUAGES } from '../../../../../graphApi';
import AddTagName from './products/AddTagName';
import CustomSelectMulti from '../../../../UI/CustomSelectMulti';

const СategoriesOfAllDishes = ({ setStatus, products, setProducts }) => {
  const dispatch = useDispatch();

  console.log('products', products);
  const productId = products.id;
  console.log(productId);
  // eslint-disable-next-line prefer-const
  let [tags, setTags] = useState(products?.tags);
  const { loading, error, data } = useQuery(MENU_LIST_LANGUAGES);

  const languages = data?.languages?.items;
  const [isOpenDeleteUserModal, setIsOpenDeleteUserModal] = useState(false);
  const [tagTitle, setTitle] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [statusDish, setStatusDish] = useState(true);
  const [deleteTag, setDeleteTag] = useState(null);
  const [langCode, setLangState] = useState(null);
  console.log(tags);

  useEffect(() => {
    const result = tags.filter((el) => el.tag.id !== deleteTag);
    console.log(result);
    setTags(result);
  }, [deleteTag]);

  const PrevPageHandler = () => {};

  const [imageFile, setImageFile] = useState(null);
  const [selectedImage, setSelectedImage] = useState('');

  const handleImage = (e) => {
    const imageAsBase64 = URL.createObjectURL(e.target.files[0]);
    const imageAsFiles = e.target.files[0];

    setSelectedImage(imageAsBase64);
    setImageFile(imageAsFiles);
  };
  console.log(imageFile);
  const SubmitHandler = () => {
    const rowId = productId;

    postProductImage(imageFile, rowId);
  };

  const addTagHandler = () => {
    console.log(tagTitle);
    console.log(productId);
    const show = dispatch(postTagName({ productId, tagTitle }));
    console.log('show', show);
    const tagNew = [
      {
        productId,
        tag: {
          title: tagTitle,
          name: tagTitle,
        },
      },
    ];

    const res = [...tags, ...tagNew]; // eslint-disable-next-line prefer-const, prefer-object-spread
    // eslint-disable-next-line prefer-object-spread
    console.log('res', res);
    setTitle('');
    setTags([...res]);
  };

  console.log('sdf', tags);
  const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ];

  const title = 'Среднее время приготовления';

  const langSubmitHandler = () => {
    dispatch(
      Postlanguages({
        langCode,
        productId,
        title: {
          text: products?.title,
        },
        description: {
          text: products?.description,
        },
      })
    );
  };
  return (
    <>
      <Container>
        <div>
          <CategoryBlock onClick={PrevPageHandler}>
            <img src="/assets/icons/arrowRightIcon.svg" alt="" />
            <button type="button" onClick={() => setStatus(false)}>
              Назад
            </button>
          </CategoryBlock>
        </div>

        <Block>
          <h3>Добавление блюда</h3>

          <AddDishBlock>
            <img src="/assets/icons/menuIcon.svg" alt="" />
            <p>
              Вы можете увидеть комментарии ресторана иx области вашего улучшения вашего ресторана,
              которые вы получили за последние 6 месяцев. Срок рассмотрения вашего комментария
              составляет 7 дней.
            </p>
          </AddDishBlock>

          <div>
            <FotoBlock>
              <label htmlFor="j">
                <img
                  src={selectedImage || 'assets/icons/foto-icon.svg'}
                  alt=""
                  width="100px"
                  height="100px"
                  className="img-foto"
                />
                <input onChange={handleImage} id="j" accept="image/*" type="file" multiple hidden />
              </label>
              <button type="button" onClick={SubmitHandler}>
                Сохранить
              </button>
            </FotoBlock>
            <BlockButton>
              {/* <button type="button">
                Default
                <img src="/assets/icons/defaultIcon.svg" alt="" />
              </button> */}

              {languages &&
                languages.map((lang, key) => {
                  return (
                    <button
                      className={langCode === lang.code ? 'button' : ''}
                      type="button"
                      key={key}
                      onClick={() => setLangState(lang?.code)}
                    >
                      {lang?.localName}
                      <img src={lang?.imageShow?.url} alt="" />
                    </button>
                  );
                })}
            </BlockButton>

            <InputsBlock>
              <p>Название блюда</p>
              <Inputs width="1140" value={products.title} />
              <p>Описание блюда</p>
              <textarea value={products.description} />
              <button type="button" onClick={() => langSubmitHandler()}>
                Сохранить
              </button>
            </InputsBlock>

            <BlockDishes>
              <p className="title">Ключевые слова блюда</p>
              <div className="block-restauran">
                <img src="/assets/icons/menuIcon.svg" alt="" />
                <p>
                  Ключевые слова помогают улучшить поиск вагих блюд, а также в целом повысить
                  продажи вашего ресторана
                </p>
              </div>
              <BlockRestauranDish>
                {tags &&
                  tags.map((productsItem, key) => {
                    return (
                      <AddTagName
                        item={productsItem.tag}
                        key={key}
                        productID={productsItem.productId}
                        setDeleteTag={setDeleteTag}
                      />
                    );
                  })}
                <div>
                  <Inputs
                    value={tagTitle}
                    width="400"
                    onChange={(e) => setTitle(e.target.value)}
                    // borderActive={}
                  />
                  <button type="button" onClick={addTagHandler}>
                    Добавить
                  </button>
                </div>
              </BlockRestauranDish>
            </BlockDishes>
            <DetailDishBlock>
              <span>
                {' '}
                <p>Порция</p>
                <Inputs width="110" placeholder="20 vby" height="40" />
              </span>
              <span className="select-detail-menu">
                <MenuSelect />
              </span>
              <span>
                <p>Цена</p>
                <Inputs width="110" placeholder="20 vby" height="40" />
              </span>
              <button type="button">
                {' '}
                <img className="img" src="/assets/icons/buttonIcon.svg" alt="" />
              </button>
            </DetailDishBlock>
            <SelectBlock>
              <p>Специфика блюда</p>
              <div>
                <CustomSelectMulti props={names} title={title} />
                <button type="button">
                  {' '}
                  <img className="img" src="/assets/icons/buttonIcon.svg" alt="" />
                </button>
              </div>
            </SelectBlock>
          </div>
        </Block>
      </Container>
    </>
  );
};
const SelectBlock = styled.div`
  margin-left: 10px;
  button {
    padding: 0 10px;
  }
  div {
    display: flex;
  }
  p {
    margin-left: 25px;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    color: #9795a5;
  }
`;
const DetailDishBlock = styled.div`
  display: flex;
  padding: 40px 10px;
  p {
    margin-left: 25px;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    color: #9795a5;
  }
  button {
    padding: 10px 20px 0;
  }
  .select-detail-menu {
    margin-top: 15px;
    padding-left: 10px;
  }
`;
const BlockRestauranDish = styled.div`
  width: 1140px;
  min-height: 114px;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 20px;
  margin-left: 20px;
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  div {
    display: flex;
    align-items: center;
  }
  button {
    color: blue;
  }
`;

const BlockDishes = styled.div`
  .title {
    padding-left: 40px;
    margin-top: 20px;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: #9795a5;
  }
  .block-restauran {
    display: flex;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    padding-left: 20px;
    padding-top: 20px;
  }
`;
const InputsBlock = styled.div`
  height: 250px;
  textarea {
    width: 1140px;
    margin-left: 20px;
    font-size: 18px;
    height: 80px;
    border-radius: 10px;
    padding: 0 20px;
  }
  .text-area {
    width: 600px;
  }
  p {
    padding-left: 40px;
    margin-top: 20px;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: #9795a5;
  }
  button {
    margin: 20px 980px;
    background-color: #f8dc2f;
    width: 170px;
    height: 40px;
    border-radius: 20px;
  }
`;
const BlockButton = styled.div`
  display: flex;
  width: 700px;
  justify-content: space-between;
  padding: 30px;

  button {
    display: flex;
    background: white;
    width: 130px;
    height: 45px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
  }
  .button {
    background-color: #343eed;
    color: #ffffff;
  }
`;
const Container = styled.div`
  padding: 30px;
`;
const FotoBlock = styled.div`
  padding: 10px;
  width: 300px;
  margin-left: 40px;

  label {
    width: 100px;
    background: #ffffff;
    border-radius: 10px;
    margin-left: 50px;
    margin-top: 20px;
  }
  button {
    padding: 20px 10px;
    color: blue;
  }
`;
const CategoryBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f2f2f9;
  border-radius: 50px;
  width: 146px;
  height: 44px;
  img {
    width: 10px;
    height: 12px;
  }
  button {
    padding: 0 8px;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
  }
`;
const Block = styled.div`
  border-radius: 10px;
  background-color: #f2f2f9;
  margin-top: 30px;
  padding: 30px 0 30px 0;
  h3 {
    font-weight: 700;
    font-size: 22px;
    line-height: 30px;
    padding: 30px;
  }
`;
const AddDishBlock = styled.div`
  display: flex;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  padding-left: 20px;
  padding-top: 20px;
`;
export default СategoriesOfAllDishes;
