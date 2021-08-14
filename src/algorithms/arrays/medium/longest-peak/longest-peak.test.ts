import { expect } from 'chai';
import longestPeak from './longest-peak';

describe('Algorithms', () => {
	describe('Arrays', () => {
		describe('longestPeak', () => {
			it('exists', () => {
				expect(typeof longestPeak).to.be.equal('function');
			});

			describe('when', () => {
				describe('and', () => {
					it.only('should', () => {
						const array = [
							1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3,
						];
						const result = longestPeak(array);

						expect(result).to.be.equal(6);
					});
				});
			});
		});
	});
});
