import sortArrowUpIcon from './sortArrowUp.svg';
import sortArrowDownIcon from './sortArrowDown.svg';
import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';

interface SortArrowProps {
	sortDir: string;
}

const SortArrow = ({ sortDir }: SortArrowProps): JSX.Element => {
	return (
		<StyledSortArrow>
			<AnimatePresence>
				{sortDir === 'asc' && (
					<motion.img
						initial='initial'
						animate='in'
						exit='out'
						variants={arrowDownVariants}
						transition={arrowTransition}
						src={sortArrowDownIcon}
						alt='Arrow Down'
					/>
				)}
				{(!sortDir || sortDir === 'desc') && (
					<motion.img
						initial='initial'
						animate='in'
						exit='out'
						variants={arrowUpVariants}
						transition={arrowTransition}
						src={sortArrowUpIcon}
						alt='Arrow Up'
					/>
				)}
			</AnimatePresence>
		</StyledSortArrow>
	);
};

export { SortArrow };

const StyledSortArrow = styled.div(
	({ theme: { spacing } }) => `
padding-left: ${spacing.md};
padding-top: ${spacing.sm};
`
);

const arrowUpVariants = {
	initial: {
		rotate: 90,
	},
	in: {
		rotate: 0,
	},
	out: {
		rotate: 90,
	},
};
const arrowDownVariants = {
	initial: {
		rotate: -90,
	},
	in: {
		rotate: 0,
	},
	out: {
		rotate: -90,
	},
};
const arrowTransition = {
	type: 'spring',
	ease: 'anticipate',
	duration: 0.5,
};
