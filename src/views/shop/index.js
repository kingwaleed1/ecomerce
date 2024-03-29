import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { selectFilter } from 'selectors/selector';

import ProductList from 'components/product/ProductList';
import ProductItem from 'components/product/ProductItem';
import ProductAppliedFilters from 'components/product/ProductAppliedFilters';
import Boundary from 'components/ui/Boundary';
import useDocumentTitle from 'hooks/useDocumentTitle';
import useScrollTop from 'hooks/useScrollTop';

const Shop = () => {
    useDocumentTitle('Shop | Noodles.pk');
    useScrollTop();

    const [columnCount, setColumnCount] = useState(6);
    const productListWrapper = useRef(null);

    const store = useSelector(state => ({
        filter: state.filter,
        basket: state.basket,
        filteredProducts: selectFilter(state.products.items, state.filter),
        requestStatus: state.app.requestStatus,
        isLoading: state.app.loading,
        products: state.products.items,
        lastRefKey: state.products.lastRefKey,
        productsCount: state.products.items.length,
        totalProductsCount: state.products.total,
    }));

    const onProductsLengthChanged = () => {
        const width = window.screen.width - 250; // minus 250px padding
        const pLen = store.filteredProducts.length;

        setColumnCount(Math.floor(width / 160));
        if ((columnCount >= pLen) && pLen !== 0) {
            setColumnCount(pLen);
        }
    };

    useEffect(() => {
        if (productListWrapper) {
            onProductsLengthChanged();
        }
    }, [store.filteredProducts]);

    const isFiltered = ['keyword', 'brand', 'minPrice', 'maxPrice', 'sortBy'].some(key => !!store.filter[key]);

    return (
        <>
            <section className="product-list-wrapper">
                {!store.requestStatus && (
                    <div className="product-list-header">
                        <div className="product-list-header-title">
                            {isFiltered && (
                                <h5>
                                    {store.filteredProducts.length > 0
                                        && `Found ${store.filteredProducts.length} ${store.filteredProducts.length > 1 ? 'products' : 'product'}`
                                    }
                                </h5>
                            )}
                        </div>
                    </div>
                )}
                <ProductAppliedFilters filter={store.filter} />
                <Boundary>
                    <ProductList {...store}>
                        {({ foundOnBasket }) => (
                            <>
                                <div
                                    className="product-list"
                                    ref={productListWrapper}
                                    style={{ gridTemplateColumns: `repeat(${columnCount}, 160px)` }}
                                >
                                    {store.filteredProducts.length === 0 ? new Array(12).fill({}).map((product, index) => (
                                        <ProductItem
                                            isItemOnBasket={false}
                                            key={`product-skeleton ${index}`}
                                            product={product}
                                        />
                                    )) : store.filteredProducts.map(product => (
                                        <ProductItem
                                            isItemOnBasket={foundOnBasket(product.id)}
                                            key={product.id}
                                            isLoading={store.isLoading}
                                            product={product}
                                        />
                                    ))}
                                </div>
                            </>
                        )}
                    </ProductList>
                </Boundary>
            </section>
        </>
    );
};

export default Shop;
