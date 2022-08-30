import React, { useState } from 'react'
import Video from '../../videos/video.mp4';
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements'
import { Button } from '../ButtonElements';

const Hero = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }

  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
            <HeroH1>Hello, my name is Logan</HeroH1>
            <HeroP>
                I am a 24 year old Software Developer from Cincinnati, Ohio.
                I hope this website adequately shows off my competence and ability 
                to complete the job you're looking to fill!
            </HeroP>
            <HeroBtnWrapper>
                <Button to="contact" onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
                    Contact Me {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default Hero