import Square from "./Square";
import { shallow } from 'enzyme';

describe('test button component', () => {
  it('test click event', () => {
    const mockCallBack = jest.fn();

    const button = shallow((<Square onClick={mockCallBack}>Ok!</Square>));
    button.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  })
})