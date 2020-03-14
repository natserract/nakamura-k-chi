// tslint:disable

import * as React from 'react';

const Slider: React.FC<{
    items: any,
    sliderPostMargin: number,
    sliderPostWidth: string,
    sliderPostHeight: number,
}> = ({ items, sliderPostWidth, sliderPostHeight, sliderPostMargin }) => {
    const [state, setState] = React.useState({
        index: 0,
    });

    React.useEffect(() => {
        clearInterval()
    }, []);


    const { index } = state
    const leftSpan = parseInt(`${-index * parseInt(sliderPostWidth)}`);
    const active = Math.abs(leftSpan) / 100;

    const computed = () => {
        return {
            left: sliderPostWidth.toString().match(/[%vw]/) != null ?
                `calc(${leftSpan}% - ${sliderPostMargin * 2 * index}px)` :
                `${leftSpan - (sliderPostMargin * 2 * index)}px`
        }
    }

    const changePosition = (t) => {
        const { index } = state;
        setState({
            index: (index + t + items.length) % items.length
        })
    }

    return (
        <div className='slider'>
            <div className="slider__area">
                <div style={computed()} className="slider__posts">
                    {items.map((item, index) => {
                        const checkIndex = active === index ? 'active': '';

                        return (
                            <div key={index}
                                style={{
                                    width: sliderPostWidth,
                                    height: sliderPostHeight,
                                    margin: `0px ${sliderPostMargin}px `,
                                }} className={`slider__post-box slide__post-box-${checkIndex}`}>

                                <div className="slider__content">
                                    <div className='slider__content-card__box'>
                                        <div className="slider__content-left">
                                            <img src={item.image.default} />
                                        </div>
                                        <div className="slider__content-right">
                                            <span>{index.toString()}</span>
                                            <h1 style={{ color: '#000' }}>{item.title}</h1>
                                            <a href="#">Discover</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="slider__control">
                <div onClick={() => changePosition(-1)} className="control-left">
                    <i className="fa fa-long-arrow-left"></i>
                </div>
                <div onClick={() => changePosition(1)} className="control-right">
                    <i className="fa fa-long-arrow-right"></i>
                </div>
            </div>
        </div>
    )
}

export default Slider;