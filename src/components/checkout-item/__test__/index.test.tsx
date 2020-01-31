import { shallow } from 'enzyme';
import CheckoutItem from '../index';
import React from 'react';
import { ShopItemQuantity } from '../../../store/checkout/types';

test('should render Checkout component', () => {
    const mockItem: ShopItemQuantity = {
        id: 1,
        description: 'test image',
        size: [],
        color: [],
        imageSrc: 'http://test.image.com/image.png',
        price: 10,
        name: 'hats',
        quantity: 2
    };
    expect(shallow(<CheckoutItem checkoutItem={mockItem} />).debug()).toMatchSnapshot();
});
