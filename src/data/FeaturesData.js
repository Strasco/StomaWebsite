import React from 'react';

import { FaTooth } from 'react-icons/fa';
import { IoIosOptions } from 'react-icons/io';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { BiSupport, BiDollar } from 'react-icons/bi';
import { GrHostMaintenance } from 'react-icons/gr';
const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const featuresData = [
	{
		name: 'Dinti frumosi',
		description: 'Cei mai frumosi si curati dinti',
		icon: iconStyle(FaTooth),
		imgClass: 'one'
	},
	{
		name: 'Ieftin si Bun',
		description: 'Pleci cu buzunarul plin',
		icon: iconStyle(BiDollar),
		imgClass: 'two'
	},
	{
		name: 'Dinti frumosi',
		description: 'Bla bla bla bla',
		icon: iconStyle(FaTooth),
		imgClass: 'three'
	}
];
