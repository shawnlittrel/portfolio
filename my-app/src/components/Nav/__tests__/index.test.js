import React from 'react';
import {render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '../index.js';

const navCategories = [
     {
       name: "about"
     }
];

const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();

afterEach(cleanup);

describe('Nav component', () => {
     it('renders', () => {
          render(
               <Nav
                    categories={navCategories}
                    setCurrentCategory={mockSetCurrentCategory}
                    currentCategory={mockCurrentCategory}
               />
          );
     });

     it('matches snapshot', () => {
          const { asFragment } = render(
               <Nav
               categories={navCategories}
               setCurrentCategory={mockSetCurrentCategory}
               currentCategory={mockCurrentCategory}
               />
          );
          expect(asFragment()).toMatchSnapshot();
     });
});