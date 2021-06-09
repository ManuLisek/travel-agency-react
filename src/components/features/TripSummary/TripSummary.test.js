import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should render correct link', () => {
    const id = 'abc';
    const expectedLink = '/trip/' + id;
    const component = shallow(<TripSummary id={id} tags={['tag1','tag2','tag3']} />);
    expect(component.find('.link').prop('to')).toEqual(expectedLink);

    console.log('Kaczka', component.debug());
  });

  it('should render correct src and alt for image', () => {
    const expectedImage = 'image.jpg';
    const expectedAlt = 'alt';
    const component = shallow(<TripSummary image={expectedImage} name={expectedAlt} tags={['tag1','tag2','tag3']}/>);

    expect(component.find('img').prop('src')).toEqual(expectedImage);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);

    console.log(component.debug());
  });

  it('should render correct name, cost and days', () => {
    const expectedName = 'Lorem ipsum';
    const expectedCost = '100';
    const expectedDays = 7;
    const component = shallow(<TripSummary name={expectedName} cost={expectedCost} days={expectedDays} tags={['tag1','tag2','tag3']}/>);

    expect(component.find('.title').text()).toEqual(expectedName);
    expect(component.find('.days').text()).toEqual(expectedDays + ' days');
    expect(component.find('.cost').text()).toEqual('from ' + expectedCost);
  });
}); 