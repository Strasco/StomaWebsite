import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyles';
import { HeroVideo, HeroSection, HeroText, ButtonWrapper, HeroButton } from './HeroStyles';

const Hero = () => {
	return (
		<HeroSection>
			<HeroVideo src="./assets/images/herophoto.jpg" autoPlay muted />
			<Container>
				<MainHeading>Cabinetul dentar ZA ProSmile SRL</MainHeading>
				<HeroText>Medic Generalist Zaharia Ionel Alexandru</HeroText>
				{/* <ButtonWrapper>
					<Link to="signup">
						<Button>Get Started</Button>
					</Link>
					<HeroButton>Find More</HeroButton>
				</ButtonWrapper> */}
			</Container>
		</HeroSection>
	);
};

export default Hero;
