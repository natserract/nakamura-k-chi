
import * as React from 'react';
import SliderContent from './SliderContent';
import "./Slider.scss";
import { data } from './SliderData';

const SliderContainer: React.FC = () => {
    return (
        <React.Fragment>
            <SliderContent
                items={data}
                sliderPostWidth={'100%'}
                sliderPostHeight={500}
                sliderPostMargin={10}>
            ></SliderContent>
        </React.Fragment>
    )
}



export default SliderContainer;