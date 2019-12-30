import readlineSync from 'readline-sync';

export const discoverName = () => {
	const name = readlineSync.question('May I have your name?: ');
	return name;
};
