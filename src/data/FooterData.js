import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';

const iconStyle = (Icon) => <Icon />;

export const footerSocialData = [
	{
		name: 'Facebook',
		icon: iconStyle(FaFacebook),
		url: 'https://www.facebook.com/zaharia.alex'
	},
	{
		name: 'Instagram',
		icon: iconStyle(FaInstagram)
	},
	{
		name: 'YouTube',
		icon: iconStyle(FaYoutube)
	},
	{
		name: 'Twitter',
		icon: iconStyle(FaTwitter)
	},
	{
		name: 'LinkedIn',
		icon: iconStyle(FaLinkedin)
	}
];

export const footerData = [
	{
		title: 'Contact',
		links: [ 'Telefon: 0735057888' ]
	}
	// {
	// 	title: 'Product',
	// 	links: [ 'Login', 'Personal', 'Business', 'Team' ]
	// },
	// {
	// 	title: 'Press',
	// 	links: [ 'Logos', 'Events', 'Stories', 'Office' ]
	// },
	// {
	// 	title: 'Legal',
	// 	links: [ 'GDPR', 'Privacy Policy', 'Terms of Service', 'Disclaimer' ]
	// }
];
