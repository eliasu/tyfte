/**
 * Alpine x-data extends
 * import with "import * as alpine from './components/alpine_data';"
**/

import * as ani from "./textify";
import Animations from '../c-textify/src/index';

export const accordion_states = () => ({
	textAni: '',
	
	get open() {
		const isSelectedInParent = (this.$el == this.$data.selected);
		return isSelectedInParent;
  	},
  
	init() {
		// const allAnimations = [...ani.accordion_no_obs.animations, ...ani.ani2.animations];
		const allAnimations = [...ani.accordion_no_obs.animations];
		const aniTarget = this.$el.querySelector('p');

		this.$watch('open', value => this.open ? this.setOpen(this) : this.setClose(this) );

		const matchingAniText = allAnimations.find(el => el.element == aniTarget);

		this.textAni = matchingAniText;     
	},

	setOpen(elem){
		elem.textAni.animateIn()
	},
	
	setClose(elem){
		elem.textAni.animateOut()
	},

	handleClick() {
		this.$data.selected = this.$el;
	},
});

export const xbody = () => ({
	formStep: 1,
	formOpen: false,
});

