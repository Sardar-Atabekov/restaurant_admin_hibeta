import { gql } from '@apollo/client';

const GET_NEW_ORDERS = gql`
  query GetNewOrders {
    orders(
      where: { and: [{ status: { eq: SUSPEND } }, { orderRestorantStatus: { eq: PENDING } }] }
    ) {
      totalCount
      items {
        id
        netTotal
        documentNo
        total
        discountTotal
        delivery
        createdOnUtc

        orderLines {
          quantity
          id
          product {
            id
            name
            netWeight
            units {
              title
            }
            title
            imageList {
              url
            }

            price {
              salePrice
              olderSalePrice
              currency {
                name
              }
            }
          }
        }
      }
    }
  }
`;
export default GET_NEW_ORDERS;

export const GET_ACTIVE_ORDERS = gql`
  query GetActiveOrders {
    orders(
      where: { and: [{ status: { eq: PENDING } }, { orderRestorantStatus: { eq: ACCEPTED } }] }
    ) {
      totalCount
      items {
        id
        documentNo
        total
        netTotal
        delivery
        content
        userId
        cartId
        currencyId
        shipmentId
        transactionId
        acceptedOrderRestorantStatus
        createdOnUtc
        updatedOnUtc
        address {
          entrance
          apartment
          __typename
          floor
          intercom
          name
          phone
          city
        }
        orderLinesTypeIO

        orderLines {
          id
          quantity
          recommendedQuantity
          closed

          product {
            id
            name
            netWeight
            units {
              title
            }
            title
            imageList {
              url
            }

            price {
              salePrice
              olderSalePrice
              currency {
                name
              }
            }
          }
        }
      }
    }
  }
`;
export const GET_EDIT_ORDERS = gql`
  query GetNewOrders {
    orders(
      where: { and: [{ status: { eq: PENDING } }, { orderRestorantStatus: { eq: REFUSE } }] }
    ) {
      totalCount
      items {
        id
        netTotal
        documentNo
        total
        discountTotal
        delivery
        createdOnUtc

        orderLines {
          id
          quantity
          recommendedQuantity
          closed

          product {
            id
            name
            netWeight
            units {
              title
            }
            title
            imageList {
              url
            }

            price {
              salePrice
              olderSalePrice
              currency {
                name
              }
            }
          }
        }
      }
    }
  }
`;

export const MENU_CATEGORIES_PRODUCT = gql`
  query {
    categoriesProduct {
      items {
        id
        name
        categoryType
        isPasived
        updatedOnUtc
        products {
          items {
            id
            name
            netWeight
            weight
            unitId
            units {
              unitCode
              unitGlobalName
              title
              description
              id
              createdOnUtc
              updatedOnUtc
            }
            countryId
            restorantId
            isPasived
            isPublished
            title
          }
        }

        rowNumbers
      }
    }
  }
`;
export const CATEGORY_LIST_MENU_PAGE = gql`
  query GetGategory($take: Int, $skip: Int) {
    restorants(where: { id: { eq: 3 } }) {
      items {
        title

        categories {
          categoryId
          category {
            id
            title
            categoryType
            products(take: $take, skip: $skip) {
              totalCount
              pageInfo {
                hasNextPage
                hasPreviousPage
              }
              items {
                id
                name
                title
                description
                imageList {
                  url
                }
                price {
                  salePrice
                  olderSalePrice
                  discount {
                    discountAmount
                  }

                  currency {
                    name
                    customFormatting
                    displayLocale
                    countryId
                  }
                }

                unitId

                isPasived
                isPublished
                tags {
                  productId
                  tagId
                  tag {
                    name
                    title
                    id
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
export const PRODUCT_CATEGORY_LIST = gql`
  query {
    products {
      items {
        tags {
          id
          tagId
          productId
          tag {
            name
          }
        }
        id
        title

        name
        netWeight
        weight
        unitId
        units {
          unitCode
          unitGlobalName
          title
          description
          id
          createdOnUtc
          updatedOnUtc
        }
        countryId
        restorantId
        isPasived
        isPublished
        title
      }
    }
  }
`;

export const CATEGORY_PAGE = gql`
  query {
    restorants(where: { id: { eq: 3 } }) {
      items {
        categories {
          categoryId
          category {
            id
            name
            products {
              items {
                imageList {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const MENU_LIST_LANGUAGES = gql`
  query {
    languages {
      items {
        code

        id
        localName
        englishName
        countryId
        imageShow {
          url
          rowId
          tableName
        }
      }
    }
  }
`;

/* const DISCOUNT_PRODUCT_PAGE = gql`
  query {
    restorants(where: { id: { eq: 3 } }) {
      
            products {
              items {
                id
                name
                title
                description
                imageList {
                  url
                }
                price {
                  salePrice
                  olderSalePrice
                  discount {
                    discountAmount
                    categories
                    category
                    categoryId
                    categoryType
                    categories
                    customFormatting
                    name
                  }

                  currency {
                    name
                    customFormatting
                    displayLocale
                    countryId
                  }
                }

                unitId
                units {
                  unitCode
                  unitGlobalName
                  title
                  description
                  id
                }

                isPasived
                isPublished
                tags {
                  productId
                  tagId
                  tag {
                    name
                    title
                    id
                  }
                }
              }
      
    }
  }
`;
 */